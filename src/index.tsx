// filepath: /c:/dev/react/noosphere/src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './router';
import { ThemeProvider } from './context/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container!); // Create a root.

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);