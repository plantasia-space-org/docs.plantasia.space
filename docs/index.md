---
id: index
title: xPlorer Guide
slug: /index
sidebar_position: 0
sidebar_custom_props:
  icon: XplorerIcon
---

import { NavigationGrid, NavigationCard } from '@site/src/components/NavigationGrid';

Explore the main sections through quick visual cards using our own symbols.

<NavigationGrid>
  <NavigationCard
    icon={
      <img
        src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/logos/current/plantasia-space-logo-black-transparent-background-512.svg"
        alt="plantasia.space"
        width="32"
        height="32"
        className="invert-on-dark"
      />
    }
    title="plantasia.space"
    description=""
    to="/docs/plantasia.space/introduction"
  />
  <NavigationCard
    icon={
      <img
        src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/track.svg"
        alt="Audios"
        width="32"
        height="32"
        className="invert-on-dark"
      />
    }
    title="Audios"
    description=""
    to="/docs/audios"
  />
  <NavigationCard
    icon={
      <img
        src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/entangled-world.svg"
        alt="Entangled Worlds"
        width="32"
        height="32"
        className="invert-on-dark"
      />
    }
    title="Entangled Worlds"
    description=""
    to="/docs/entangled-worlds"
  />
  <NavigationCard
    icon={
      <img
        src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/orbiter.svg"
        alt="Orbiters"
        width="32"
        height="32"
        className="invert-on-dark"
      />
    }
    title="Orbiters"
    description=""
    to="/docs/orbiters"
  />
  <NavigationCard
    icon={
      <img
        src="https://plantasia-prod-public.fra1.digitaloceanspaces.com/assets/symbols/current/collection.svg"
        alt="Collections"
        width="32"
        height="32"
        className="invert-on-dark"
      />
    }
    title="Collections"
    description=""
    to="/docs/collections"
  />
</NavigationGrid>
