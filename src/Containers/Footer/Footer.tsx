import clsx from 'clsx';
import styles from './Footer.scss';
import { Anchor } from '@/Components/Anchor/Anchor';
import Menu from './Menu/Menu';

export interface MenuLink {
  href: string;
  label: string;
}

export interface FooterProps {
  menuLinks: MenuLink[];
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ menuLinks, children }) => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.logo}>Logo</div>
      <Menu menuLinks={menuLinks} />
      {children}
    </footer>
  );
};

export default Footer;