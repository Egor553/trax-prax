import React, { createContext, useContext, useMemo, useState } from 'react';
import { devices } from '../mock/devices';
import { referrals } from '../mock/referrals';
import { servers } from '../mock/servers';
import { subscription } from '../mock/subscription';
import { users } from '../mock/users';
import { payments } from '../mock/payments';
import type { AppContextValue } from '../types';

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<'pink' | 'light'>('pink');
  const [selectedServer] = useState(servers[0]);
  const [appState] = useState({ user: users[0], devices, servers, referrals, subscription, payments });

  const value = useMemo<AppContextValue>(() => ({
    theme,
    user: appState.user,
    subscription: appState.subscription,
    devices: appState.devices,
    servers: appState.servers,
    referrals: appState.referrals,
    payments: appState.payments,
    selectedServer,
  }), [theme, appState, selectedServer]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
