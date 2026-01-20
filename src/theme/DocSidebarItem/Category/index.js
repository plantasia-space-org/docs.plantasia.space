import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import { resolveIcon } from '../../utils/iconResolver';

export default function CategoryWrapper(props) {
  const { item } = props;
  const iconName = item?.customProps?.icon;
  const Icon = resolveIcon(iconName);
  const iconClassName = `lucide sidebarItemIcon${
    iconName === 'PlantasiaIcon' ? ' sidebarItemIcon--plantasia' : ''
  }`;

  if (Icon) {
    const labelWithIcon = (
      <span className="sidebarItemWithIcon" title={item.label}>
        <Icon className={iconClassName} size={18} />
        <span>{item.label}</span>
      </span>
    );

    return <Category {...props} item={{ ...item, label: labelWithIcon }} />;
  }

  return <Category {...props} />;
}
