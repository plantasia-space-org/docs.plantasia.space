---
title: Guía de Cookies
wrapperClassName: doc-wrapper-icon-cookie
sidebar_position: 7
sidebar_custom_props:
  icon: Cookie
---

## Guía de Cookies

En Plantasia Space, vemos nuestra plataforma como un "software orgánico" que crece entre un jardín perfecto y una selva. Para mantener este ecosistema saludable y funcional, utilizamos cookies (pequeños archivos de texto almacenados en tu dispositivo).

Creemos en la transparencia. En este momento, este sitio de documentación solo utiliza cookies estrictamente necesarias para que funcione.

### Cómo Usamos las Cookies

Actualmente utilizamos una sola categoría de cookies en este sitio:

#### Lo Esencial (Necesarias)

Al igual que una planta necesita raíces, nuestra plataforma necesita estas cookies para sobrevivir. Están siempre activas y no se pueden desactivar porque el sitio dejaría de funcionar sin ellas.

*   **Qué hacen:** Gestionan sesiones seguras, la seguridad básica del sitio y las preferencias de consentimiento.
*   **Tu experiencia:** No las notarás, pero están trabajando en segundo plano para mantener tu cuenta segura y tus transacciones protegidas.

En la plataforma general de Plantasia Space, los servicios estrictamente necesarios son:

*   **Autenticación** — Firebase gestiona de forma segura tu cuenta y tu estado de sesión
*   **Pagos** — Stripe se encarga de la facturación y los flujos de pago
*   **Seguridad** — Cloudflare Turnstile previene el abuso de bots y mantiene la plataforma segura

### Lo Que No Usamos

No utilizamos cookies de analítica, identificadores publicitarios, IDs de visitante en localStorage, proveedores de analítica de terceros ni píxeles de seguimiento.

Para entender la salud de la plataforma usamos en cambio **telemetría anónima de primera parte**: un identificador de sesión guardado solo en `sessionStorage` agrupa los eventos de tu pestaña actual, y las direcciones IP se truncan y se procesan con una sal que rota a diario — así la actividad no puede vincularse contigo ni seguirse entre días distintos.

También respetamos las señales **Do Not Track** y **Global Privacy Control (GPC)**: si están activadas, la recolección de eventos no esenciales se desactiva automáticamente.

### Tu Centro de Control

Puedes gestionar tus preferencias de cookies en cualquier momento utilizando los controles a continuación:

import { CookiePreferences } from '@site/src/components/CookieConsent';

<CookiePreferences />

Cuando nos visites por primera vez, verás un banner en la parte inferior de la pantalla explicando que este sitio solo utiliza cookies necesarias.

*   **OK:** Cierra el aviso.
*   **Detalles:** Abre el panel de cookies para revisar qué se considera necesario.

Para el panorama completo, mira la **Política de Privacidad y Cookies** en la sección Legal de plantasia.space (última actualización: 11 de mayo de 2026).
