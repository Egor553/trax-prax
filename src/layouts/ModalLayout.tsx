import { ReactNode } from 'react';

interface ModalLayoutProps {
  children: ReactNode;
}

export function ModalLayout({ children }: ModalLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 p-4">
      <div className="w-full max-w-md rounded-t-[32px] bg-white p-6 shadow-soft">
        {children}
      </div>
    </div>
  );
}
