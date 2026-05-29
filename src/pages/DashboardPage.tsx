import { Link } from 'react-router-dom';
import { useAppContext } from '../providers/AppProvider';
import { Button } from '../components/ui/Button';

export function DashboardPage() {
  const { subscription, selectedServer, devices } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">VPN статус</p>
            <h2 className="mt-2 text-2xl font-semibold">Подключено</h2>
          </div>
          <div className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700">Активно</div>
        </div>

        <div className="mt-6 grid gap-4 rounded-[28px] bg-pink-50 p-4 text-slate-700">
          <div className="flex items-center justify-between text-sm">
            <span>Сервер</span>
            <span>{selectedServer.city}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Пинг</span>
            <span>{selectedServer.ping} мс</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Устройства</span>
            <span>{devices.length} / 3</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <Link to="/devices">
          <Button fullWidth>Устройства</Button>
        </Link>
        <Link to="/servers">
          <Button variant="secondary" fullWidth>Серверы</Button>
        </Link>
      </div>
    </section>
  );
}
