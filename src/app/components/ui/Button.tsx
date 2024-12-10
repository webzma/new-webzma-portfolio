interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-[#333] text-white px-4 py-2 rounded-lg">
      {children}
    </button>
  );
}
