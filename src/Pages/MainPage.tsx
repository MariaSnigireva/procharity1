import React, { useState } from 'react';
import { Layout } from '../../containers/Layout/Layout';
import { Section } from '../../containers/Section/Section';
import { Modal } from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { Button } from '../../components/Action/Action'; 

const MainPage: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginSubmit = (email: string, password: string) => {
    console.log('Login:', { email, password });
    setLoginModalOpen(false); 
  };

  const handleRegisterSubmit = (name: string, email: string, password: string, confirmPassword: string) => {
    console.log('Register:', { name, email, password, confirmPassword });
    setRegisterModalOpen(false); 
  };

  return (
    <Layout>
      <Section>
        <Button label="Login" onClick={() => setLoginModalOpen(true)} />
        <Button label="Register" onClick={() => setRegisterModalOpen(true)} />

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

