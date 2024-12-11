import Image from 'next/image';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className='grid grid-cols-2 pt-60 pb-[3000px] gap-x-16'>
      <div className='flex items-center justify-center'>
        <Image
          src='/avatar.webp'
          alt='avatar image'
          width={500}
          height={500}
          className='relative size-[350px] border-4 border-black rounded-3xl shadow-2xl object-cover'
        />
      </div>

      <div className='flex flex-col gap-y-4 justify-center pt-12'>
        <h1 className='text-6xl font-extrabold text-[#18181b]'>
          Wilberk Ledezma
        </h1>
        <h3 className='text-3xl text-gray-600'>Desarrollador Frontend</h3>
        <p className='text-pretty text-lg w-[490px]'>
          Creando experiencias digitales únicas con código limpio y diseño
          intuitivo. Transformando ideas en realidad, una línea de código a la
          vez.
        </p>

        <div className='flex gap-x-2 pt-6'>
          <Button type='CV'>Descargar CV</Button>
          <Button type='LINKEDIN'>Conectemos en LinkedIn</Button>
          <Button type='GITHUB'>Visita mi GitHub</Button>
        </div>
      </div>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c7c7c7] rounded-full blur-3xl opacity-30 animate-pulse -z-10'></div>
    </section>
  );
}
