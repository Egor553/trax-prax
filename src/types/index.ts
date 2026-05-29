export interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

export interface Subscription {
  status: 'active' | 'expired' | 'trial';
  price: number;
  period: string;
  daysLeft: number;
}

export interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline';
  lastActive: string;
  isCurrent?: boolean;
}

export interface Server {
  id: string;
  country: string;
  city: string;
  ping: number;
  load: number;
  selected?: boolean;
  premium?: boolean;
}

export interface Referral {
  id: string;
  name: string;
  joinedAt: string;
  bonusMonths: number;
}

export interface PaymentMethod {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface PaymentSummary {
  plan: string;
  amount: number;
  trialDays: number;
  nextChargeDate: string;
}

export interface AppContextValue {
  theme: 'pink' | 'light';
  user: User;
  subscription: Subscription;
  devices: Device[];
  servers: Server[];
  referrals: Referral[];
  payments: PaymentSummary[];
  selectedServer: Server;
}
