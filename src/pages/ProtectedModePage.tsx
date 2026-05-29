import { Button } from '../components/ui/Button';

export function ProtectedModePage() {
  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-200 p-6 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.24em] text-pink-100">Защищённый режим</p>
        <h2 className="mt-4 text-3xl font-semibold">Автооптимизация сети</h2>
        <p className="mt-3 text-sm text-white/85">
          VPN автоматически подключается, когда сеть нестабильна. До и после пинг в одном экране.
        </p>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="grid gap-4">
          <div className="rounded-[28px] bg-pink-50 p-4 text-sm text-slate-700">
            <div className="font-semibold">Сеть</div>
            <div className="mt-2 text-slate-500">Центр города — нестабильно</div>
          </div>
          <div className="flex items-center justify-between rounded-[28px] bg-pink-50 p-4 text-sm text-slate-700">
            <span>Пинг до VPN</span>
            <span>420 мс</span>
          </div>
          <div className="flex items-center justify-between rounded-[28px] bg-pink-50 p-4 text-sm text-slate-700">
            <span>Пинг после VPN</span>
            <span>42 мс</span>
          </div>
        </div>
      </div>

      <Button fullWidth>Оставить включённым</Button>
    </section>
  );
}
