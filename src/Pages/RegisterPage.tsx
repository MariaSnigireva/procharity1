import React from 'react';
import { Layout } from '../containers/Layout/Layout';
import { Section } from '../containers/Section/Section';
import { Card } from '../containers/Card/Card';
import RegisterForm from '../screens/RegisterForm';


interface RegisterFormProps {
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => void;
}

const handleRegisterSubmit = (
	name: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	console.log('Register submitted:', {
		name,
		email,
		password,
		confirmPassword,
	});
};

const RegisterPage: React.FC = () => {
	return (
		<Layout>
			<Section>
				<Card>
					<RegisterForm onSubmit={handleRegisterSubmit} />
          {error && <div role="alert" style={{ color: 'red' }}>{error}</div>}
				</Card>
			</Section>
		</Layout>
	);
};

export default RegisterPage;