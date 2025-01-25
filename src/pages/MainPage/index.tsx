import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form, LoaderFunctionArgs, useLoaderData } from 'react-router';

// Определяем ленивую загрузку компонента MainPage
const LazyMainPage = lazy(() =>
	import('./MainPage').then(module => ({
		default: module.MainPage
	}))
);

const MainPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
	const data = useLoaderData<loaderResponse>(); // Получаем данные с помощью useLoaderData
	return ( // Передаем данные и пропсы в ленивый компонент
		<Suspense fallback={<p>Loading...</p>}>
			<LazyMainPage data={data} {...props} formSettings={{ Tag: Form }} /> 
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return Promise.resolve({ result: 'OK' }); // Возвращаем данные, которые будут загружены
}

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData(); // Извлекаем данные формы из запроса
	const payload = Object.fromEntries(data.entries()) as object; // Преобразуем данные формы в объект
	console.log(payload);
	return null;
}

// Определяем тип для данных, возвращаемых функцией loader
export type loaderResponse = Awaited<ReturnType<typeof loader>>;

// Экспортируем объект по умолчанию, содержащий loader, action и элемент
export default {
	loader,
	action,
	element: <MainPage />
};