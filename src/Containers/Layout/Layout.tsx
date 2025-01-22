import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";
import { Footer, FooterProps } from "../Footer/Footer";
import styles from './Layout.scss';
import { Header, HeaderProps } from "../Header/Header";

export type LayoutProps = {
	className?: string;
	children?: ReactNode;
	user?: ReactNode;
	headerSettings: HeaderProps;
	footerSettings: FooterProps;
};

export const Layout: FunctionComponent<LayoutProps> = ({
	className,
	children,
	user,
	headerSettings,
	footerSettings,
}: LayoutProps) => {
	return (
		<div className={clsx(styles.layout, className)}>
			<Header {...headerSettings}>{user}</Header>
			<div className={styles.content}>{children}</div>
			<Footer {...footerSettings} />
		</div>
	);
};