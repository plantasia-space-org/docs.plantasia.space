import React from 'react';
import Link from '@docusaurus/Link';

// 1. THE CARD COMPONENT
export function NavigationCard({ href, label, description, icon }) {
  return (
    <Link 
      to={href} 
      className="dash-card dash-card--item" 
      style={{ 
        display: 'block', 
        height: '100%',
        padding: '1rem',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '8px',
        textDecoration: 'none', 
        color: 'var(--ifm-font-color-base)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        {/* Render the icon if passed */}
        {icon && <div style={{ color: 'var(--ifm-color-primary)', display: 'flex' }}>{icon}</div>}
        <div style={{ fontWeight: '600', fontSize: '1.1em' }}>{label}</div>
      </div>
      <div style={{ fontSize: '0.9em', color: 'var(--ifm-color-emphasis-600)' }}>
         {description}
      </div>
    </Link>
  );
}

// 2. THE GRID CONTAINER
export function NavigationGrid({ children }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: 16, 
      marginTop: 20,
      marginBottom: 20,
    }}>
      {children}
    </div>
  );
}
