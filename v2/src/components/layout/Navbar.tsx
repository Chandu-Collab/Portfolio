import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center bg-background/50 backdrop-blur-md border-b border-border">
      <Link href="/" className="font-bold text-xl tracking-tighter text-foreground">
        CHR<span className="text-primary">.</span>
      </Link>
      <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#lab" className="hover:text-primary transition-colors">Lab</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#shinka" className="hover:text-secondary transition-colors">SHINKA</Link>
      </nav>
    </header>
  );
}
