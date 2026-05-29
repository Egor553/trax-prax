import { useState } from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Toggle({ checked = false, onChange }: ToggleProps) {
  const [value, setValue] = useState(checked);

  return (
    <button
      type="button"
      onClick={() => {
        const next = !value;
        setValue(next);
        onChange?.(next);
      }}
      className={`relative inline-flex h-9 w-16 items-center rounded-full transition ${
        value ? 'bg-pink-500' : 'bg-slate-300'
      }`}
    >
      <span
        className={`inline-block h-7 w-7 rounded-full bg-white shadow transition-transform ${
          value ? 'translate-x-7' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
