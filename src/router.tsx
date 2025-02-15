// filepath: /c:/dev/react/noosphere/src/router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import EventGrid from './components/EventGrid';
import Event from './components/Event';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<EventGrid />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;