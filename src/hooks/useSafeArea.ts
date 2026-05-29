import { useEffect, useState } from 'react';

export function useSafeArea() {
  const [insets, setInsets] = useState({ top: 0, bottom: 0, left: 0, right: 0 });

  useEffect(() => {
    const update = () => {
      setInsets({
        top: Number(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-top')) || 0,
        bottom: Number(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-bottom')) || 0,
        left: Number(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-left')) || 0,
        right: Number(getComputedStyle(document.documentElement).getPropertyValue('--safe-area-inset-right')) || 0,
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return insets;
}
