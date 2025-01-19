import { ChangeEvent } from "react";

export interface InputProps {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	name?: string;
	placeholder?: string;
	width?: string;
	readOnly?: boolean;
	isClearable?: boolean;
	Tag?: keyof React.JSX.IntrinsicElements;
}