import React from 'react';
import { CookieConsentProvider } from '../components/CookieConsent';

export default function Root({children}) {
  return (
    <CookieConsentProvider>
      {children}
    </CookieConsentProvider>
  );
}
