import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/login', element: <LoginPage data={null} error={null} onSubmit={function (email: string, password: string): void {
		throw new Error('Function not implemented.');
	} } /> }
];