// screens-bot.jsx — Telegram bot chat screens (3 scenarios)
// onboarding · payment-success-with-key · renewal

const TG_BLUE = '#3390EC';

function BotShell({ children }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* chat header */}
      <div style={{
        paddingTop: 56, padding: '56px 12px 8px',
        background: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.1)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg width="11" height="20" viewBox="0 0 11 20" style={{ color: TG_BLUE }}>
          <path d="M10 2L2 10l8 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div style={{
          width: 36, height: 36, borderRadius: 999,
          background: 'linear-gradient(135deg, #FF87BA 0%, #E84B95 60%, #B53078 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--tg-font-display)', fontStyle: 'italic',
          color: '#fff', fontSize: 19, lineHeight: 1, letterSpacing: '-0.04em',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
        }}>tg</div>
        <div style={{ flex: 1, lineHeight: 1.15 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: '#000', fontFamily: 'Onest, sans-serif' }}>that girl · vpn</div>
          <div style={{ fontSize: 12, color: '#7C8B97', fontFamily: 'Onest, sans-serif' }}>бот · 14 821 подписчиц</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C8B97" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>
        </svg>
      </div>

      <div className="phone-screen tg-chat-bg" style={{
        flex: 1, overflowY: 'auto', padding: '14px 10px 84px',
      }}>{children}</div>

      {/* composer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '8px 8px 34px',
        background: '#fff', borderTop: '0.5px solid rgba(0,0,0,0.08)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AA5AD" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="3" width="18" height="18" rx="4"/>
            <circle cx="9" cy="10" r="1.5" fill="#9AA5AD"/>
            <path d="M3 17l5-5 4 4 3-3 6 6"/>
          </svg>
        </div>
        <div style={{
          flex: 1, height: 36, background: '#F1F1F1', borderRadius: 18,
          display: 'flex', alignItems: 'center', padding: '0 14px',
          color: '#9AA5AD', fontSize: 14, fontFamily: 'Onest, sans-serif',
        }}>Сообщение</div>
        <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={TG_BLUE}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
            <path d="M19 12a7 7 0 0 1-14 0M12 19v3" stroke={TG_BLUE} strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bubble({ children, kind = 'bot', time = '14:32', tail = true, kbd }) {
  const isUser = kind === 'user';
  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
      <div style={{ maxWidth: '82%', display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start' }}>
        <div style={{
          position: 'relative',
          background: isUser ? '#EEFFDE' : '#FFFFFF',
          borderRadius: 14,
          borderBottomLeftRadius: !isUser && tail ? 4 : 14,
          borderBottomRightRadius: isUser && tail ? 4 : 14,
          padding: '8px 12px 6px',
          fontFamily: 'Onest, sans-serif',
          fontSize: 14.5, lineHeight: 1.34, color: '#000',
          boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
        }}>
          {children}
          <div style={{ fontSize: 11, color: '#7C8B97', textAlign: 'right', marginTop: 3 }}>
            {time}{isUser && <span style={{ marginLeft: 4, color: '#4FAE4E' }}>✓✓</span>}
          </div>
        </div>
        {kbd && (
          <div style={{
            marginTop: 4, width: '100%',
            background: '#fff', borderRadius: 12, padding: 4,
            boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
            display: 'flex', flexDirection: 'column', gap: 3,
          }}>
            {kbd.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 3 }}>
                {row.map((b, j) => (
                  <button key={j} style={{
                    flex: 1,
                    background: b.app
                      ? 'linear-gradient(180deg, #FF6FAE 0%, #E84B95 60%, #C42679 100%)'
                      : '#F1F1F1',
                    color: b.app ? '#fff' : TG_BLUE,
                    borderRadius: 8, padding: '11px 8px',
                    fontFamily: 'Onest, sans-serif', fontSize: 14, fontWeight: 600,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    boxShadow: b.app ? 'inset 0 1px 0 rgba(255,255,255,0.4)' : 'none',
                  }}>
                    {b.icon}{b.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BotOnboarding() {
  return (
    <BotShell>
      <Bubble time="14:21">
        <span style={{ fontFamily: 'var(--tg-font-display)', fontStyle: 'italic', fontSize: 22, color: '#C42679' }}>
          Привет, красавица 🤍
        </span><br/>
        Это <i>that girl</i> — vpn, который понимает девушек в центре Москвы.
      </Bubble>
      <Bubble time="14:21">
        <b>520 ₽ в месяц.</b> Безлимит на 3 устройства.<br/>
        Первые 3 дня — за наш счёт, без карты.
      </Bubble>
      <Bubble time="14:21" kbd={[
        [{ label: 'Подключить', icon: <Heart size={13} color="#fff"/>, app: true }],
        [{ label: 'Что внутри' }, { label: 'Пригласить' }],
      ]}/>

      <Bubble kind="user" time="14:22">Подключить</Bubble>

      <Bubble time="14:22">
        Открываю мини-приложение — там оплата и ключ для Happ.
      </Bubble>
      <Bubble time="14:22" kbd={[
        [{ label: 'Открыть that girl', icon: <ExternalIcon size={13} color="#fff"/>, app: true }],
      ]}/>
    </BotShell>
  );
}

function BotPaymentSuccess() {
  return (
    <BotShell>
      <Bubble time="14:31">
        <span style={{ fontFamily: 'var(--tg-font-display)', fontStyle: 'italic', fontSize: 22, color: '#C42679' }}>
          Готово, ты подключена ✨
        </span><br/>
        Оплата прошла. Подписка активна до <b>15 июня</b>.
      </Bubble>
      <Bubble time="14:31">
        Дальше — 2 шага:<br/>
        <b>1.</b> Скачай Happ из App Store<br/>
        <b>2.</b> Нажми «Открыть в Happ» — ключ подставится сам
      </Bubble>
      <Bubble time="14:31" kbd={[
        [{ label: 'Скачать Happ', icon: <Apple size={13}/>, app: false }],
      ]}/>

      <Bubble time="14:31">
        {/* Happ key card */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: 10, background: '#FFF0F6', borderRadius: 10,
          marginTop: 2, marginBottom: 2,
        }}>
          <HappLogo size={32}/>
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#2A0A18' }}>Твой ключ для Happ</div>
            <div style={{ fontSize: 11, color: '#6B3A50', marginTop: 2 }}>nl-ams-04 · vless · обновлён сейчас</div>
          </div>
        </div>
      </Bubble>
      <Bubble time="14:31" kbd={[
        [{ label: 'Открыть в Happ', icon: <ExternalIcon size={13} color="#fff"/>, app: true }],
        [{ label: 'Скопировать ссылку' }, { label: 'Кабинет' }],
      ]}/>
    </BotShell>
  );
}

function BotRenewal() {
  return (
    <BotShell>
      <Bubble time="11:04">
        <span style={{ fontFamily: 'var(--tg-font-display)', fontStyle: 'italic', fontSize: 22, color: '#C42679' }}>
          Доброе утро 🌸
        </span><br/>
        Подписка <i>that girl</i> закончится через <b>2 дня</b>. Продлим, чтобы патрики не остались без сети?
      </Bubble>
      <Bubble time="11:04" kbd={[
        [{ label: 'Продлить за 520 ₽', icon: <Heart size={13} color="#fff"/>, app: true }],
        [{ label: 'Сменить тариф' }, { label: 'Позже' }],
      ]}/>

      <Bubble kind="user" time="11:05">Продлеваю</Bubble>

      <Bubble time="11:05">
        Открываю кассу — оплата через Telegram Stars или СБП.
      </Bubble>
      <Bubble time="11:05" kbd={[
        [{ label: 'Оплатить 520 ₽', icon: <Lightning size={13} color="#fff"/>, app: true }],
      ]}/>
    </BotShell>
  );
}

Object.assign(window, { BotOnboarding, BotPaymentSuccess, BotRenewal });
