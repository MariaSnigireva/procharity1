import { AnchorHTMLAttributes, createContext, useContext } from 'react';
import { Link } from './Anchor';
import { AnchorContextType, LinkTag } from './types';
import { convertURL } from '@/utils';

export const AnchorContext = createContext<AnchorContextType>({});

export function useAnchor(link?: Link): LinkTag {
	const { LinkElement, ignoreFn } = useContext(AnchorContext);
	if (link && LinkElement && typeof link === 'string') {
		if (!ignoreFn || ignoreFn(link)) return LinkElement;
	}
	return 'a';
}

export function useLinkProps(
	link?: Link,
): AnchorHTMLAttributes<HTMLAnchorElement> {
	const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};

	if (typeof link === 'string') {
		const url = convertURL(link);
		props.href = link;
		if (url.origin !== location.origin) {
			props.rel = 'noopener noreferrer';
			props.target = '_blank';
		}
	}

	if (typeof link === 'function') {
		props.onClick = (e) => {
			e.preventDefault();
			e.stopPropagation();
			link(e);
		};
	}

	return props;
}