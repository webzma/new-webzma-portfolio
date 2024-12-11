import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  type: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button
      className={clsx(
        'text-white px-6 py-2 rounded-lg border-none outline-none rounded-3xl font-bold',
        type === 'CV' && 'bg-[#2563eb]',
        type === 'LINKEDIN' && 'bg-white text-gray-900',
        type === 'GITHUB' && 'bg-[#333] '
      )}
    >
      {children}
    </button>
  );
};
