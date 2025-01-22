import { Field } from "@/Containers/Field/Field";
import { InputEmail, InputPassword } from "@/Components/Input/Input";
import { Button } from "@/Components/Action/Action";
import { useState } from "react";

export interface LoginFormProps {
	onSubmit: (email: string, password: string) => Promise<void>; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			setError('Email and password are required');
			return;
		}
		setError('');

		setIsLoading(true);
		try {
			await onSubmit(email, password);
		} catch (err) {
			setError('Failed to log in. Please check your credentials.'); 
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} aria-label="Login Form">
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
			{error && <div role="alert" style={{ color: 'red' }}>{error}</div>} 
			<Button type="submit" disabled={isLoading}>
				{isLoading ? "Logging in..." : "Login"}
			</Button>
		</form>
	);
};

export default LoginForm;