import clsx from 'clsx';
import { Title } from '../Components/Typography/Typography';

export type SectionProps = {
	className?: string;
	containerClassName?: string;
	variant?: 'page' | 'content';
	title?: string;
	children?: React.ReactNode;
	image?: React.ReactNode;
	renderAction?: () => React.ReactNode;
	HeaderTag?: keyof React.JSX.IntrinsicElements;
};

export function Section({
	className,
	containerClassName,
	variant = 'content',
	title,
	children,
	image,
	renderAction,
	HeaderTag = "h3"
}: SectionProps) {
	return (
		<section
			className={clsx(styles.section, styles[variant], className)}
			aria-labelledby={title ? 'section-title' : undefined}
		>
			<div className={clsx(styles.container, containerClassName)}>
				{image && <div className={styles.image}>{image}</div>}
				<div className={styles.content}>
					{title && (
						<Title 
							className={styles.title} 
							Tag={HeaderTag} 
							value={title} 
							id="section-title"
						/>
					)}
					{children}
					{renderAction && (
						<div className={styles.actionWrapper}>{renderAction()}</div>
					)}
				</div>
			</div>
		</section>
	);
}