import { NextResponse } from "next/server";

// A basic Next.js API route to act as a WhatsApp Business API Webhook
// This can be configured in your Meta Developer portal.

export async function GET(request: Request) {
  // Meta Webhook Verification
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  // In a real app, define a secret token in your .env
  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "my_dummy_token";

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return new NextResponse("WhatsApp Webhook is running", { status: 200 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if it's a WhatsApp status update or message
    if (body.object === "whatsapp_business_account") {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          if (change.value && change.value.messages && change.value.messages[0]) {
            const message = change.value.messages[0];
            const senderId = message.from; // User's phone number
            const messageText = message.text?.body?.toLowerCase().trim() || "";
            const interactiveResponseId = message.interactive?.list_reply?.id; // If they clicked a list option

            // This is the user's input, either from typing or clicking a list option
            const userInput = interactiveResponseId || messageText;

            let responseText = "";

            // Dummy Bot Logic
            if (["hi", "hello", "hey", "start"].includes(userInput)) {
              responseText = "Hello! How can I help? On which products do you have doubts? Reply with one of the options:\n1. DP360\n2. Paarth\n3. Product 3";
            } else if (userInput === "1" || userInput === "dp360") {
              responseText = "DP360 is our Data Platform product. It unifies retail and consumer data into one decision layer with demand forecasting and role-based dashboards. How can I help you with DP360?";
            } else if (userInput === "2" || userInput === "paarth") {
              responseText = "Paarth is our AI Agent product. It tests your software while you build it, writing test cases and catching regressions. How can I help you with Paarth?";
            } else if (userInput === "3" || userInput === "product 3") {
              responseText = "Product 3 is currently in development. It will offer cutting-edge features. Stay tuned for more updates!";
            } else {
              responseText = "I didn't quite catch that. You can say 'Hi' to see our list of products.";
            }

            // Simulate sending a message back to WhatsApp
            // In a real environment, you would use fetch() to send a POST request to the Graph API
            console.log(`\n[WHATSAPP DUMMY BOT]`);
            console.log(`Received from ${senderId}: "${userInput}"`);
            console.log(`Sending to ${senderId}: "${responseText}"\n`);
            
            // Uncomment the below code when integrating with actual Meta API
            /*
            const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
            const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
            
            await fetch(`https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`, {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                messaging_product: "whatsapp",
                to: senderId,
                type: "text",
                text: { body: responseText },
              }),
            });
            */
          }
        }
      }
      return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } else {
      return new NextResponse("Not Found", { status: 404 });
    }
  } catch (error) {
    console.error("WhatsApp Webhook Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
