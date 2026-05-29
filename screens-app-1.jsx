// screens-app-1.jsx — Mini App screens, batch 1
// Splash · Paywall · Payment sheet · Success

// ── Splash / welcome (first open of the mini app) ──────────────

function SplashScreen() {
  return (
    <div className="phone-screen bg-glossy" style={{
      width: '100%', height: '100%', overflowY: 'auto',
      color: '#fff', position: 'relative', display: 'flex', flexDirection: 'column',
    }}>
      <SparkleField items={[
        { x: '12%', y: '18%', size: 14 },
        { x: '78%', y: '12%', size: 10 },
        { x: '88%', y: '34%', size: 16, opacity: 0.5 },
        { x: '8%', y: '52%', size: 12, opacity: 0.6 },
        { x: '70%', y: '64%', size: 9 },
      ]}/>

      <MiniAppHeader title="welcome" dark/>

      <div style={{ flex: 1, padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
        {/* big italic wordmark */}
        <div style={{ marginTop: 'auto' }}>
          <div style={{
            fontFamily: 'var(--tg-font-display)', fontStyle: 'italic',
            fontSize: 96, lineHeight: 0.88, letterSpacing: '-0.025em',
            color: '#fff', textShadow: '0 6px 22px rgba(120,20,60,0.35)',
          }}>that<br/>girl</div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 18, padding: '6px 12px',
            background: 'rgba(255,255,255,0.18)', borderRadius: 999,
            backdropFilter: 'blur(10px)',
            fontFamily: 'Onest, sans-serif', fontSize: 13, fontWeight: 600,
            color: '#fff', letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#6FE3B0' }}/>
            vpn для своих
          </div>
        </div>

        <div style={{ marginTop: 28, marginBottom: 32 }}>
          <div style={{
            fontFamily: 'var(--tg-font-display)', fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.15, color: 'rgba(255,255,255,0.95)',
            maxWidth: 280,
          }}>
            интернет, как<br/>
            ты привыкла —<br/>
            <span style={{ opacity: 0.8 }}>в патриках, в такси, в кофемании</span>
          </div>
        </div>

        <CTA variant="white" icon={<Heart size={14} color="#C42679"/>}>
          Начать — 3 дня бесплатно
        </CTA>
        <div style={{ height: 12 }}/>
        <button style={{
          width: '100%', padding: '12px 22px',
          background: 'transparent', color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 14,
          borderRadius: 999,
        }}>уже подписана · войти</button>

        <div style={{ height: 28 }}/>
      </div>
    </div>
  );
}

// ── Paywall ────────────────────────────────────────────────────

function PaywallScreen() {
  const features = [
    { ico: <Heart size={14} color="#E84B95"/>, t: 'безлимит', s: '3 устройства' },
    { ico: <Bow size={16} color="#E84B95"/>, t: 'белые списки', s: 'банк, такси, маркетплейсы' },
    { ico: <Lightning size={14} color="#E84B95"/>, t: 'умный режим', s: 'включается сам в центре' },
    { ico: <Pin size={14} color="#E84B95"/>, t: 'серверы', s: '18 локаций, низкий ping' },
  ];
  return (
    <div className="phone-screen bg-soft-rose" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="подписка"/>

      <div style={{ padding: '8px 22px 26px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 10px', borderRadius: 999,
          background: '#fff', color: '#C42679',
          fontFamily: 'Onest, sans-serif', fontSize: 11, fontWeight: 700,
          marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase',
          boxShadow: '0 4px 14px rgba(180,40,100,0.12)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#6FE3B0' }}/>
          3 дня бесплатно
        </div>

        <Display size={56}>
          интернет,<br/>как ты <span style={{ color: '#C42679' }}>привыкла</span>
        </Display>
        <div style={{
          marginTop: 12, fontFamily: 'Onest, sans-serif',
          fontSize: 15, lineHeight: 1.45, color: '#6B3A50',
          maxWidth: 320,
        }}>
          Без отвалов в патриках, без танцев в кофемании.<br/>
          Безлимит на 3 устройства, ключ — в Happ за один тап.
        </div>
      </div>

      {/* price hero card */}
      <div className="bubble" style={{
        position: 'relative',
        margin: '0 16px 14px',
        padding: 24, borderRadius: 30,
        color: '#fff', overflow: 'hidden',
      }}>
        <BowCorner position="top-right" size={32} color="#FFCFE2"/>
        <Eyebrow color="#fff">месячная подписка</Eyebrow>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 12 }}>
          <span style={{
            fontFamily: 'var(--tg-font-num)', fontWeight: 800,
            fontSize: 88, lineHeight: 0.85, letterSpacing: '-0.06em',
          }}>520</span>
          <span style={{ fontFamily: 'Onest, sans-serif', fontSize: 22, fontWeight: 700, marginLeft: 2 }}>₽</span>
        </div>
        <div style={{
          fontFamily: 'Onest, sans-serif', fontSize: 13,
          color: 'rgba(255,255,255,0.85)', marginTop: -2, marginBottom: 18,
        }}>каждый месяц · отмена в один тап</div>

        <CTA variant="white" icon={<Heart size={14} color="#C42679"/>}>
          Подключить за 520 ₽
        </CTA>
        <div style={{
          marginTop: 10, textAlign: 'center',
          fontFamily: 'Onest, sans-serif', fontSize: 11.5,
          color: 'rgba(255,255,255,0.75)',
        }}>списание через 3 дня · оплата Telegram Stars / СБП</div>
      </div>

      {/* feature list */}
      <div className="card" style={{ margin: '0 16px 14px', padding: '4px 18px', borderRadius: 24 }}>
        {features.map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 0',
            borderBottom: i < features.length - 1 ? '0.5px solid rgba(42,10,24,0.08)' : 'none',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: 'linear-gradient(135deg, #FFE0EE 0%, #FFC9DF 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{f.ico}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600, color: '#2A0A18' }}>{f.t}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12.5, color: '#6B3A50', marginTop: 1 }}>{f.s}</div>
            </div>
          </div>
        ))}
      </div>

      {/* social proof */}
      <div style={{
        margin: '0 16px 26px',
        padding: '14px 18px', borderRadius: 18,
        background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ display: 'flex' }}>
          {['#FFC9DF', '#F2BEDF', '#E5B7E0'].map((c, i) => (
            <div key={i} style={{
              width: 28, height: 28, borderRadius: 999, background: c,
              marginLeft: i ? -10 : 0, border: '2px solid #fff',
            }}/>
          ))}
        </div>
        <div style={{ flex: 1, fontFamily: 'Onest, sans-serif', fontSize: 12.5, color: '#2A0A18', lineHeight: 1.35 }}>
          <b>14 821 девушка</b> уже с нами<br/>
          <span style={{ color: '#6B3A50' }}>средняя оценка в чате — 4.9 / 5</span>
        </div>
      </div>
      <div style={{ height: 30 }}/>
    </div>
  );
}

