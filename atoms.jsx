// atoms.jsx — shared decorative atoms for the pink "that girl" theme.
// Pure SVG + small inline-styled React components. Theme-locked.

// ── icons ──────────────────────────────────────────────────

function Heart({ size = 14, color = 'currentColor', filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2">
      <path d="M12 21s-7-4.5-9.5-9C.8 8.8 2.5 5 6 5c2 0 3.4 1 4 2 .6-1 2-2 4-2 3.5 0 5.2 3.8 3.5 7-2.5 4.5-9.5 9-9.5 9z"/>
    </svg>
  );
}

function Bow({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {/* left loop */}
      <path d="M16 16 C 9 11, 3 12, 3 16 C 3 20, 9 21, 16 16Z"
            fill={color} opacity="0.95"/>
      <path d="M16 16 C 23 11, 29 12, 29 16 C 29 20, 23 21, 16 16Z"
            fill={color} opacity="0.95"/>
      {/* center knot */}
      <ellipse cx="16" cy="16" rx="3" ry="4" fill={color}/>
      {/* shine */}
      <path d="M8 14 C 6 14, 5 15, 5 16" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M24 14 C 26 14, 27 15, 27 16" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round"/>
      {/* tails */}
      <path d="M15 19 Q 13 24, 14 28 L 16 26 L 18 28 Q 19 24, 17 19Z" fill={color}/>
    </svg>
  );
}

function Sparkle({ size = 14, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 1l1.5 7.5L21 10l-7.5 1.5L12 19l-1.5-7.5L3 10l7.5-1.5L12 1z"/>
    </svg>
  );
}

function ShieldHeart({ size = 26, color = '#fff', accent = '#E84B95' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path d="M16 2L28 6v10c0 7-5 12-12 13C9 28 4 23 4 16V6l12-4z" fill={color}/>
      <path d="M16 22s-5-3.5-6.5-6.5C8.4 13.2 9.6 11 12 11c1.5 0 2.4.8 3 1.5.6-.7 1.5-1.5 3-1.5 2.4 0 3.6 2.2 2.5 4.5C19 18.5 16 22 16 22z" fill={accent}/>
    </svg>
  );
}

function Lightning({ size = 14, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>
    </svg>
  );
}

function ChevR({ size = 14, color = '#000' }) {
  return (
    <svg width={size/2} height={size} viewBox="0 0 8 14" fill="none">
      <path d="M1 1l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Pin({ size = 14, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2c-4 0-7 3-7 7 0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5" fill="#E84B95"/>
    </svg>
  );
}

function CopyIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="12" height="12" rx="2"/>
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
    </svg>
  );
}

function ExternalIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H9M17 7v8"/>
    </svg>
  );
}

function Apple({ size = 16, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.05 12.04c-.03-2.46 2-3.65 2.1-3.7-1.14-1.67-2.93-1.9-3.56-1.92-1.5-.15-2.95.9-3.72.9-.78 0-1.95-.89-3.21-.86-1.65.02-3.18.96-4.03 2.44C2.9 11.91 4.2 16.2 5.92 18.56c.85 1.16 1.86 2.46 3.2 2.41 1.28-.05 1.77-.83 3.32-.83 1.55 0 1.99.83 3.35.81 1.39-.03 2.27-1.18 3.12-2.34.98-1.34 1.38-2.65 1.4-2.72-.03-.01-2.68-1.03-2.7-4.08-.02-2.55 2.08-3.78 2.18-3.84.18-.27-.34-.31-.74-.93zm-2.55-7.3c.7-.85 1.18-2.03 1.05-3.2-1.02.04-2.25.68-2.98 1.53-.65.75-1.22 1.95-1.07 3.1 1.13.09 2.29-.58 3-1.43z"/>
    </svg>
  );
}

function HappLogo({ size = 22 }) {
  // simple stand-in for the Happ icon — purple→pink rounded square w/ "H"
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontFamily: 'Bricolage Grotesque, system-ui',
      fontWeight: 800, fontSize: size * 0.55, lineHeight: 1,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
    }}>H</div>
  );
}

// ── decorative ─────────────────────────────────────────────

function SparkleField({ items = [] }) {
  // items: [{ x: '10%', y: '20%', size: 12, opacity: 0.8 }]
  return (
    <>
      {items.map((s, i) => (
        <div key={i} className="sparkle" style={{ left: s.x, top: s.y, opacity: s.opacity ?? 0.7 }}>
          <Sparkle size={s.size ?? 12} color={s.color ?? '#fff'}/>
        </div>
      ))}
    </>
  );
}

