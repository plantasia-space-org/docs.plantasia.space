import React, { useState, useEffect, createContext, useContext } from 'react';
import './styles.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const CookieContext = createContext();

const STORAGE_KEY = 'plantasia_cookie_consent';
const CONSENT_QUERY_PARAM = 'cookieConsent';
const THEME_QUERY_PARAM = 'theme';

const isValidImportedConsent = (consent) => {
  if (!consent || typeof consent !== 'object') {
    return false;
  }

  const requiredKeys = ['necessary', 'analytics', 'marketing', 'acceptedAt'];
  if (!requiredKeys.every((key) => Object.prototype.hasOwnProperty.call(consent, key))) {
    return false;
  }

  return (
    typeof consent.necessary === 'boolean' &&
    typeof consent.analytics === 'boolean' &&
    typeof consent.marketing === 'boolean' &&
    typeof consent.acceptedAt === 'string'
  );
};

const applyConsentFromQuery = (payload, setConsent, setIsVisible) => {
  if (!payload) {
    return false;
  }

  try {
    const decodedPayload = decodeURIComponent(payload);
    const parsed = JSON.parse(decodedPayload);
    if (!isValidImportedConsent(parsed)) {
      return false;
    }

    const timestamp = parsed.acceptedAt;
    const parsedExpiry = new Date(timestamp);
    const expiry = Number.isNaN(parsedExpiry.getTime()) ? new Date() : parsedExpiry;

    const mappedConsent = {
      essential: parsed.necessary,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      timestamp,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mappedConsent));
    document.cookie = `cookieConsent=${encodeURIComponent(decodedPayload)}; path=/; SameSite=Lax; expires=${expiry.toUTCString()}`;
    setConsent(mappedConsent);
    setIsVisible(false);
    return true;
  } catch {
    return false;
  }
};

const applyThemeFromQuery = (theme) => {
  if (theme !== 'light' && theme !== 'dark') {
    return false;
  }

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  return true;
};

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const imported = applyConsentFromQuery(params.get(CONSENT_QUERY_PARAM), setConsent, setIsVisible);
    const themeApplied = applyThemeFromQuery(params.get(THEME_QUERY_PARAM));
    if (imported || themeApplied) {
      const url = `${window.location.origin}${window.location.pathname}${window.location.hash}`;
      window.history.replaceState(null, '', url);
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    } else {
      const timer = setTimeout(() => {
        if (!imported) {
          setIsVisible(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (preferences) => {
    const newConsent = {
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
    
    if (newConsent.analytics) {
      console.log('Analytics cookies accepted');
    }
  };

  const showBanner = () => setIsVisible(true);
  const hideBanner = () => setIsVisible(false);

  return (
    <CookieContext.Provider value={{ consent, isVisible, saveConsent, showBanner, hideBanner }}>
      {children}
      {isVisible && <CookieBanner />}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieContext);

const CookieBanner = () => {
  const { saveConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);

  const handleAcceptAll = () => saveConsent({ analytics: true, marketing: true });
  const handleReject = () => saveConsent({ analytics: false, marketing: false });

  if (showDetails) {
    return (
      <div className="cookie-banner">
        <div className="cookie-content">
          <span className="cookie-title"><Translate id="cookie.dialog.title">COOKIE PREFERENCES</Translate></span>
          <p><Translate id="cookie.dialog.description">Choose which optional cookies to allow. Necessary cookies are always on to keep the site working.</Translate></p>
          <CookiePreferences onSave={(prefs) => saveConsent(prefs)} onCancel={() => setShowDetails(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          <Translate id="cookie.line1">Do you know the similarities between a perfect garden and a jungle? Well, now think that plantasia.space is an organic software groWing in between.</Translate>
        </p>
        <p>
          <Translate id="cookie.line2Start">Please, find out </Translate>
          <Link to="/docs/plantasia.space/cookie-guide"><Translate id="cookie.moreInfo">More info</Translate></Link>
          <Translate id="cookie.line2End"> About how we use cookies.</Translate>
        </p>
        <p>
          <Translate id="cookie.line3Start">Send us </Translate>
          <Link to="https://release-preview.plantasia.space/en/support"><Translate id="cookie.feedbackInfo"> Feedback</Translate></Link>
          <Translate id="cookie.line3End"> About what how we can improve.</Translate>
        </p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-btn primary" onClick={handleAcceptAll}>
          <Translate id="cookie.ok">Accept all</Translate>
        </button>
        <button className="cookie-btn" onClick={handleReject}>
          <Translate id="cookie.onlyNecessary">Only necessary</Translate>
        </button>
        <button className="cookie-btn" onClick={() => setShowDetails(true)}>
          <Translate id="cookie.preferences">PREFERENCES</Translate>
        </button>
      </div>
    </div>
  );
};

export const CookiePreferences = ({ onSave, onCancel }) => {
  const { consent, saveConsent } = useCookieConsent();
  const [analytics, setAnalytics] = useState(consent?.analytics || false);
  const [marketing, setMarketing] = useState(consent?.marketing || false);

  const handleSave = () => {
    const prefs = { analytics, marketing };
    if (onSave) {
      onSave(prefs);
    } else {
      saveConsent(prefs);
      alert(translate({message: 'Preferences saved!', id: 'cookie.saved'}));
    }
  };

  return (
    <div className="cookie-preferences-panel">
      <div className="preference-item">
        <div className="preference-info">
          <h4><Translate id="cookie.dialog.necessaryTitle">NECESSARY</Translate></h4>
          <p><Translate id="cookie.dialog.necessaryDesc">Login/session and security for the site, plus Paddle checkout and billing to process payments and prevent fraud. Always on.</Translate></p>
        </div>
        <label className="toggle-switch">
          <input type="checkbox" checked disabled />
          <span className="slider"></span>
        </label>
      </div>

      <div className="preference-item">
        <div className="preference-info">
          <h4><Translate id="cookie.dialog.analyticsTitle">ANALYTICS / TRACKING</Translate></h4>
          <p><Translate id="cookie.dialog.analyticsDesc">Google Analytics and Google Forms tracking to understand usage and interactions. Disabled until you allow.</Translate></p>
        </div>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={analytics} 
            onChange={(e) => setAnalytics(e.target.checked)} 
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="preference-item">
        <div className="preference-info">
          <h4><Translate id="cookie.dialog.preferencesTitle">MARKETING</Translate></h4>
          <p><Translate id="cookie.dialog.preferencesDesc">Optional marketing-related features. Off by default.</Translate></p>
        </div>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={marketing} 
            onChange={(e) => setMarketing(e.target.checked)} 
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-actions" style={{ marginTop: '1rem', justifyContent: 'center' }}>
        <button className="cookie-btn primary" onClick={handleSave}>
          <Translate id="cookie.dialog.save">SAVE PREFERENCES</Translate>
        </button>
        {onCancel && (
          <button className="cookie-btn" onClick={onCancel}>
            <Translate>Cancel</Translate>
          </button>
        )}
      </div>
    </div>
  );
};
