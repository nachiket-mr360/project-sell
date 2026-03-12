import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Preloader from './components/Preloader.tsx';
import './index.css';

function Main() {
  const [showApp, setShowApp] = useState(false);

  if (!showApp) {
    return <Preloader onComplete={() => setShowApp(true)} />;
  }

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
