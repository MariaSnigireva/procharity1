import React from 'react';
import { Layout } from '../../containers/Layout/Layout';
import { Section } from '../../containers/Section/Section';
import { Card } from '../../containers/Card/Card';
import  LoginForm  from '../../screens/LoginForm/LoginForm';

const handleLoginSubmit = (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
};

const LoginPage: React.FC = () => {
    return (
		<Layout>
			<Section>
				<Card>
					<LoginForm onSubmit={handleLoginSubmit} />
          {error && <div role="alert" style={{ color: 'red' }}>{error}</div>} 
				</Card>
			</Section>
		</Layout>
	);
};

export default LoginPage;