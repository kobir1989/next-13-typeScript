export type ErrorResponseType = {
	message: string;
};

export const errorResponse = (message: string): ErrorResponseType => ({
	message,
});
