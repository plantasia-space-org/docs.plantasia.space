import React, { useState, useEffect, createContext, useContext } from 'react';
import './styles.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { MessageSquareHeart } from 'lucide-react';
import ReleaseIcon from '@site/static/img/symbols-12-25/release-current.svg';
import EntangledWorldIcon from '@site/static/img/sidebar-icons/entangled-world.svg';

const CookieContext = createContext();

const STORAGE_KEY = 'plantasia_cookie_consent';
const CONSENT_QUERY_PARAM = 'cookieConsent';
const THEME_QUERY_PARAM = 'theme';

const isValidImportedConsent = (consent) => {
  if (!consent || typeof consent !== 'object') {
    return false;
  }

  return (
    typeof consent.necessary === 'boolean' &&
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
      necessary: parsed.necessary,
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

  const saveConsent = () => {
    const newConsent = {
      necessary: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
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

  return (
    <div className="cookie-banner">
      <span className="cookie-rail-icon cookie-rail-icon-left" aria-hidden="true">
        <ReleaseIcon />
      </span>
      <div className="cookie-content">
        <p>
          <Translate id="cookie.line1">
            Do you know the similarities between a perfect garden and a jungle? Well, now think that plantasia.space is an organic software groWing in between.
          </Translate>
        </p>
        <p>
          <Link to="/docs/plantasia-space/cookie-guide"><Translate id="cookie.moreInfo">More info</Translate></Link>
        </p>
        <p>
          <Translate id="cookie.line3Start">Send us </Translate>
          <Link to="https://release-preview.plantasia.space/en/support"><Translate id="cookie.feedbackInfo">Feedback</Translate></Link>
          <Translate id="cookie.line3End"> About what how we can improve.</Translate>
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-subtle-btn" onClick={saveConsent}>
          <MessageSquareHeart size={14} strokeWidth={1.8} aria-hidden="true" />
          <Translate id="cookie.dismiss">Ok</Translate>
        </button>
      </div>
      <span className="cookie-rail-icon cookie-rail-icon-right" aria-hidden="true">
        <EntangledWorldIcon />
      </span>
    </div>
  );
};

export const CookiePreferences = ({ onSave, onCancel }) => {
  const { consent, saveConsent } = useCookieConsent();

  const handleSave = () => {
    if (onSave) {
      onSave();
    } else {
      saveConsent();
      alert(translate({message: 'Preferences saved!', id: 'cookie.saved'}));
    }
  };

  return (
    <div className="cookie-preferences-panel">
      <div className="preference-item">
        <div className="preference-info">
          <h4><Translate id="cookie.dialog.necessaryTitle">NECESSARY</Translate></h4>
          <p><Translate id="cookie.dialog.necessaryDesc">Login/session and security for the site, plus Stripe checkout and billing to process payments and help prevent fraud. Always on.</Translate></p>
        </div>
        <label className="toggle-switch">
          <input type="checkbox" checked disabled />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-actions" style={{ marginTop: '1rem', justifyContent: 'center' }}>
        <button className="cookie-btn primary" onClick={handleSave}>
          <Translate id="cookie.dialog.save">Ok</Translate>
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
