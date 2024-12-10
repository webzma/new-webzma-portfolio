export function Hero() {
  return (
    <section className="grid grid-cols-2 pt-60 ">
      <div className="flex items-center justify-center">
        <div className="size-[400px] border-2 border-black rounded-full shadow-2xl"></div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h1 className="text-6xl font-extrabold text-[#18181b]">
          Wilberk Ledezma
        </h1>
        <h3 className="text-3xl text-gray-600">Desarrollador Frontend</h3>
        <p className="text-pretty text-lg w-[490px]">
          Creando experiencias digitales únicas con código limpio y diseño
          intuitivo. Transformando ideas en realidad, una línea de código a la
          vez.
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] bg-[#c7c7c7] rounded-full blur-3xl opacity-20 "></div>
    </section>
  );
}
