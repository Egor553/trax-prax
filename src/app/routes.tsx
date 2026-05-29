import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BottomNavigation } from '../components/navigation/BottomNavigation';
import { PageLayout } from '../layouts/PageLayout';
import { ModalLayout } from '../layouts/ModalLayout';
import { WelcomePage } from '../pages/WelcomePage';
import { SubscriptionPage } from '../pages/SubscriptionPage';
import { PaymentPage } from '../pages/PaymentPage';
import { SuccessPage } from '../pages/SuccessPage';
import { DashboardPage } from '../pages/DashboardPage';
import { DevicesPage } from '../pages/DevicesPage';
import { ServersPage } from '../pages/ServersPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ReferralPage } from '../pages/ReferralPage';
import { ProtectedModePage } from '../pages/ProtectedModePage';
import { WhiteListPage } from '../pages/WhiteListPage';
import { BotOnboardingPage } from '../pages/BotOnboardingPage';
import { BotPaymentPage } from '../pages/BotPaymentPage';
import { BotRenewalPage } from '../pages/BotRenewalPage';

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <WelcomePage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/subscription"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <SubscriptionPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <PaymentPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/success"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <SuccessPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <DashboardPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/devices"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <DevicesPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/servers"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <ServersPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <ProfilePage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/referral"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <ReferralPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/protected"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <ProtectedModePage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/whitelist"
          element={
            <PageLayout>
              <motion.div {...pageTransition} className="h-full">
                <WhiteListPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/bot/onboarding"
          element={
            <ModalLayout>
              <motion.div {...pageTransition} className="h-full">
                <BotOnboardingPage />
              </motion.div>
            </ModalLayout>
          }
        />
        <Route
          path="/bot/payment"
          element={
            <ModalLayout>
              <motion.div {...pageTransition} className="h-full">
                <BotPaymentPage />
              </motion.div>
            </ModalLayout>
          }
        />
        <Route
          path="/bot/renewal"
          element={
            <ModalLayout>
              <motion.div {...pageTransition} className="h-full">
                <BotRenewalPage />
              </motion.div>
            </ModalLayout>
          }
        />
        <Route path="*" element={<PageLayout>Not Found</PageLayout>} />
      </Routes>
      <BottomNavigation />
    </AnimatePresence>
  );
}
