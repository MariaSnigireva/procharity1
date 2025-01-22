import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Header.scss';
import { Anchor } from '@/Components/Anchor/Anchor';
import Menu from './Menu/Menu';

export type MenuLink = {
  href: string;
  label: string;
};

export type HeaderProps = {
  className?: string;
  menu: MenuLink[];
  children?: ReactNode;
  isSticky?: boolean;
};

const Header: React.FC<HeaderProps> = ({ className, menu, children, isSticky }) => {
  return (
    <header className={clsx(styles.header, className, { [styles.sticky]: isSticky })}>
      <div className={styles.logo}>Logo</div>
      <Menu menuLinks={menu} />
      {children}
    </header>
  );
};

export default Header;