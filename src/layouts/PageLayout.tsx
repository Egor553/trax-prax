import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      className="min-h-screen bg-cream px-4 pb-24 pt-6 sm:px-6"
    >
      <div className="mx-auto max-w-md">
        {title && <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">{title}</div>}
        {children}
      </div>
    </motion.main>
  );
}
