import clsx from "clsx";
import styles from './Modal.scss';
import { Icon } from "../../components/Icon/Icon";
import { ReactElement, useState } from "react";

export type ModalProps = {
	className?: string;
	onClose: () => void;
	children: React.ReactNode;
};

export function Modal({ onClose, children, className }: ModalProps) {
	return (
		<div
			className={clsx(styles.overlay, className)}
			onClick={onClose}
			aria-modal="true"
			role="dialog"
		>
			<div
				className={styles.modal}
				onClick={(e) => e.stopPropagation()}
			>
				<button 
					className={clsx(styles.icon)} 
					onClick={onClose}
					aria-label="Close modal"
				>
					<Icon name="close" />
				</button>
				{children}
			</div>
		</div>
	);
}

export type TriggerProps = {
	children: ReactElement;
	modal: ReactElement;
};

export function Trigger({ children, modal }: TriggerProps) {
	const [isActive, setActive] = useState(false);

	const closeModal = () => {
		setActive(false);
		(modal.props as ModalProps).onClose?.();
	};

	return (
		<>
			{React.cloneElement(children, { onClick: () => setActive(true) })}
			{isActive && React.cloneElement(modal, { onClose: closeModal })}
		</>
	);
}