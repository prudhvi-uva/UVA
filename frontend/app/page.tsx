import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
