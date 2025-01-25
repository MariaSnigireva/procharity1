import clsx from 'clsx';
import styles from './Card.scss';
import { FunctionComponent, ReactNode } from 'react';

export type CardProps = {
	className?: string;
	children: ReactNode;
	href?: string;
	ariaLabel?: string;
};

export const Card: FunctionComponent<CardProps> = ({
	className,
	children,
	href,
	ariaLabel,
}: CardProps) => {
	const CardElement = href ? 'a' : 'div';

	return (
		<CardElement
			className={clsx(styles.container, className)}
			href={href}
			{...(href ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': ariaLabel } : {})}
		>
			{children}
		</CardElement>
	);
};