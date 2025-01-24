import React, { useState } from 'react';
import { Layout } from '../containers/Layout/Layout';
import { Section } from '../containers/Section/Section';
import { Modal, Trigger } from '../containers/Modal/Modal';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import { Button } from '../components/Action/Action'; 

const MainPage: React.FC = () => {
	const [error, setError] = useState('');

	const handleLoginSubmit = async (email: string, password: string) => {
		console.log('Login:', { email, password });
	};

	const handleRegisterSubmit = async (name: string, email: string, password: string, confirmPassword: string) => {
		console.log('Register:', { name, email, password, confirmPassword });
	};

	return (
		<Layout>
			<Section>
				<Trigger
					modal={<Modal onClose={() => {}}><LoginForm onSubmit={handleLoginSubmit} /></Modal>}
				>
					<Button>Login</Button>
				</Trigger>
				<Trigger
					modal={<Modal onClose={() => {}}><RegisterForm onSubmit={handleRegisterSubmit} /></Modal>}
				>
					<Button>Register</Button>
				</Trigger>
				{error && <div role="alert" style={{ color: 'red' }}>{error}</div>}
			</Section>
		</Layout>
	);
};

export default MainPage;