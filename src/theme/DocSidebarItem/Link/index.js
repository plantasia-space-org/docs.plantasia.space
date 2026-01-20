import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import { resolveIcon } from '../../utils/iconResolver';

export default function LinkWrapper(props) {
  const { item } = props;
  const { customProps } = item;
  
  const iconName = customProps?.icon;
  const Icon = resolveIcon(iconName);
  const iconClassName = `lucide sidebarItemIcon${
    iconName === 'PlantasiaIcon' ? ' sidebarItemIcon--plantasia' : ''
  }`;

  if (Icon) {
    const LabelWithIcon = (
      <span className="sidebarItemWithIcon" title={item.label}>
        <Icon className={iconClassName} size={18} />
        <span>{item.label}</span>
      </span>
    );

    const newItem = {
      ...item,
      label: LabelWithIcon,
    };

    return <Link {...props} item={newItem} />;
  }

  return <Link {...props} />;
}
