import { BiHome } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";

export function Header() {
  return (
    <div className="flex w-full justify-center items-center py-2 fixed left-0 right-0 h-16 bg-transparent z-30">
      <div className="z-10 fixed  rounded-2xl flex items-center p-2 neutral-border-medium border-solid-1 radius-m-4 shadow-l transparent gap-x-2 bg-gray-800 backdrop-blur">
        <a
          href="#"
          className=" rounded-2xl px-4 py-1 text-sm font-medium flex items-center gap-x-2 text-[#6078ff]"
        >
          <BiHome size={18} />
          Inicio
        </a>
        <a
          href="#"
          className="text-white rounded-2xl px-4 py-1  text-sm font-medium flex items-center gap-x-2"
        >
          <MdOutlineWorkOutline size={18} />
          Experiencia
        </a>
        <a
          href="#"
          className="text-white rounded-2xl px-4 py-1  text-sm font-medium flex items-center gap-x-2"
        >
          <MdWeb size={18} />
          Proyectos
        </a>
        <a
          href="#"
          className="text-white rounded-2xl px-4 py-1  text-sm font-medium flex items-center gap-x-2"
        >
          <FaRegBookmark size={16} />
          Blog
        </a>
      </div>
    </div>
  );
}
