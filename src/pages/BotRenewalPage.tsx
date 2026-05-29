import { Button } from '../components/ui/Button';

export function BotRenewalPage() {
  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.24em] text-pink-500">Telegram bot</p>
        <h2 className="mt-4 text-2xl font-semibold">Продление подписки</h2>
        <p className="mt-3 text-sm text-slate-600">Макет уведомлений и кнопок для продления подписки через Telegram.</p>
      </div>

      <div className="space-y-4 rounded-[32px] bg-pink-50 p-5">
        {['Подписка закончится через 2 дня', 'Продлить за 520 ₽', 'Оплатить 520 ₽'].map((text) => (
          <div key={text} className="rounded-3xl bg-white px-4 py-3 text-sm text-slate-700">{text}</div>
        ))}
      </div>

      <Button fullWidth>Перейти к продлению</Button>
    </section>
  );
}
