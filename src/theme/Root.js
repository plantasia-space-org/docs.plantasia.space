import React from 'react';
import { CookieConsentProvider } from '../components/CookieConsent';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <CookieConsentProvider>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WWRLF6GT"
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      {children}
    </CookieConsentProvider>
  );
}
