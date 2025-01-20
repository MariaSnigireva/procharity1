export interface RegistrationData {
	message: string;
}

export const registrationRequest = (): Promise<RegistrationData> => {
	return Promise.resolve({
		message: 'Registration data',
	});
};