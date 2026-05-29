// screens-app-2.jsx — Mini App screens, batch 2
// Active · Devices · Servers · Whitelist · DroneAlert · Profile · Referral

// ── Active / main screen ───────────────────────────────────────

function ActiveScreen() {
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="кабинет"/>

      {/* hero status */}
      <div className="bubble" style={{
        position: 'relative', margin: '4px 16px 14px',
        borderRadius: 30, padding: '22px 22px 24px', overflow: 'hidden',
        color: '#fff',
      }}>
        <SparkleField items={[
          { x: '85%', y: '14%', size: 10 },
          { x: '15%', y: '70%', size: 8, opacity: 0.5 },
        ]}/>
        <BowCorner position="top-right" size={28} color="#FFCFE2"/>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#6FE3B0', boxShadow: '0 0 10px #6FE3B0' }}/>
          <Eyebrow color="#fff">защищена</Eyebrow>
        </div>

        <Display size={48} color="#fff" as="div">
          ты в&nbsp;<span style={{ fontStyle: 'italic' }}>безопасности</span>
        </Display>

        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
          }}>
            <Pin size={16} color="#fff"/>
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 14 }}>Амстердам · A</div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>ping 42 мс · скорость 180 Мбит/с</div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <ChevR size={14} color="rgba(255,255,255,0.9)"/>
          </div>
        </div>

        {/* big toggle */}
        <div style={{
          marginTop: 18, padding: 4,
          background: 'rgba(255,255,255,0.18)', borderRadius: 999,
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button style={{
            flex: 1, padding: '11px 0', borderRadius: 999, border: 'none',
            background: '#fff', color: '#C42679',
            fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}>включён</button>
          <div style={{
            flex: 1, padding: '11px 0', textAlign: 'center',
            fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 13.5,
            color: 'rgba(255,255,255,0.7)',
          }}>выключить</div>
        </div>
      </div>

      {/* Happ key card */}
      <div className="card" style={{ margin: '0 16px 12px', padding: 16, borderRadius: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <HappLogo size={28}/>
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 13.5, fontWeight: 600 }}>Ключ для Happ</div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 11.5, color: '#6B3A50' }}>обновлён 2 мин назад · автообновление</div>
          </div>
          <div style={{ fontSize: 16 }}>✨</div>
        </div>
        <div style={{
          padding: '12px 14px', borderRadius: 14,
          background: 'linear-gradient(180deg, #FFF6FA 0%, #FFE0EE 100%)',
          fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
          fontSize: 11.5, lineHeight: 1.5, color: '#6B3A50',
          wordBreak: 'break-all', marginBottom: 12,
        }}>
          vless://7a3e9c…f0b1@nl-ams-04.<br/>thatgirl.vpn:443?type=tcp&security=reality
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            flex: 1, padding: '12px 14px', borderRadius: 999,
            background: 'linear-gradient(180deg, #FF6FAE 0%, #E84B95 60%, #C42679 100%)',
            color: '#fff', fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 6px 16px rgba(232,75,149,0.25)',
          }}>
            <ExternalIcon size={13} color="#fff"/> Открыть в Happ
          </button>
          <button style={{
            padding: '12px 14px', borderRadius: 999,
            background: '#FFF0F6', color: '#C42679',
            fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}>
            <CopyIcon size={13}/>
          </button>
        </div>
      </div>

      {/* metrics grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '0 16px 12px' }}>
        <div className="card" style={{ padding: 14, borderRadius: 18 }}>
          <Eyebrow color="#6B3A50">подписка</Eyebrow>
          <div style={{ fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 30, lineHeight: 1, marginTop: 6, letterSpacing: '-0.03em' }}>
            26 <span style={{ fontSize: 14, fontWeight: 500, color: '#6B3A50', letterSpacing: 0 }}>дней</span>
          </div>
          <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 4 }}>до 15 июня</div>
        </div>
        <div className="card" style={{ padding: 14, borderRadius: 18 }}>
          <Eyebrow color="#6B3A50">устройства</Eyebrow>
          <div style={{ fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 30, lineHeight: 1, marginTop: 6, letterSpacing: '-0.03em' }}>
            2 <span style={{ fontSize: 14, fontWeight: 500, color: '#6B3A50' }}>/ 3</span>
          </div>
          <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 4 }}>iPhone · MacBook</div>
        </div>
      </div>

      {/* settings rows */}
      <div className="card" style={{ margin: '0 16px 14px', padding: '4px 18px', borderRadius: 22 }}>
        {[
          { ico: <Lightning size={14} color="#E84B95"/>, t: 'умный режим', s: 'включается сам в центре Москвы', toggle: true, on: true },
          { ico: <Bow size={16} color="#E84B95"/>, t: 'белые списки', s: '24 приложения', chev: true },
          { ico: <Pin size={14} color="#E84B95"/>, t: 'серверы', s: 'Амстердам · A', chev: true },
        ].map((r, i, a) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0',
            borderBottom: i < a.length - 1 ? '0.5px solid rgba(42,10,24,0.08)' : 'none',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 11,
              background: '#FFE0EE',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{r.ico}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{r.t}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 1 }}>{r.s}</div>
            </div>
            {r.toggle && <Toggle on={r.on}/>}
            {r.chev && <ChevR size={14} color="#6B3A50"/>}
          </div>
        ))}
      </div>

      <div style={{ height: 30 }}/>
    </div>
  );
}

