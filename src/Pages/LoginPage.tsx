import React from 'react';
import { Layout } from '../Containers/Layout/Layout';
import { Section } from '../Containers/Section/Section';
import { Card } from '../Containers/Card/Card';
import { LoginForm } from '../Screens/LoginForm';

const handleLoginSubmit = async (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
};

const LoginPage: React.FC = () => {
    return (
		<Layout>
			<Section>
				<Card>
					<LoginForm onSubmit={handleLoginSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default LoginPage;