import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form } from 'react-router';

const LazyRegisterPage = lazy(() => // Определяем ленивую загрузку компонента RegisterPage
	import('./RegisterPage').then(module => ({
		default: module.RegisterPage
	}))
);

const RegisterPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => { // Определяем компонент RegisterPage, который использует ленивую загрузку
	return (
    // Пока LazyRegisterPage загружается, ничего не отображаем
		<Suspense fallback={null}> 
			<LazyRegisterPage {...props} formSettings={{ Tag: Form }} />
		</Suspense>
	);
};

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object; // Преобразуем данные формы в объект
	console.log(payload);
	return null;
}

export default {
	action,
	element: <RegisterPage /> // Компонент, который будет отображаться при активации маршрута
};