import React from 'react';
import clsx from 'clsx';
import { Anchor } from '@/components/Anchor/Anchor';

type MenuProps = {
  className?: string;
  links: { url: string; linkTitle: string }[];
};

export const Menu: React.FC<MenuProps> = ({ className, links }) => {
  return (
    <ul className={clsx(className)}>
      {links.map((link, index) => (
        <li key={index} className={className}>
          <Anchor href={link.url} className={clsx(className)}>
            {link.linkTitle}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};