import { useAppContext } from '../providers/AppProvider';
import { Button } from '../components/ui/Button';

export function ReferralPage() {
  const { referrals } = useAppContext();

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-[32px] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-200 p-6 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.24em] text-pink-100">Пригласи подругу</p>
        <h2 className="mt-4 text-3xl font-semibold">Получай бонусный месяц</h2>
        <p className="mt-3 text-sm text-white/85">За каждую оплатившую подругу — тебе и ей +1 месяц.</p>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <p className="text-sm text-slate-500">Твоя ссылка</p>
        <div className="mt-3 rounded-3xl bg-pink-50 p-4 text-sm font-semibold text-pink-700">t.me/thatgirl_vpn?ref=sonya</div>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">Приглашенные</p>
          <span className="text-xs uppercase tracking-[0.24em] text-pink-500">{referrals.length}</span>
        </div>
        <div className="space-y-3">
          {referrals.map((item) => (
            <div key={item.id} className="rounded-[28px] bg-pink-50 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-ink">
                <span>{item.name}</span>
                <span>+{item.bonusMonths} мес</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.joinedAt}</p>
            </div>
          ))}
        </div>
      </div>

      <Button fullWidth>Поделиться ссылкой</Button>
    </section>
  );
}
