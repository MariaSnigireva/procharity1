import { Button } from "@/Components/Action/Action";
import { Field } from "@/Containers/Field/Field";
import { InputEmail } from "@/Components/Input/Input";
import { Input, InputPassword } from "@/ui";
import { useState } from "react";

export interface RegisterFormProps {
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name || !email || !password || !confirmPassword) {
			setError('All fields are required.');
			return;
		}

		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			return;
		}

		setError('');
		setIsLoading(true);

		try {
			await onSubmit(name, email, password, confirmPassword);
		} catch (err) {
			setError('Registration failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} aria-label="Registration Form">
			<Field>
				<Input 
					value={name} 
					onChange={(e) => setName(e.target.value)} 
					placeholder="Name" 
					aria-label="Name" 
				/>
			</Field>
			<Field>
				<InputEmail 
					value={email} 
					onChange={(e) => setEmail(e.target.value)} 
					aria-label="Email" 
				/>
			</Field>
			<Field>
				<InputPassword 
					value={password} 
					onChange={(e) => setPassword(e.target.value)} 
					aria-label="Password" 
				/>
			</Field>
			<Field>
				<InputPassword 
					value={confirmPassword} 
					onChange={(e) => setConfirmPassword(e.target.value)} 
					placeholder="Confirm Password" 
					aria-label="Confirm Password" 
				/>
			</Field>
			{error && <div role="alert" style={{ color: 'red' }}>{error}</div>}
			<Button type="submit" disabled={isLoading}>
				{isLoading ? "Registering..." : "Register"}
			</Button>
		</form>
	);
};

export default RegisterForm;