import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form } from 'react-router';

// Определяем ленивую загрузку компонента LoginPage
const LazyLoginPage = lazy(() =>
	import('./LoginPage').then(module => ({
		default: module.LoginPage
	}))
);

// Определяем компонент LoginPage, который использует ленивую загрузку
const LoginPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
	return ( // Передаем все пропсы и настройки форм в ленивый компонент
		<Suspense fallback={null}>
			<LazyLoginPage {...props} formSettings={{ Tag: Form }} />
		</Suspense>
	);
};

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData(); // Извлекаем данные формы из запроса
	const payload = Object.fromEntries(data.entries()) as object; // Преобразуем данные формы в объект
	console.log(payload);
	return null;
}

// Экспортируем объект по умолчанию, содержащий action и элемент
export default {
	action,
	element: <LoginPage />
};