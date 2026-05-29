import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/dashboard' },
  { label: 'Devices', path: '/devices' },
  { label: 'Servers', path: '/servers' },
  { label: 'Profile', path: '/profile' },
];

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-pink-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md justify-between px-6 py-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-xs font-semibold transition ${isActive ? 'text-pink-600' : 'text-slate-500'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
