import * as LucideIcons from 'lucide-react';

export const STATIC_ICONS = {
  ReleaseIcon: require('@site/static/img/symbols-12-25/release-current.svg').default,
  PlantasiaIcon: require('@site/static/img/sidebar-icons/plantasia-logo.svg').default,
  TrackIcon: require('@site/static/img/sidebar-icons/track.svg').default,
  EntangledWorldIcon: require('@site/static/img/sidebar-icons/entangled-world.svg').default,
  OrbiterIcon: require('@site/static/img/sidebar-icons/orbiter.svg').default,
  CollectionIcon: require('@site/static/img/sidebar-icons/collection.svg').default,
  EyeIcon: require('@site/static/img/symbols-12-25/eye.svg').default,
  UseIcon: require('@site/static/img/symbols-12-25/power.svg').default,
  EditIcon: require('@site/static/img/pencil.svg').default,
  XplorerIcon: require('@site/static/img/symbols-12-25/xplorer-current.svg').default,
};

export function resolveIcon(iconName) {
  if (!iconName) return undefined;
  if (STATIC_ICONS[iconName]) return STATIC_ICONS[iconName];
  const LucideIcon = LucideIcons[iconName];
  if (!LucideIcon) {
    console.warn(`[sidebar] Icon "${iconName}" was not found in lucide-react or static icons.`);
  }
  return LucideIcon;
}
