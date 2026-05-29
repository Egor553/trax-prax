import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../providers/AppProvider';

export function SubscriptionPage() {
  const { subscription } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-pink-500">План</p>
            <h2 className="mt-3 text-3xl font-semibold">that girl · VPN</h2>
          </div>
          <div className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">
            {subscription.period}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-200 p-5 text-white shadow-glow">
          <div className="flex items-end gap-3">
            <span className="text-5xl font-black">{subscription.price}</span>
            <span className="text-lg">₽ / мес</span>
          </div>
          <p className="mt-2 text-sm text-white/80">Безлимит на 3 устройства · отмена в один тап</p>
        </div>

        <div className="mt-6 space-y-3">
          {['безлимит', 'умный режим', 'белые списки', 'серверы 18 локаций'].map((item) => (
            <div key={item} className="rounded-3xl bg-pink-50 px-4 py-3 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        <Link to="/payment">
          <Button fullWidth>Перейти к оплате</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary" fullWidth>Пропустить</Button>
        </Link>
      </div>
    </section>
  );
}