function BowCorner({ position = 'top-left', size = 28, color = '#FFB3D2' }) {
  const map = {
    'top-left': { top: 14, left: 14 },
    'top-right': { top: 14, right: 14 },
    'bottom-left': { bottom: 14, left: 14 },
    'bottom-right': { bottom: 14, right: 14 },
  };
  return (
    <div style={{ position: 'absolute', ...map[position], pointerEvents: 'none', filter: 'drop-shadow(0 2px 4px rgba(180,40,100,0.18))' }}>
      <Bow size={size} color={color}/>
    </div>
  );
}

// ── shared chrome ──────────────────────────────────────────

function MiniAppHeader({ title, dark = false }) {
  // Telegram WebApp top chrome
  const fg = dark ? '#fff' : '#2A0A18';
  const bg = dark ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.7)';
  return (
    <div style={{
      paddingTop: 56, padding: '56px 14px 12px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: 999, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}>
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={fg} strokeWidth="2" strokeLinecap="round">
          <path d="M2 2l8 8M10 2l-8 8"/>
        </svg>
      </div>
      <div style={{
        fontFamily: 'var(--tg-font-body)', fontSize: 13, fontWeight: 500,
        color: fg, opacity: 0.85, letterSpacing: '-0.01em',
      }}>{title}</div>
      <div style={{
        width: 30, height: 30, borderRadius: 999, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}>
        <svg width="14" height="3" viewBox="0 0 14 3" fill={fg}>
          <circle cx="1.5" cy="1.5" r="1.5"/><circle cx="7" cy="1.5" r="1.5"/><circle cx="12.5" cy="1.5" r="1.5"/>
        </svg>
      </div>
    </div>
  );
}

// CTA button — glossy or solid
function CTA({ children, variant = 'white', icon, sub, full = true, onClick }) {
  const base = {
    width: full ? '100%' : 'auto',
    borderRadius: 999,
    padding: '15px 22px',
    fontFamily: 'var(--tg-font-body)', fontWeight: 700, fontSize: 16,
    letterSpacing: '-0.01em',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    border: 'none',
  };
  if (variant === 'white') {
    return (
      <button onClick={onClick} className="btn-glossy" style={{ ...base, color: '#C42679' }}>
        {icon}{children}
        {sub && <span style={{ opacity: 0.6, fontWeight: 500, marginLeft: 4 }}>· {sub}</span>}
      </button>
    );
  }
  if (variant === 'hot') {
    return (
      <button onClick={onClick} style={{
        ...base,
        background: 'linear-gradient(180deg, #FF6FAE 0%, #E84B95 50%, #C42679 100%)',
        color: '#fff',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(120,20,60,0.3), 0 10px 24px rgba(232,75,149,0.35)',
      }}>{icon}{children}</button>
    );
  }
  if (variant === 'ink') {
    return (
      <button onClick={onClick} style={{
        ...base,
        background: '#2A0A18', color: '#FFE0EE',
        boxShadow: '0 8px 20px rgba(42,10,24,0.3)',
      }}>{icon}{children}</button>
    );
  }
  // ghost
  return (
    <button onClick={onClick} style={{
      ...base, background: 'transparent', color: '#2A0A18',
      boxShadow: 'inset 0 0 0 1px rgba(42,10,24,0.15)',
    }}>{icon}{children}</button>
  );
}

// Toggle
function Toggle({ on = true, accent = '#E84B95' }) {
  return (
    <div style={{
      width: 46, height: 28, borderRadius: 999, flexShrink: 0,
      background: on ? accent : 'rgba(0,0,0,0.15)',
      position: 'relative', transition: 'background .2s',
    }}>
      <div style={{
        position: 'absolute', top: 2, left: on ? 20 : 2, width: 24, height: 24,
        borderRadius: 999, background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2), 0 0 0 0.5px rgba(0,0,0,0.04)',
        transition: 'left .2s',
      }}/>
    </div>
  );
}

// Section eyebrow label
function Eyebrow({ children, color = 'currentColor' }) {
  return (
    <div style={{
      fontFamily: 'var(--tg-font-body)', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color, opacity: 0.7,
    }}>{children}</div>
  );
}

// big italic serif heading
function Display({ children, size = 44, color = 'inherit', as = 'div' }) {
  const Tag = as;
  return (
    <Tag style={{
      fontFamily: 'var(--tg-font-display)',
      fontStyle: 'italic',
      fontSize: size, lineHeight: 0.95, letterSpacing: '-0.015em',
      color, margin: 0,
    }}>{children}</Tag>
  );
}

Object.assign(window, {
  Heart, Bow, Sparkle, ShieldHeart, Lightning, ChevR, Pin, CopyIcon, ExternalIcon, Apple, HappLogo,
  SparkleField, BowCorner, MiniAppHeader, CTA, Toggle, Eyebrow, Display,
});
