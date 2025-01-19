import clsx from "clsx";
import { useTranslation } from "react-i18next";
import styles from './Typography.scss';
import { isTranslationKey, TextProps } from "./types";

function withType(defaultTag: keyof React.JSX.IntrinsicElements) {
	const { t } = useTranslation();
	
	return function Text({ className, value, Tag = defaultTag }: TextProps) {
		return function Text({ className, value, Tag = defaultTag }: TextProps) {
			return (
				<Tag className={clsx(styles.container, className)}>
					{isTranslationKey(value) ? t(value) : value}
				</Tag>
			);
		};
	};
}  

export const Text = withType('span');
export const Title = withType('h3');