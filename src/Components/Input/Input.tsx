import clsx from 'clsx';
import styles from './Input.module.scss';
import {
	ChangeEvent,
	forwardRef,
	useEffect,
	useState,
} from 'react';
import { InputProps } from './types';

function withType(
  defaultPlaceholder?: string,
	defaultTag?: keyof React.JSX.IntrinsicElements,
	defaultType?: string,
) {
	return forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(function Input(
		{
			value,
			onChange,
			type = defaultType,
			name,
			className,
			placeholder = defaultPlaceholder,
			width,
			readOnly,
			isClearable = true,
			Tag = defaultTag,
		},
		ref // Добавляем ref для управления элементами
	) {
		const [valueInput, setValueInput] = useState(value);

		const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValueInput(e.target.value);
			onChange?.(e);
		};

		useEffect(() => {
			setValueInput(value || '');
		}, [value]);

		const handleClearClick = () => {
			setValueInput('');
			onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
		};

		const Element = Tag === 'textarea' ? 'textarea' : 'input';

		return (
			<div className={clsx(styles.container, className)} style={{ width }}>
				<Element
					ref={ref}
					type={Tag === 'input' ? type : undefined}
					value={valueInput}
					onChange={onInputChange}
					className={clsx(styles['input__field'])}
					name={name}
					placeholder={placeholder}
					readOnly={readOnly}
				/>
				<div className={styles['input__controls']}>
					{isClearable && (
						<button
							type="button"
							onClick={handleClearClick}
							className={clsx(styles['input__button'], {
								[styles.hidden]: !valueInput,
							})}
							aria-label="Очистить поле ввода"
							title="Очистить"
						>
						</button>
					)}
				</div>
			</div>
		);
	});
}

export const InputText = withType('Введите текст', 'textarea');

export const InputPassword = withType('Пароль', 'input', 'password');

export const InputEmail = withType('Электронная почта', 'input', 'email');