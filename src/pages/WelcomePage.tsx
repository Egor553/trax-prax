import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function WelcomePage() {
  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-200 p-6 text-white shadow-soft">
        <div className="text-sm uppercase tracking-[0.26em] text-pink-100">Telegram Mini App</div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">that girl <span className="text-gradient">vpn</span></h1>
        <p className="mt-4 text-sm text-white/85">
          VPN-сервис, вдохновлённый iOS UI, Telegram-опытом и премиальной эстетикой. Первые 3 дня бесплатно.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-[28px] bg-white p-5 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-500">3 дня бесплатно</p>
          <p className="mt-3 text-sm text-slate-600">
            Безлимит на 3 устройства, быстрые серверы и smart режим — всё в одном мини-приложении.
          </p>
        </div>
        <div className="grid gap-3">
          <Link to="/subscription">
            <Button fullWidth>Начать — 3 дня бесплатно</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="secondary" fullWidth>Уже подписана</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
