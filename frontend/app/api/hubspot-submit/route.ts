import { NextRequest, NextResponse } from "next/server";

const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID!;
const FORM_GUID = process.env.HUBSPOT_FORM_GUID!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      mobile,
      email,
      productEnquiry,
      message,
      hutk,
      pageUri,
      consent,
    } = body;

    // Validate required fields server-side
    if (!firstName || !lastName || !email || !productEnquiry || !message) {
      return NextResponse.json(
        { ok: false, error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const payload: Record<string, unknown> = {
      fields: [
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "phone", value: mobile },
        { name: "email", value: email },
        { name: "product_enquiry", value: productEnquiry },
        { name: "message", value: message },
      ],
      context: {
        ...(hutk ? { hutk } : {}),
        pageUri: pageUri ?? "https://uvatechservices.com",
        pageName: "Contact",
      },
    };

    // GDPR legal consent — required for UK contacts
    if (consent) {
      payload.legalConsentOptions = {
        consent: {
          consentToProcess: true,
          text: "I agree to allow UVA Product and IT Services Limited to store and process my personal data.",
        },
      };
    }

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("[HubSpot] Submission failed:", err);
      return NextResponse.json(
        { ok: false, error: "Failed to submit to HubSpot. Please try again." },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[HubSpot] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
