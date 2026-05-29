import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function SuccessPage() {
  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-200 p-6 text-white shadow-soft">
        <div className="text-sm uppercase tracking-[0.24em] text-pink-100">Успех</div>
        <h2 className="mt-4 text-3xl font-semibold">Готово, подписка активирована</h2>
        <p className="mt-3 text-sm text-white/85">
          Ваша подписка активна, ключ Happ скоро доступен. Откройте приложение Happ для подключения.
        </p>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">Что дальше</p>
        <ol className="mt-4 space-y-3 text-sm text-slate-600">
          <li>1. Скачайте Happ</li>
          <li>2. Нажмите «Открыть в Happ»</li>
          <li>3. Начните пользоваться vpn</li>
        </ol>
      </div>

      <div className="grid gap-3">
        <Link to="/dashboard">
          <Button fullWidth>Открыть в Happ</Button>
        </Link>
        <Link to="/subscription">
          <Button variant="secondary" fullWidth>Вернуться в приложение</Button>
        </Link>
      </div>
    </section>
  );
}
