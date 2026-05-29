import { Button } from '../components/ui/Button';

const apps = [
  { name: 'Сбербанк', note: 'банк · без VPN', enabled: true },
  { name: 'Тинькофф', note: 'банк · без VPN', enabled: true },
  { name: 'Яндекс Такси', note: 'геолокация лучше без VPN', enabled: true },
  { name: 'Wildberries', note: 'маркетплейс', enabled: false },
];

export function WhiteListPage() {
  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Белый список</p>
            <h2 className="mt-2 text-2xl font-semibold">Приложения без VPN</h2>
          </div>
          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">{apps.filter((app) => app.enabled).length}</span>
        </div>

        <div className="mt-5 space-y-3">
          {apps.map((app) => (
            <div key={app.name} className="rounded-[28px] border border-pink-100 bg-pink-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ink">{app.name}</p>
                  <p className="text-sm text-slate-500">{app.note}</p>
                </div>
                <div className={`text-sm font-semibold ${app.enabled ? 'text-emerald-700' : 'text-slate-500'}`}>
                  {app.enabled ? 'включено' : 'выключено'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button fullWidth>Изменить список</Button>
    </section>
  );
}
