import { useAppContext } from '../providers/AppProvider';
import { Button } from '../components/ui/Button';

export function ServersPage() {
  const { servers } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Серверы</p>
            <h2 className="mt-2 text-2xl font-semibold">Выберите локацию</h2>
          </div>
          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">Auto</span>
        </div>

        <div className="mt-5 space-y-3">
          {servers.map((server) => (
            <div key={server.id} className="rounded-[28px] border border-pink-100 bg-pink-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold">{server.city}</p>
                  <p className="text-sm text-slate-500">ping {server.ping} мс</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{Math.round(server.load * 100)}%</div>
                  {server.selected && <div className="text-xs text-pink-600">Ваша текущая</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button fullWidth>Автовыбор сервера</Button>
    </section>
  );
}
