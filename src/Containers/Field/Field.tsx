import clsx from 'clsx';
import { ReactNode } from "react";

export type FieldProps = {
	className?: string;
	children?: ReactNode;
	label?: string;
};

export function Field({ className, children, label }: FieldProps) {
	return <label className={clsx(styles.container, className)} data-testid="Field">
		{label && <span className={styles.label}>{label}</span>}
		{children}
	</label>;
}