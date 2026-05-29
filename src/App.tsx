import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from './app/routes';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream text-ink">
      <AnimatePresence mode="wait">
        <AppRoutes key={location.pathname} />
      </AnimatePresence>
    </div>
  );
}

export default App;