// ── Payment sheet ──────────────────────────────────────────────

function PaymentScreen() {
  const methods = [
    { id: 'tg', name: 'Telegram Stars', sub: 'без банковской карты', ico: <Lightning size={16} color="#fff"/>, badge: 'рекомендуем' },
    { id: 'sbp', name: 'СБП', sub: 'оплата по QR из приложения банка', ico: <span style={{ fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 14, color: '#fff' }}>₽</span> },
    { id: 'card', name: 'Карта', sub: 'Tinkoff · Альфа · Сбер · др.', ico: <span style={{ width: 18, height: 12, borderRadius: 2, background: '#fff' }}/> },
  ];
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="оплата"/>

      <div style={{ padding: '6px 22px 20px' }}>
        <Display size={42}>оформляем<br/>подписку</Display>
        <div style={{
          marginTop: 10, fontFamily: 'Onest, sans-serif',
          fontSize: 14, lineHeight: 1.45, color: '#6B3A50',
        }}>выбери, как удобно платить — потом можно переключить</div>
      </div>

      {/* order card */}
      <div className="card" style={{ margin: '0 16px 14px', padding: 18, borderRadius: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div className="bubble" style={{
            width: 48, height: 48, borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Heart size={20} color="#fff"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--tg-font-display)', fontStyle: 'italic', fontSize: 22, color: '#2A0A18', lineHeight: 1 }}>
              that girl · месяц
            </div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 2 }}>
              безлимит · 3 устройства
            </div>
          </div>
        </div>
        <div style={{ borderTop: '0.5px solid rgba(42,10,24,0.1)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Первые 3 дня', 'бесплатно'],
            ['Затем', '520 ₽ / мес'],
            ['Списание', '24 мая 2026'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Onest, sans-serif', fontSize: 13.5 }}>
              <span style={{ color: '#6B3A50' }}>{k}</span>
              <span style={{ color: '#2A0A18', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* methods */}
      <div style={{ padding: '6px 16px 0' }}>
        <Eyebrow>способ оплаты</Eyebrow>
      </div>
      <div className="card" style={{ margin: '8px 16px 18px', padding: 6, borderRadius: 22 }}>
        {methods.map((m, i) => (
          <div key={m.id} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 12px',
            borderRadius: 16,
            background: m.id === 'tg' ? 'rgba(255,224,238,0.6)' : 'transparent',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 11,
              background: m.id === 'tg'
                ? 'linear-gradient(135deg, #3390EC 0%, #1E70CC 100%)'
                : 'linear-gradient(135deg, #FF87BA 0%, #E84B95 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
            }}>{m.ico}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{m.name}</span>
                {m.badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: '#C42679',
                    padding: '2px 6px', borderRadius: 999, background: '#FFE0EE',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>{m.badge}</span>
                )}
              </div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 1 }}>{m.sub}</div>
            </div>
            <div style={{
              width: 22, height: 22, borderRadius: 999,
              background: m.id === 'tg' ? '#E84B95' : 'transparent',
              boxShadow: m.id === 'tg' ? 'none' : 'inset 0 0 0 1.5px rgba(42,10,24,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {m.id === 'tg' && <span style={{ width: 8, height: 8, background: '#fff', borderRadius: 999 }}/>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 16px 28px' }}>
        <CTA variant="hot" icon={<Heart size={14} color="#fff"/>}>
          Оплатить · 520 ₽
        </CTA>
        <div style={{
          marginTop: 12, textAlign: 'center',
          fontFamily: 'Onest, sans-serif', fontSize: 11.5, color: '#6B3A50',
          maxWidth: 280, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5,
        }}>
          Нажимая «Оплатить», ты соглашаешься с офертой.<br/>
          Подписка возобновляется автоматически, отмена — в один тап.
        </div>
      </div>
    </div>
  );
}

// ── Success ────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <div className="phone-screen bg-glossy" style={{
      width: '100%', height: '100%', overflowY: 'auto',
      color: '#fff', position: 'relative',
    }}>
      <SparkleField items={[
        { x: '15%', y: '14%', size: 14 },
        { x: '80%', y: '18%', size: 10 },
        { x: '70%', y: '32%', size: 16, opacity: 0.6 },
        { x: '20%', y: '40%', size: 9 },
        { x: '85%', y: '48%', size: 12, opacity: 0.7 },
      ]}/>

      <MiniAppHeader title="готово" dark/>

      <div style={{ padding: '8px 24px 22px' }}>
        {/* big check medal */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0 18px' }}>
          <div className="ring-pulse" style={{ position: 'relative' }}>
            <div style={{
              width: 116, height: 116, borderRadius: 999,
              background: 'linear-gradient(160deg, #fff 0%, #FFE0EE 100%)',
              boxShadow: '0 20px 50px rgba(120,20,60,0.35), inset 0 1px 0 rgba(255,255,255,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Bow size={68} color="#E84B95"/>
            </div>
          </div>
        </div>

        <Display size={48} color="#fff">
          подписка<br/>активна
        </Display>
        <div style={{
          fontFamily: 'Onest, sans-serif', fontSize: 14.5,
          marginTop: 12, color: 'rgba(255,255,255,0.88)',
          lineHeight: 1.45, maxWidth: 320,
        }}>
          Безлимит включён до <b style={{ color: '#fff' }}>15 июня</b>.<br/>
          Дальше — добавь ключ в Happ.
        </div>
      </div>

      {/* steps card */}
      <div style={{
        margin: '0 16px 14px', padding: 18,
        borderRadius: 24,
        background: 'rgba(255,255,255,0.16)',
        backdropFilter: 'blur(14px) saturate(140%)',
        border: '0.5px solid rgba(255,255,255,0.35)',
        color: '#fff',
      }}>
        {[
          { n: 1, t: 'скачай Happ из App Store', s: 'бесплатно · 12 МБ', done: true },
          { n: 2, t: 'нажми «открыть в Happ»', s: 'ключ подставится сам' },
          { n: 3, t: 'разреши VPN-профиль', s: 'один раз, в настройках' },
        ].map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 0',
            borderBottom: i < 2 ? '0.5px solid rgba(255,255,255,0.15)' : 'none',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 999,
              background: s.done ? '#6FE3B0' : 'rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13,
              color: s.done ? '#1F8559' : '#fff',
            }}>
              {s.done ? '✓' : s.n}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14, fontWeight: 600 }}>{s.t}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{s.s}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 16px 28px' }}>
        <CTA variant="white" icon={<ExternalIcon size={14} color="#C42679"/>}>
          Открыть в Happ
        </CTA>
      </div>
    </div>
  );
}

Object.assign(window, { SplashScreen, PaywallScreen, PaymentScreen, SuccessScreen });
