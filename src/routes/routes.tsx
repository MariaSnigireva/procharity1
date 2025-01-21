import MainPage from '@/Pages/MainPage';
import LoginPage from '@/Pages/LoginPage';
import RegisterPage from '@/Pages/RegisterPage';

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/login', element: <LoginPage data={null} error={null} onSubmit={function (email: string, password: string): void {
		throw new Error('Function not implemented.');
	} } /> }
];