import Link from 'next/link';

export function Header() {
  return (
    <header className='fixed top-0 w-full left-0 flex items-center justify-between py-4 px-32 font-[family-name:var(--font-geist-sans)] z-10 bg-white/40 backdrop-blur'>
      <Link href='/' className='text-2xl  font-bold'>
        webzma
      </Link>

      <nav>
        <ul className='flex items-center gap-x-4 [&>li>a]:font-medium  [&>li>a]:text-md hover:[&>li>a]:bg-[#eee] [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a]:rounded-2xl'>
          <li>
            <Link href='#'>Inicio</Link>
          </li>
          <li>
            <Link href='#'>Experiencia</Link>
          </li>
          <li>
            <Link href='#'>Proyectos</Link>
          </li>
          <li>
            <Link href='#'>Tecnologías</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
