export interface MainPageData {
	message: string;
}

export const mainPageData = (): Promise<MainPageData> => {
	return Promise.resolve({
		message: 'Main data',
	});
};