// ── Devices ────────────────────────────────────────────────────

function DevicesScreen() {
  const devices = [
    { name: 'iPhone 15', sub: 'это устройство · активно сейчас', ico: '📱', active: true, badge: 'now' },
    { name: 'MacBook Air', sub: 'подключён 4 часа назад', ico: '💻' },
    { name: '+ добавить устройство', sub: 'осталось 1 место', empty: true },
  ];
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="устройства"/>

      <div style={{ padding: '4px 22px 18px' }}>
        <Display size={42}>твои<br/><span style={{ color: '#C42679' }}>устройства</span></Display>
        <div style={{
          marginTop: 10, fontFamily: 'Onest, sans-serif',
          fontSize: 13.5, color: '#6B3A50', lineHeight: 1.4,
        }}>
          На тариф that girl можно подключить до 3 девайсов одновременно. Лишнее устройство — выйдет само, без скандалов.
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {devices.map((d, i) => (
          <div key={i} className="card" style={{
            padding: 16, borderRadius: 20, marginBottom: 10,
            display: 'flex', alignItems: 'center', gap: 14,
            opacity: d.empty ? 0.85 : 1,
            border: d.empty ? '1.5px dashed rgba(232,75,149,0.4)' : 'none',
            background: d.empty ? 'rgba(255,255,255,0.5)' : '#fff',
            boxShadow: d.empty ? 'none' : undefined,
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 14,
              background: d.empty
                ? 'transparent'
                : 'linear-gradient(135deg, #FFE0EE 0%, #FFC9DF 100%)',
              boxShadow: d.empty ? 'none' : 'inset 0 1px 0 #fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: d.empty ? 24 : 22, color: '#C42679',
              fontFamily: 'Onest, sans-serif', fontWeight: 700,
            }}>
              {d.empty ? '+' : d.ico}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'Onest, sans-serif', fontSize: 15, fontWeight: 600 }}>{d.name}</span>
                {d.badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: '#1F8559',
                    padding: '2px 7px', borderRadius: 999, background: '#D8F5E5',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>online</span>
                )}
              </div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12.5, color: '#6B3A50', marginTop: 2 }}>{d.sub}</div>
            </div>
            {!d.empty && (
              <div style={{
                width: 32, height: 32, borderRadius: 999,
                background: '#FFF0F6', color: '#C42679',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontFamily: 'Onest, sans-serif',
              }}>···</div>
            )}
          </div>
        ))}
      </div>

      {/* QR card */}
      <div className="card" style={{ margin: '14px 16px 26px', padding: 18, borderRadius: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 14,
            background: '#fff',
            backgroundImage: `
              linear-gradient(90deg, #2A0A18 1px, transparent 1px),
              linear-gradient(0deg, #2A0A18 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px',
            border: '4px solid #2A0A18',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 22, background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Heart size={14} color="#E84B95"/>
            </div>
          </div>
          <div style={{ flex: 1, lineHeight: 1.3 }}>
            <div style={{ fontFamily: 'var(--tg-font-display)', fontStyle: 'italic', fontSize: 22, color: '#2A0A18' }}>
              новое устройство?
            </div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50', marginTop: 4 }}>
              Отсканируй этот QR в Happ или нажми «отправить себе ссылку».
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <CTA variant="ink" icon={<ExternalIcon size={13} color="#FFE0EE"/>}>отправить себе ссылку</CTA>
        </div>
      </div>
    </div>
  );
}

// ── Server picker ──────────────────────────────────────────────

function ServersScreen() {
  const servers = [
    { city: 'Амстердам · A', sub: 'твой по умолчанию', ping: 42, flag: '🇳🇱', active: true, load: 0.32 },
    { city: 'Стокгольм', sub: 'тихо и быстро', ping: 48, flag: '🇸🇪', load: 0.21 },
    { city: 'Хельсинки', sub: 'низкий пинг', ping: 36, flag: '🇫🇮', load: 0.45 },
    { city: 'Цюрих', sub: 'премиум-узел', ping: 58, flag: '🇨🇭', load: 0.18, premium: true },
    { city: 'Лондон', sub: 'для онлайн-шопинга', ping: 64, flag: '🇬🇧', load: 0.51 },
    { city: 'Берлин', sub: 'стабильный', ping: 52, flag: '🇩🇪', load: 0.38 },
  ];
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="серверы"/>

      <div style={{ padding: '4px 22px 16px' }}>
        <Display size={42}>выбери,<br/>где быть <span style={{ fontStyle: 'italic' }}>сегодня</span></Display>
      </div>

      {/* search */}
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{
          height: 44, borderRadius: 14, background: '#fff',
          padding: '0 14px', display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 4px 14px rgba(60,15,40,0.06)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B3A50" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>
          </svg>
          <div style={{ flex: 1, fontFamily: 'Onest, sans-serif', fontSize: 14, color: '#6B3A50' }}>
            найти страну
          </div>
          <div style={{
            padding: '4px 8px', borderRadius: 999, background: '#FFE0EE',
            fontFamily: 'Onest, sans-serif', fontSize: 11, fontWeight: 700, color: '#C42679',
          }}>18 локаций</div>
        </div>
      </div>

      {/* fastest auto pill */}
      <div style={{ padding: '0 16px 8px' }}>
        <div className="card" style={{
          padding: 14, borderRadius: 18,
          display: 'flex', alignItems: 'center', gap: 12,
          background: 'linear-gradient(135deg, #FFE0EE 0%, #FFC9DF 100%)',
          boxShadow: 'inset 0 1px 0 #fff, 0 8px 22px rgba(232,75,149,0.18)',
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 12,
            background: 'linear-gradient(180deg, #fff 0%, #FFD8E8 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'inset 0 1px 0 #fff',
          }}><Lightning size={16} color="#E84B95"/></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 700 }}>авто — самый быстрый</div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>сейчас: Хельсинки · 36 мс</div>
          </div>
          <Toggle on/>
        </div>
      </div>

      {/* server list */}
      <div className="card" style={{ margin: '4px 16px 26px', padding: '4px 6px', borderRadius: 22 }}>
        {servers.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 12px', borderRadius: 16,
            background: s.active ? 'rgba(255,224,238,0.55)' : 'transparent',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999,
              background: '#FFF0F6',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
            }}>{s.flag}</div>
            <div style={{ flex: 1, lineHeight: 1.25 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{s.city}</span>
                {s.premium && (
                  <span style={{
                    fontSize: 9.5, fontWeight: 700, color: '#9B6CCB',
                    padding: '2px 6px', borderRadius: 999, background: '#EFE3FB',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>+</span>
                )}
              </div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>{s.sub}</div>
            </div>
            <div style={{ textAlign: 'right', minWidth: 56 }}>
              <div style={{
                fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 16,
                color: s.ping < 45 ? '#1F8559' : '#2A0A18',
                letterSpacing: '-0.02em',
              }}>{s.ping}<span style={{ fontSize: 10, color: '#6B3A50', marginLeft: 2, fontWeight: 500 }}>мс</span></div>
              <div style={{ width: 50, height: 3, borderRadius: 999, background: 'rgba(0,0,0,0.06)', marginTop: 4, marginLeft: 'auto' }}>
                <div style={{ width: `${s.load*100}%`, height: '100%', borderRadius: 999, background: '#E84B95' }}/>
              </div>
            </div>
            {s.active && (
              <div style={{
                width: 20, height: 20, borderRadius: 999,
                background: '#E84B95',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 11, fontWeight: 700,
                marginLeft: 4,
              }}>✓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Whitelist ──────────────────────────────────────────────────

function WhitelistScreen() {
  const apps = [
    { name: 'Сбербанк', sub: 'банк · только без VPN', ico: '🏦', col: '#1F8559', on: true },
    { name: 'Тинькофф', sub: 'банк · только без VPN', ico: '💛', col: '#FFB845', on: true },
    { name: 'Яндекс Такси', sub: 'геолокация лучше без VPN', ico: '🚖', col: '#FFD24F', on: true },
    { name: 'Wildberries', sub: 'маркетплейс', ico: '🛍', col: '#9B5BFF', on: true },
    { name: 'Госуслуги', sub: 'госсервисы', ico: '🇷🇺', col: '#1F4ECC', on: false },
    { name: 'Самокат', sub: 'доставка', ico: '🥑', col: '#6FE3B0', on: false },
  ];
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="белые списки"/>

      <div style={{ padding: '4px 22px 18px' }}>
        <Display size={42}>
          приложения,<br/>
          которые любят<br/>
          <span style={{ color: '#C42679' }}>тебя без vpn</span>
        </Display>
        <div style={{
          marginTop: 12, fontFamily: 'Onest, sans-serif',
          fontSize: 13.5, color: '#6B3A50', lineHeight: 1.45,
        }}>
          Эти приложения работают напрямую — банки, такси, доставка. Всё остальное — через тоннель.
        </div>
      </div>

      {/* status pill */}
      <div style={{
        margin: '0 16px 12px', padding: 14, borderRadius: 18,
        background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: 'linear-gradient(135deg, #FFE0EE 0%, #FFC9DF 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Bow size={20} color="#E84B95"/></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14, fontWeight: 600 }}>включено</div>
          <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>4 приложения идут напрямую</div>
        </div>
        <Toggle on/>
      </div>

      {/* apps list */}
      <div className="card" style={{ margin: '0 16px 14px', padding: '4px 18px', borderRadius: 22 }}>
        {apps.map((a, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
            borderBottom: i < apps.length - 1 ? '0.5px solid rgba(42,10,24,0.08)' : 'none',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 11,
              background: `linear-gradient(135deg, ${a.col}30, ${a.col}60)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
            }}>{a.ico}</div>
            <div style={{ flex: 1, lineHeight: 1.25 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{a.name}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>{a.sub}</div>
            </div>
            <Toggle on={a.on}/>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 16px 26px' }}>
        <button style={{
          width: '100%', padding: '14px', borderRadius: 999,
          background: '#fff', color: '#C42679',
          fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 14.5,
          boxShadow: 'inset 0 0 0 1px rgba(232,75,149,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>+ добавить приложение</button>
      </div>
    </div>
  );
}

// ── Drone alert (active state) ─────────────────────────────────

function DroneAlertScreen() {
  return (
    <div className="phone-screen bg-glossy" style={{
      width: '100%', height: '100%', overflowY: 'auto',
      color: '#fff', position: 'relative',
    }}>
      <SparkleField items={[
        { x: '14%', y: '14%', size: 12, opacity: 0.7 },
        { x: '78%', y: '18%', size: 14 },
        { x: '85%', y: '46%', size: 10, opacity: 0.6 },
      ]}/>
      <MiniAppHeader title="защищённый режим" dark/>

      {/* big alert hero */}
      <div style={{ padding: '4px 22px 14px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 10px', borderRadius: 999,
          background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
          fontFamily: 'Onest, sans-serif', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#fff', marginBottom: 16,
        }}>
          <span className="pulse" style={{
            width: 8, height: 8, borderRadius: 999, background: '#FFD24F',
            boxShadow: '0 0 12px #FFD24F',
          }}/>
          сеть в центре нестабильна
        </div>
        <Display size={52} color="#fff">
          включила vpn —<br/>
          <span style={{ fontStyle: 'italic', opacity: 0.92 }}>как заботливая подруга</span>
        </Display>
        <div style={{
          marginTop: 12, fontFamily: 'Onest, sans-serif',
          fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.85)',
          maxWidth: 320,
        }}>
          В центре Москвы временно медленный мобильный интернет. Я подключила тебя к самому быстрому серверу — сторис будут грузиться как обычно.
        </div>
      </div>

      {/* status card */}
      <div style={{
        margin: '0 16px 12px', padding: 18, borderRadius: 22,
        background: 'rgba(255,255,255,0.16)',
        backdropFilter: 'blur(14px)', border: '0.5px solid rgba(255,255,255,0.35)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'inset 0 1px 0 #fff',
          }}>
            <ShieldHeart size={26} color="#E84B95" accent="#fff"/>
          </div>
          <div style={{ flex: 1, lineHeight: 1.25 }}>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 700 }}>защищённый режим</div>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>активирован 4 минуты назад</div>
          </div>
          <Toggle on accent="#fff"/>
        </div>
        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'Onest, sans-serif', fontSize: 13, marginBottom: 6,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Где сейчас тоньше сеть</span>
            <span style={{ fontWeight: 600 }}>центр · бульвары · Патрики</span>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'Onest, sans-serif', fontSize: 13,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Прогноз восстановления</span>
            <span style={{ fontWeight: 600 }}>через ~ 40 мин</span>
          </div>
        </div>
      </div>

      {/* metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '0 16px 14px' }}>
        <div className="glass" style={{ padding: 14, borderRadius: 18 }}>
          <Eyebrow color="#fff">пинг был</Eyebrow>
          <div style={{ fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 26, marginTop: 6, color: '#fff' }}>
            420<span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}> мс</span>
          </div>
        </div>
        <div className="glass" style={{ padding: 14, borderRadius: 18 }}>
          <Eyebrow color="#fff">стал</Eyebrow>
          <div style={{ fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 26, marginTop: 6, color: '#fff' }}>
            42<span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}> мс</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 16px 26px' }}>
        <CTA variant="white" icon={<Heart size={13} color="#C42679"/>}>оставить включённым</CTA>
        <div style={{
          marginTop: 10, textAlign: 'center',
          fontFamily: 'Onest, sans-serif', fontSize: 11.5, color: 'rgba(255,255,255,0.7)',
        }}>выключится сам, когда сеть стабилизируется</div>
      </div>
    </div>
  );
}

// ── Profile ────────────────────────────────────────────────────

function ProfileScreen() {
  return (
    <div className="phone-screen bg-cream" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#2A0A18',
    }}>
      <MiniAppHeader title="профиль"/>

      <div style={{ padding: '4px 22px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 999,
            background: 'linear-gradient(135deg, #FFC9DF 0%, #E84B95 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: 'var(--tg-font-display)', fontStyle: 'italic',
            fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 22px rgba(232,75,149,0.25)',
          }}>с</div>
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <Display size={28}>соня</Display>
            <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12.5, color: '#6B3A50', marginTop: 4 }}>
              @sonya · с нами с 12 марта
            </div>
          </div>
        </div>
      </div>

      {/* sub status card */}
      <div className="card" style={{ margin: '0 16px 12px', padding: 18, borderRadius: 22, position: 'relative', overflow: 'hidden' }}>
        <BowCorner position="top-right" size={22} color="#E84B95"/>
        <Eyebrow color="#6B3A50">подписка</Eyebrow>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
          <span style={{ fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 36, color: '#C42679', letterSpacing: '-0.03em' }}>26</span>
          <span style={{ fontFamily: 'Onest, sans-serif', fontSize: 14, color: '#6B3A50' }}>дней до 15 июня</span>
        </div>
        <div style={{ marginTop: 10, height: 6, borderRadius: 999, background: 'rgba(232,75,149,0.12)' }}>
          <div style={{ width: '85%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #FFC9DF, #E84B95)' }}/>
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
          <button style={{
            flex: 1, padding: '11px', borderRadius: 999,
            background: '#FFE0EE', color: '#C42679',
            fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
          }}>продлить</button>
          <button style={{
            flex: 1, padding: '11px', borderRadius: 999,
            background: 'transparent', color: '#2A0A18',
            boxShadow: 'inset 0 0 0 1px rgba(42,10,24,0.15)',
            fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 13.5,
          }}>сменить тариф</button>
        </div>
      </div>

      {/* settings list */}
      <div className="card" style={{ margin: '0 16px 12px', padding: '4px 18px', borderRadius: 22 }}>
        {[
          { ico: '📱', t: 'устройства', s: '2 из 3 подключены' },
          { ico: '📍', t: 'сервер по умолчанию', s: 'Амстердам · A' },
          { ico: '🌸', t: 'белые списки', s: '4 включено' },
          { ico: '💌', t: 'пригласить подругу', s: 'бонус +1 месяц' },
          { ico: '🧾', t: 'история платежей', s: '3 списания · 1 560 ₽' },
        ].map((r, i, a) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
            borderBottom: i < a.length - 1 ? '0.5px solid rgba(42,10,24,0.08)' : 'none',
          }}>
            <div style={{ width: 30, fontSize: 20, textAlign: 'center' }}>{r.ico}</div>
            <div style={{ flex: 1, lineHeight: 1.25 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{r.t}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>{r.s}</div>
            </div>
            <ChevR size={14} color="#6B3A50"/>
          </div>
        ))}
      </div>

      <div style={{ padding: '6px 16px 0' }}>
        <Eyebrow color="#6B3A50">помощь</Eyebrow>
      </div>
      <div className="card" style={{ margin: '8px 16px 26px', padding: '4px 18px', borderRadius: 22 }}>
        {[
          { ico: '💬', t: 'написать в поддержку', s: 'отвечаем в течение 15 мин' },
          { ico: '🤍', t: 'оферта · политика', s: '' },
        ].map((r, i, a) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0',
            borderBottom: i < a.length - 1 ? '0.5px solid rgba(42,10,24,0.08)' : 'none',
          }}>
            <div style={{ width: 30, fontSize: 20, textAlign: 'center' }}>{r.ico}</div>
            <div style={{ flex: 1, lineHeight: 1.25 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14.5, fontWeight: 600 }}>{r.t}</div>
              {r.s && <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 12, color: '#6B3A50' }}>{r.s}</div>}
            </div>
            <ChevR size={14} color="#6B3A50"/>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Referral ───────────────────────────────────────────────────

