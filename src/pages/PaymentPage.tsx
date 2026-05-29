import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../providers/AppProvider';

const methods = [
  { id: 'stars', title: 'Telegram Stars', subtitle: 'без банковской карты' },
  { id: 'sbp', title: 'СБП', subtitle: 'оплата по QR из банка' },
  { id: 'card', title: 'Банковская карта', subtitle: 'Tinkoff, Сбер, Альфа' },
];

export function PaymentPage() {
  const { payments } = useAppContext();
  const summary = payments[0];

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold">Оплата</h2>
        <p className="mt-2 text-sm text-slate-500">Выберите способ оплаты. Платежи mock-only.</p>

        <div className="mt-5 space-y-3">
          {methods.map((method) => (
            <label key={method.id} className="flex cursor-pointer items-center justify-between rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3">
              <div>
                <div className="font-semibold text-ink">{method.title}</div>
                <div className="text-sm text-slate-500">{method.subtitle}</div>
              </div>
              <input type="radio" name="payment" value={method.id} defaultChecked={method.id === 'stars'} className="h-4 w-4 text-pink-500" />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>План</span>
          <span>{summary.plan}</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-3xl font-semibold">
          <span>Итого</span>
          <span>{summary.amount} ₽</span>
        </div>
        <p className="mt-2 text-sm text-slate-500">{summary.trialDays} дня бесплатно, списание {summary.nextChargeDate}</p>
      </div>

      <div className="grid gap-3">
        <Link to="/success">
          <Button fullWidth>Оплатить</Button>
        </Link>
        <Link to="/subscription">
          <Button variant="secondary" fullWidth>Вернуться</Button>
        </Link>
      </div>
    </section>
  );
}
