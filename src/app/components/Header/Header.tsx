import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="text-2xl  font-bold">
        webzma
      </Link>

      <nav>
        <ul className="flex items-center gap-x-4 [&>li>a]:font-medium [&>li>a]:text-md hover:[&>li>a]:bg-[#eee] [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a]:rounded-2xl">
          <li>
            <Link href="#">Inicio</Link>
          </li>
          <li>
            <Link href="#">Experiencia</Link>
          </li>
          <li>
            <Link href="#">Proyectos</Link>
          </li>
          <li>
            <Link href="#">Tecnologías</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
