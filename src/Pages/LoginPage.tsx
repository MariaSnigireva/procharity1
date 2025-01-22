import React from 'react';
import { Layout } from '../containers/Layout/Layout';
import { Section } from '../containers/Section/Section';
import { Card } from '../containers/Card/Card';
import { LoginForm } from '../screens/LoginForm';

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