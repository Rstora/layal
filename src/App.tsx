import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import NotFound from './pages/NotFound';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:courseId" element={<CourseDetail />} />
              <Route path="checkout/:courseId" element={<Checkout />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="certificate/:courseId" element={<Certificate />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;