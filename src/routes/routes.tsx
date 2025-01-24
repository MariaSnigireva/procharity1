import main from '@/pages/MainPage/MainPage';
import login from '@/pages/LoginPage/LoginPage';
import register from '@/pages/RegisterPage/RegisterPage';

export const routes = [
	{ index: true, ...main },
	{ path: '/login', ...login },
	{ path: '/register', ...register }
];