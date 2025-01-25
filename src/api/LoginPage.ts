export interface LoginData {
	message: string;
}

export const loginRequest = (): Promise<LoginData> => {
	return Promise.resolve({
		message: 'Login data',
	});
};