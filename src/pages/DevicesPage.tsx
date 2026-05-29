import { useAppContext } from '../providers/AppProvider';
import { Button } from '../components/ui/Button';

export function DevicesPage() {
  const { devices } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Устройства</p>
            <h2 className="mt-2 text-2xl font-semibold">Подключенные девайсы</h2>
          </div>
          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">{devices.length} / 3</span>
        </div>

        <div className="mt-5 space-y-3">
          {devices.map((device) => (
            <div key={device.id} className="rounded-[28px] border border-pink-100 bg-pink-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold">{device.name}</p>
                  <p className="text-sm text-slate-500">{device.lastActive}</p>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-semibold ${device.status === 'online' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                  {device.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button fullWidth>Добавить устройство</Button>
    </section>
  );
}