function ReferralScreen() {
  const friends = [
    { name: 'Алиса К.', sub: '3 дня назад', col: '#FFC9DF' },
    { name: 'Мария Д.', sub: '12 дней назад', col: '#E5C5F0' },
    { name: 'Кристина Б.', sub: 'месяц назад', col: '#FFE2BE' },
  ];
  return (
    <div className="phone-screen bg-glossy" style={{
      width: '100%', height: '100%', overflowY: 'auto', color: '#fff',
      position: 'relative',
    }}>
      <SparkleField items={[
        { x: '14%', y: '14%', size: 12 },
        { x: '78%', y: '20%', size: 14, opacity: 0.6 },
        { x: '85%', y: '40%', size: 10 },
      ]}/>
      <MiniAppHeader title="приведи подругу" dark/>

      <div style={{ padding: '4px 22px 20px' }}>
        <Display size={52} color="#fff">
          приведи<br/>
          подругу —<br/>
          <span style={{ fontStyle: 'italic' }}>получи месяц</span>
        </Display>
        <div style={{
          marginTop: 14, fontFamily: 'Onest, sans-serif',
          fontSize: 14, lineHeight: 1.45, color: 'rgba(255,255,255,0.88)',
          maxWidth: 320,
        }}>
          За каждую подругу, которая оплатит подписку — тебе и ей по месяцу в подарок.
        </div>
      </div>

      {/* link card */}
      <div className="card" style={{ margin: '0 16px 12px', padding: 18, borderRadius: 22, color: '#2A0A18' }}>
        <Eyebrow color="#6B3A50">твоя ссылка</Eyebrow>
        <div style={{
          marginTop: 8, padding: '12px 14px', borderRadius: 14,
          background: 'linear-gradient(180deg, #FFF6FA 0%, #FFE0EE 100%)',
          fontFamily: 'Onest, sans-serif', fontSize: 14, fontWeight: 600,
          color: '#C42679', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            t.me/thatgirl_vpn?ref=sonya
          </span>
          <CopyIcon size={14} color="#C42679"/>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button style={{
            flex: 1, padding: '12px 14px', borderRadius: 999,
            background: 'linear-gradient(180deg, #FF6FAE 0%, #E84B95 60%, #C42679 100%)',
            color: '#fff', fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
          }}>
            <ExternalIcon size={13} color="#fff"/> поделиться
          </button>
          <button style={{
            flex: 1, padding: '12px 14px', borderRadius: 999,
            background: '#FFE0EE', color: '#C42679',
            fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 13.5,
          }}>посты для сторис</button>
        </div>
      </div>

      {/* stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, margin: '0 16px 14px' }}>
        {[
          { k: 'приглашено', v: '7' },
          { k: 'оплатили', v: '3' },
          { k: 'бонус', v: '+3 мес' },
        ].map((s, i) => (
          <div key={i} className="glass" style={{ padding: '14px 10px', borderRadius: 18, textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--tg-font-num)', fontWeight: 700, fontSize: 26,
              lineHeight: 1, color: '#fff', letterSpacing: '-0.03em',
            }}>{s.v}</div>
            <div style={{
              fontFamily: 'Onest, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.78)',
              marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>{s.k}</div>
          </div>
        ))}
      </div>

      {/* friends */}
      <div className="glass" style={{ margin: '0 16px 26px', padding: '4px 16px', borderRadius: 22 }}>
        <div style={{ padding: '12px 0 8px' }}>
          <Eyebrow color="#fff">твои подруги</Eyebrow>
        </div>
        {friends.map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
            borderBottom: i < friends.length - 1 ? '0.5px solid rgba(255,255,255,0.15)' : 'none',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999, background: f.col,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--tg-font-display)', fontStyle: 'italic',
              fontWeight: 500, fontSize: 16, color: '#3D1A2A',
            }}>{f.name[0]}</div>
            <div style={{ flex: 1, lineHeight: 1.25 }}>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 14, fontWeight: 600 }}>{f.name}</div>
              <div style={{ fontFamily: 'Onest, sans-serif', fontSize: 11.5, color: 'rgba(255,255,255,0.75)' }}>{f.sub}</div>
            </div>
            <div style={{
              fontFamily: 'Onest, sans-serif', fontSize: 11, fontWeight: 700,
              padding: '4px 8px', borderRadius: 999,
              background: 'rgba(255,255,255,0.95)', color: '#C42679',
            }}>+1 мес</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  ActiveScreen, DevicesScreen, ServersScreen, WhitelistScreen, DroneAlertScreen, ProfileScreen, ReferralScreen,
});
