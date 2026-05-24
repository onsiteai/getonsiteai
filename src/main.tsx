import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfService from './pages/TermsOfService.tsx'

posthog.init(import.meta.env.VITE_POSTHOG_KEY as string, {
  api_host: import.meta.env.VITE_POSTHOG_HOST as string,
  person_profiles: 'identified_only',
  capture_pageview: true,
  capture_pageleave: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
