import React, { ReactNode, FunctionComponent } from 'react';
import { Anchor } from '@/components/Anchor/Anchor';
import styles from './Menu.module.scss'; 

export type MenuLink = {
	label: string | ReactNode;
	href: string;
};

interface MenuProps {
  items: MenuLink[];
}

export const Menu: FunctionComponent<MenuProps> = ({ items }) => {
  return (
    <ul className={styles.menuContent}>
      {items.map(({ label, href }, index) => (
        <li key={index} className={styles.link}>
          <Anchor href={href}>{label}</Anchor>
        </li>
      ))}
    </ul>
  );
};