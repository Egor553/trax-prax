import type { Device } from '../types';

export const devices: Device[] = [
  { id: 'device-1', name: 'iPhone 15', status: 'online', lastActive: 'сейчас', isCurrent: true },
  { id: 'device-2', name: 'MacBook Air', status: 'online', lastActive: '4 часа назад' },
  { id: 'device-3', name: 'iPad', status: 'offline', lastActive: '1 день назад' },
];
