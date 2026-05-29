import { useAppContext } from '../providers/AppProvider';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function ProfilePage() {
  const { user, subscription, devices } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-2xl font-semibold text-pink-700">{user.name[0]}</div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-pink-500">Профиль</p>
            <h2 className="mt-2 text-2xl font-semibold">{user.name}</h2>
            <p className="text-sm text-slate-500">{user.username}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-[28px] bg-pink-50 p-4">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Подписка</span>
            <span>{subscription.status}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Устройства</span>
            <span>{devices.length} / 3</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <Link to="/referral">
          <Button fullWidth>Реферальная программа</Button>
        </Link>
        <Button variant="secondary" fullWidth>Поддержка</Button>
      </div>
    </section>
  );
}
