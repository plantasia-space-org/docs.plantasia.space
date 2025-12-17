---
title: Edit
hide_title: true
---

import OrbiterIcon from '@site/static/img/symbols-12-25/orbiter-current.svg';

<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', marginBottom: '1rem'}}>
  <OrbiterIcon width={28} height={28} style={{color: 'currentColor'}} />
  <h1 style={{margin: 0}}>Orbiters Overview</h1>
</div>

:::warning Work in progress
This section is under active development and may change.
:::

Editing an Orbiter allows you to refine an existing instrument without creating a new one.

### Video: Editing an Orbiter

<video
  className="ps-doc-video"
  controls
  poster="/img/video-placeholder.svg"
>
  <source src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/docs/en/media/orbiters/05-edit-orbiter.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## What can be edited

An Orbiter can be updated after release. You can edit:

- Orbiter image
- Orbital name (where allowed)
- Preview Audio and Entangled World (for testing)
- Panel design per dimension
- Engine mappings per dimension
- Collaboration and visibility settings

## Dimension awareness

Most Orbiter parameters are **dimension-specific**.

When editing, always check each dimension (1, 2, and 3) and verify:

- Panel styling is correct
- Engine mappings behave as expected

Copy / paste can be used for panel styling, but engine settings must be adjusted per dimension.

## Iteration workflow

Orbiters are designed to be iterated.

You can:

- Test changes with different Audios
- Preview behavior in different Entangled Worlds
- Refine mappings gradually

## Save and publish changes

Save drafts while experimenting.

Publish changes when you are ready for them to apply to the public Orbiter.
