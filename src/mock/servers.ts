import type { Server } from '../types';

export const servers: Server[] = [
  { id: 'server-1', country: 'NL', city: 'Амстердам · A', ping: 42, load: 0.32, selected: true },
  { id: 'server-2', country: 'SE', city: 'Стокгольм', ping: 48, load: 0.21 },
  { id: 'server-3', country: 'FI', city: 'Хельсинки', ping: 36, load: 0.45 },
  { id: 'server-4', country: 'CH', city: 'Цюрих', ping: 58, load: 0.18, premium: true },
];
