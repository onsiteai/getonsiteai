import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'

const Login = lazy(() => import('./pages/Login.tsx'))
const WaitlistPage = lazy(() => import('./pages/WaitlistPage.tsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.tsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.tsx'))

posthog.init(import.meta.env.VITE_POSTHOG_KEY as string, {
  api_host: import.meta.env.VITE_POSTHOG_HOST as string,
  person_profiles: 'identified_only',
  capture_pageview: true,
  capture_pageleave: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
