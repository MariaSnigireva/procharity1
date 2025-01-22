import clsx from 'clsx';
import styles from './Icon.module.scss';
import Icons from './icons.svg';

export type IconProps = {
	name: string;
	size?: number;
	color?: string;
	className?: string;
};

export function Icon({ name, className, size = 24, color = 'inherit' }: IconProps) {
	return (
		<svg
			className={clsx(styles.container, className)}
			width={size}
			height={size}
			style={{ color }}
		>
			<use href={`${Icons}#${name}`} />
		</svg>
	);
}