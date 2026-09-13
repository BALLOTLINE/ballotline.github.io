import Image from "next/image";
import { About, Clients, Contact, Services } from "@/components/home";
import Section from "@/components/Section";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-16 px-6 py-12 sm:py-20">
      <h1 className="flex justify-center">
        <Image
          className="h-auto w-full max-w-md"
          src="/logo-full.svg"
          alt="BALLOTLINE"
          width={1000}
          height={227}
          priority
        />
      </h1>
      <Section title="Who we are">
        <About />
      </Section>
      <Section title="What we do">
        <Services />
      </Section>
      <Section title="Our clients">
        <Clients />
      </Section>
      <Section title="Get in touch">
        <Contact />
      </Section>
      <SiteFooter />
    </main>
  );
}
