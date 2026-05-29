// app.jsx — that girl · vpn — pink Bubblegum variant, full product
const { useState } = React;

function Phone({ children }) {
  return (
    <IOSDevice width={360} height={780} dark={false}>
      {children}
    </IOSDevice>
  );
}

// Hero block at top of canvas
function HeroBlock() {
  return (
    <div style={{ maxWidth: 1600, margin: '40px auto 18px', padding: '0 28px' }}>
      <div style={{
        fontSize: 11, fontFamily: 'Onest, sans-serif', fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'rgba(40,15,30,0.5)', marginBottom: 10,
      }}>
        Telegram bot + Mini App · pink edition · v1
      </div>
      <div style={{
        fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
        fontSize: 104, lineHeight: 0.9, letterSpacing: '-0.025em',
        color: '#2A0A18', marginBottom: 16,
      }}>
        that girl <span style={{ color: '#E84B95' }}>vpn</span>
      </div>
      <div style={{
        maxWidth: 760, fontFamily: 'Onest, sans-serif',
        fontSize: 15, lineHeight: 1.5, color: 'rgba(40,15,30,0.7)',
      }}>
        Бот ведёт на оплату и отдаёт ключ для Happ. Mini App — кабинет: подписка, ключ, устройства,
        белые списки, серверы, реферал. Защищённый режим включается сам, когда сеть в центре капризничает.<br/>
        <b style={{ color: '#2A0A18' }}>520 ₽ / мес · безлимит на 3 устройства · 3 дня бесплатно.</b>
      </div>

      {/* type / color spec strip */}
      <div style={{
        marginTop: 24, padding: '16px 18px', borderRadius: 18,
        background: '#fff',
        boxShadow: '0 8px 24px rgba(60,15,40,0.08)',
        display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center',
      }}>
        <div style={{
          fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
          fontSize: 26, color: '#2A0A18', lineHeight: 1,
        }}>system</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[
            ['#E84B95', 'hot'],
            ['#C42679', 'deep'],
            ['#FFB3D2', 'rose'],
            ['#FFE0EE', 'soft'],
            ['#FFF6F8', 'cream'],
            ['#2A0A18', 'ink'],
            ['#6FE3B0', 'mint'],
          ].map(([c, n]) => (
            <div key={n} title={n} style={{
              width: 36, height: 36, borderRadius: 10, background: c,
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)',
            }}/>
          ))}
        </div>
        <div style={{
          padding: '6px 10px', borderRadius: 999, background: '#FFE0EE',
          fontFamily: 'Onest, sans-serif', fontSize: 11.5, fontWeight: 700,
          color: '#C42679', letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>Instrument Serif italic + Onest + Bricolage numerals</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <HeroBlock/>
      <DesignCanvas>
        <DCSection id="bot" title="01 · Telegram бот" subtitle="первое касание · оплата · ключ Happ · напоминание о продлении">
          <DCArtboard id="bot-onb" label="Онбординг" width={360} height={780}>
            <Phone><BotOnboarding/></Phone>
          </DCArtboard>
          <DCArtboard id="bot-pay" label="После оплаты · ключ" width={360} height={780}>
            <Phone><BotPaymentSuccess/></Phone>
          </DCArtboard>
          <DCArtboard id="bot-renew" label="Продление" width={360} height={780}>
            <Phone><BotRenewal/></Phone>
          </DCArtboard>
        </DCSection>

        <DCSection id="onboarding" title="02 · Mini App · оформление" subtitle="первое открытие · paywall · оплата · подтверждение">
          <DCArtboard id="splash" label="Splash" width={360} height={780}>
            <Phone><SplashScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="paywall" label="Подписка 520 ₽" width={360} height={780}>
            <Phone><PaywallScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="payment" label="Оплата" width={360} height={780}>
            <Phone><PaymentScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="success" label="Готово" width={360} height={780}>
            <Phone><SuccessScreen/></Phone>
          </DCArtboard>
        </DCSection>

        <DCSection id="cabinet" title="03 · Mini App · кабинет" subtitle="главный экран с ключом · устройства · серверы · профиль">
          <DCArtboard id="active" label="Главный · ключ Happ" width={360} height={780}>
            <Phone><ActiveScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="devices" label="Устройства · 2 / 3" width={360} height={780}>
            <Phone><DevicesScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="servers" label="Серверы" width={360} height={780}>
            <Phone><ServersScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="profile" label="Профиль" width={360} height={780}>
            <Phone><ProfileScreen/></Phone>
          </DCArtboard>
        </DCSection>

        <DCSection id="smart" title="04 · Mini App · умные сценарии" subtitle="белые списки · защищённый режим в центре · реферал">
          <DCArtboard id="whitelist" label="Белые списки" width={360} height={780}>
            <Phone><WhitelistScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="drone" label="Защищённый режим" width={360} height={780}>
            <Phone><DroneAlertScreen/></Phone>
          </DCArtboard>
          <DCArtboard id="referral" label="Приведи подругу" width={360} height={780}>
            <Phone><ReferralScreen/></Phone>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
