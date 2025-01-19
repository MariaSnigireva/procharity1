import clsx from 'clsx';
import { ReactNode, FunctionComponent} from "react";

export type FieldProps = {
	className?: string;
	children?: ReactNode;
	label?: string;
};

// Определяем функциональный компонент Field с типом FieldProps
export const Field: FunctionComponent<FieldProps> = ({
  className,
  label,
  children
 }: FieldProps) => {
   return (
     <div className={clsx(className)}>
       {label && <label className={clsx("label")}>{label}</label>}
       <div className={clsx("input-container")}>{children}</div>
     </div>
     );	
 };