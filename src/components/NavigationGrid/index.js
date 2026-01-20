import React from 'react';
import Link from '@docusaurus/Link';

export function NavigationGrid({ children }) {
  return <div className="navGrid">{children}</div>;
}

export function NavigationCard({ icon, title, description, to, href }) {
  const LinkComponent = to ? Link : 'a';
  const linkProps = to ? { to } : { href };

  return (
    <LinkComponent className="navCard" {...linkProps}>
      {icon ? <span className="navCardIcon">{icon}</span> : null}
      <span>
        <h3 className="navCardTitle">{title}</h3>
        {description ? <p className="navCardDescription">{description}</p> : null}
      </span>
    </LinkComponent>
  );
}

export default NavigationGrid;
