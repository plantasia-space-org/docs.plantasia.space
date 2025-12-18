---
title: Editar
hide_title: true
---

import OrbiterIcon from '@site/static/img/symbols-12-25/orbiter-current.svg';
import PencilIcon from '@site/static/img/pencil.svg';

<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', marginBottom: '1rem'}}>
  <PencilIcon width={26} height={26} style={{color: 'currentColor'}} />
  <OrbiterIcon width={28} height={28} style={{color: 'currentColor'}} />
  <h1 style={{margin: 0}}>Editar</h1>
</div>

Editar un Orbitador te permite perfeccionar un instrumento existente sin crear uno nuevo.

### Video: Editar un Orbitador

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/es/media/orbiters/05-edit-orbiter.mp4" type="video/mp4" />
  Tu navegador no soporta la etiqueta de video.
</video>

## Qué se puede editar

Puedes actualizar un Orbitador incluso después de haberlo publicado. Es posible modificar:

- Imagen del Orbitador
- Nombre orbital (cuando las reglas lo permiten)
- Audio y Mundo Entrelazado usados para la vista previa
- Diseño del panel en cada dimensión
- Mapeos del motor por dimensión
- Configuración de colaboración y visibilidad

## Tener en cuenta las dimensiones

La mayoría de los parámetros del Orbitador son **específicos por dimensión**.

Al editar, revisa siempre cada dimensión (1, 2 y 3) y asegúrate de que:

- El estilo del panel sea correcto
- Los mapeos del motor respondan como esperas

Puedes usar copiar / pegar para replicar el estilo del panel, pero los ajustes del motor deben refinarse manualmente en cada dimensión.

## Flujo de iteración

Los Orbitadores están diseñados para iterarse.

Puedes:

- Probar cambios con diferentes Audios
- Previsualizar el comportamiento en varios Mundos Entrelazados
- Ajustar los mapeos de manera gradual

## Guardar y publicar cambios

Guarda borradores mientras experimentas.

Publica los cambios cuando estés listo para que se apliquen al Orbitador público.
