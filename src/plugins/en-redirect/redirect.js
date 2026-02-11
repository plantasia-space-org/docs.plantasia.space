import React from 'react';
import { Redirect, useLocation } from '@docusaurus/router';

export default function EnRedirect() {
  const location = useLocation();
  const pathname = location.pathname.replace(/^\/en/, '') || '/';
  const search = location.search || '';
  const hash = location.hash || '';

  return <Redirect to={`${pathname}${search}${hash}`} />;
}
