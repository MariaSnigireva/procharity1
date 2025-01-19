import { ReactNode, FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './Header.scss';
import { Anchor } from '@/components/Anchor/Anchor';
import { Menu } from './Menu'; 

export type HeaderProps = {
  className?: string;
	menu: MenuLink[];
	children?: ReactNode;
	isSticky?: boolean;
};

export const Header: FunctionComponent<HeaderProps> = ({
    className,
    isSticky = true,
    menu,
    children,
  }: HeaderProps) => {
    return (
      <header
        className={clsx(styles.header, className, {
          [styles.sticky]: isSticky,
        })}
      >
        <div className={styles.container}>
          <Anchor href="/" className={styles.logo} />
          <nav className={clsx(styles.menu)}>
            <Menu items={menu} /> 
          </nav>
          <nav className={styles.controls}>{children}</nav>
        </div>
      </header>
    );
  };
  