import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';
import { LegalPage } from '@/pages/LegalPage';

import './index.css';

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    {window.location.pathname.replace(/\/$/, '') === '/politica-de-privacidade'
      ? <LegalPage type="privacy" />
      : window.location.pathname.replace(/\/$/, '') === '/termos-de-uso'
        ? <LegalPage type="terms" />
        : <App />}
  </ErrorBoundary>,
);
