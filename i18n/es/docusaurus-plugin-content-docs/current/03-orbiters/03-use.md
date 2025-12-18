---
title: Usar
hide_title: true
---

import OrbiterIcon from '@site/static/img/symbols-12-25/orbiter-current.svg';
import PowerIcon from '@site/static/img/symbols-12-25/power.svg';

<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', marginBottom: '1rem'}}>
  <PowerIcon width={24} height={24} style={{color: 'currentColor'}} />
  <OrbiterIcon width={28} height={28} style={{color: 'currentColor'}} />
  <h1 style={{margin: 0}}>Usar</h1>
</div>

![Orbiter en uso](https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/new.png)

## Abrir un Orbitador

Accede a los Orbitadores desde el **Audio** que estás escuchando.

Dependiendo del contexto, el Orbitador puede abrirse incrustado en la página o en una pestaña independiente.

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/06-use-open.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>

## Comenzar por las dimensiones

Cada Orbitador incluye **tres dimensiones**.

Cada dimensión contiene un conjunto distinto de transformaciones diseñadas por la persona creadora del Orbitador.

Los mismos controles **X, Y, Z** activan procesos diferentes en cada dimensión.

En escritorio puedes cambiar de dimensión con las teclas **1 / 2 / 3**.

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/07-use-transport-jam.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>


## Transporte y bucles

Usa los controles de transporte para:

- Reproducir
- Pausar
- Detener

Abre el panel de **Reproducción** para trabajar con la forma de onda:

- Acerca o aleja
- Desplázate a otra posición
- Define regiones de loop

Los loops se mantienen disponibles en todos los paneles.


## Monitoreo

Usa los monitores para saber qué está ocurriendo en tiempo real:

- Monitor del motor (parámetros activos)
- Información del Audio
- Contexto del Mundo Entrelazado
- Identidad del Orbiter

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/10-use-monitor-playback.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>


## Modo Jam (XYZ)

El modo Jam es la forma principal de interacción.

- **X** y **Y** se controlan moviéndote por la pantalla
- **Z** responde a gestos de zoom o controles dedicados

También puedes manipular los knobs directamente.

### Volver al equilibrio

- Haz doble clic / doble toque en un knob para reiniciar un eje
- Haz doble clic / doble toque en la pantalla para reiniciar X, Y y Z al mismo tiempo

El equilibrio suele representar un estado neutro o bypass.

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/09-use-level-num-keyboard.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>

## Cosmic LFO

Cada eje (X, Y, Z) tiene un Cosmic LFO independiente.

Puedes controlar:

- Profundidad (intensidad de la modulación)
- Forma de onda
- Fuente de frecuencia

Algunas fuentes son manuales; otras dependen del Mundo Entrelazado y de los datos de su exoplaneta.

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/08-use-cosmic-lfo.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>

## Controles globales vs específicos

Algunos controles son globales y se mantienen al cambiar de dimensión, como:

- Transporte
- Loop
- Volumen

La mayoría de los controles de interpretación son específicos por dimensión y cambian al cambiar de dimensión.
