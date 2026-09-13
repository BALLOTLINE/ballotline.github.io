import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="flex items-center gap-3 font-display font-black uppercase text-foreground">
      <Image src="/logo.svg" alt="" width={25} height={25} />
      <span className="text-xl">
        <span className="text-2xl">&copy;</span> {new Date().getFullYear()} Ballotline
      </span>
    </footer>
  );
}
