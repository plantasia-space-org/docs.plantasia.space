---
title: Use
hide_title: true
---

import OrbiterIcon from '@site/static/img/symbols-12-25/orbiter-current.svg';
import PowerIcon from '@site/static/img/symbols-12-25/power.svg';

<div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', marginBottom: '1rem'}}>
  <PowerIcon width={24} height={24} style={{color: 'currentColor'}} />
  <OrbiterIcon width={28} height={28} style={{color: 'currentColor'}} />
  <h1 style={{margin: 0}}>Overview</h1>
</div>

:::warning Work in progress
This page documents features that are still in development and will be available soon. Details may change as we continue building plantasia.space.
:::

## Opening an Orbiter

Orbiters are accessed through **Audios**.

An Orbiter can open embedded in the page or in a separate tab, depending on context.

## Start with dimensions

Each Orbiter contains **three dimensions**.

Dimensions are different sound-transformation setups designed by the Orbiter creator.

The same **X, Y, Z** controls affect different processes in each dimension.

On desktop, dimensions can usually be switched using **1 / 2 / 3**.

## Transport and looping

Use the transport controls to:

- Play
- Pause
- Stop

Open the **Playback** panel to work with the waveform:

- Zoom in and out
- Seek to a position
- Set loop regions

Looping remains available across all panels.

## Jamming mode (XYZ)

Jamming mode is the primary interaction mode.

- X and Y are controlled by movement across the screen
- Z is controlled via zoom gestures or dedicated controls

You can also use the knobs directly.

### Reset to equilibrium

- Double-click / double-tap a knob to reset one axis
- Double-click / double-tap the screen to reset X, Y, and Z together

Equilibrium usually represents a bypass or neutral state.

## Cosmic LFO

Each axis (X, Y, Z) has an independent Cosmic LFO.

You can control:

- Depth (modulation amount)
- Waveform
- Frequency source

Some sources are manual, others depend on the Entangled World and its exoplanet data.

## Monitoring

Use the monitors to understand what is happening in real time:

- Engine monitor (active parameters)
- Audio information
- Entangled World context
- Orbiter identity

## Global vs dimension-specific controls

Some controls are global across dimensions, such as:

- Transport
- Loop
- Volume

Most performance controls are dimension-specific and change when switching dimensions.
