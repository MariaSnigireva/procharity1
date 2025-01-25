import React from 'react';
import { Anchor } from '../Anchor/Anchor';

type MenuLink = {
  href: string;
  label: string;
};

type MenuProps = {
  menuLinks: MenuLink[];
};

const Menu: React.FC<MenuProps> = ({ menuLinks }) => {
  return (
    <nav className="menu">
      {menuLinks.map((link) => (
        <Anchor key={link.href} href={link.href}>
          {link.label}
        </Anchor>
      ))}
    </nav>
  );
};

export default Menu;