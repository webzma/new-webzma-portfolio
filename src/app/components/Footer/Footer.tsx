import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="py-6 flex items-center justify-between">
      <p className="text-blue-100">Hecho por @webzma con amor ❤️.</p>

      <div className="flex items-center gap-x-2">
        <FaGithub className="text-blue-100" size={18} />
        <FaLinkedin className="text-blue-100" size={18} />
      </div>
    </footer>
  );
}
