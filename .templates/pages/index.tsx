import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyTemplateName = lazy(() =>
	import('./TemplateName').then(module => ({
		default: module.TemplateName
	}))
);

const TemplateName = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyTemplateName {...props} />
		</Suspense>
	)
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return null; // тут будет вызов к апи исходя из данных запроса
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <TemplateName />
};
