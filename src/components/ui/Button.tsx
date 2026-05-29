import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', fullWidth = false, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition-colors',
        fullWidth && 'w-full',
        variant === 'primary' && 'bg-pink-500 text-white hover:bg-pink-600',
        variant === 'secondary' && 'bg-white text-pink-600 border border-pink-100 hover:bg-pink-50',
        variant === 'ghost' && 'bg-transparent text-ink hover:text-pink-600'
      )}
    >
      {children}
    </button>
  );
}
