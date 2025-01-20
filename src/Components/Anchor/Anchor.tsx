import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useAnchor, useLinkProps } from './AnchorContext'; 

export type Link = string | ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'link'
> & {
	link?: Link; // Добавляем опциональный пропс link
};

export function Anchor({ href, children, ...props }: AnchorProps) { 
	const LinkElement = useAnchor(href); // Получаем элемент ссылки через кастомный хук useAnchor
	const propsLink = useLinkProps(href); // Получаем дополнительные пропсы для ссылки через кастомный хук useLinkProps

	return (
		<LinkElement {...props} {...propsLink}>
			{children}
		</LinkElement>
	);
}