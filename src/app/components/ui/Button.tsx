import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button
      className={clsx(
        "px-6 py-2  border-none outline-none rounded-lg font-bold shadow-xl flex items-center gap-x-2",
        type === "CV" && "bg-white text-gray-800",
        type === "LINKEDIN" && " bg-[#2563eb] text-white ",
        type === "GITHUB" && "bg-zinc-900 text-white"
      )}
    >
      {children}
    </button>
  );
};
