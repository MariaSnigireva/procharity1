import React, { useState } from 'react';
import { Layout } from '../Containers/Layout/Layout';
import { Section } from '../Containers/Section/Section';
import { Modal } from '../Containers/Modal/Modal';
import LoginForm from '../Screens/LoginForm';
import RegisterForm from '../Screens/RegisterForm';
import { Button } from '../Components/Action/Action'; 

const MainPage: React.FC = () => {
	const [isLoginModalOpen, setLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
	const [error, setError] = useState('');

	const handleLoginSubmit = async (email: string, password: string) => {
		console.log('Login:', { email, password });
		setLoginModalOpen(false); 
	};

	const handleRegisterSubmit = async (name: string, email: string, password: string, confirmPassword: string) => {
		console.log('Register:', { name, email, password, confirmPassword });
		setRegisterModalOpen(false); 
	};

	return (
		<Layout>
			<Section>
				<Button onClick={() => setLoginModalOpen(true)}>Login</Button>
				<Button onClick={() => setRegisterModalOpen(true)}>Register</Button>

				{error && <div role="alert" style={{ color: 'red' }}>{error}</div>}

				{isLoginModalOpen && (
					<Modal onClose={() => setLoginModalOpen(false)}>
						<LoginForm onSubmit={handleLoginSubmit} />
					</Modal>
				)}

				{isRegisterModalOpen && (
					<Modal onClose={() => setRegisterModalOpen(false)}>
						<RegisterForm onSubmit={handleRegisterSubmit} />
					</Modal>
				)}
			</Section>
		</Layout>
	);
};

export default MainPage;