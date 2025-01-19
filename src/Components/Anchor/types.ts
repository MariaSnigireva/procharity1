import React, { FunctionComponent } from "react";
import { AnchorProps } from "./Anchor.tsx";

export type LinkTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a'>
	| FunctionComponent<AnchorProps>;

export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};

export function AnchorProvider({ // Компонент AnchorProvider, который предоставляет контекст Anchor
	children,
	LinkElement,
	ignoreFn,
}: AnchorProviderProps) {
	return (
		<AnchorContext.Provider value={{ LinkElement, ignoreFn }}>
			{children}
		</AnchorContext.Provider>
	);
}