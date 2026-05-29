import { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-cream text-ink px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md rounded-[36px] border border-pink-100 bg-white/90 shadow-soft backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
