import { ReactNode } from 'react';
import { ButtonTag, ButtonType, ButtonVariant } from './types';
import styles from './Action.scss';
import { Anchor } from '../Anchor/Anchor';
import clsx from 'clsx';
import { Icon } from '@/ui';

export type ButtonProps = {
	type?: ButtonType;
	variant?: ButtonVariant;
	disabled?: boolean;
	waiting?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
	href?: string;
	Tag?: ButtonTag;
};

function withTag(defaultTag: ButtonTag = 'button') {
	return function Button({
		type = ButtonType.Button,
		variant = ButtonVariant.Primary,
		disabled = false,
		waiting = false,
		onClick,
		className,
		children,
		href,
		Tag = defaultTag,
	}: ButtonProps) {
		const TagElement = Tag === 'a' ? Anchor : Tag;

		return (
			<TagElement
				type={Tag === 'button' ? type : undefined} // Устанавливаем тип, если это кнопка
				href={Tag === 'a' ? href : undefined} // Устанавливаем href, если это ссылка
				className={clsx(styles.button, styles[variant], className, {
					[styles.disabled]: disabled, // Устанавливаем класс для отключенной кнопки
					[styles.waiting]: waiting, // Устанавливаем класс для кнопки в состоянии ожидания
				})}
				onClick={onClick}
				disabled={disabled}
			>
				{waiting && <Icon name="loader" />}
				{children}
			</TagElement>
		);
	};
}

export const Button = withTag(); // Кнопка с тегом по умолчанию (button)
export const ButtonLink = withTag('a'); // Кнопка с тегом 'a' для ссылок