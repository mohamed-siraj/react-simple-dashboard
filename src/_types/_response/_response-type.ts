export type TLoginSuccessResponse = {
    token: string;
};

export type TRegisterSuccessResponse = {
    token: string;
    id: string;
};

export type TLoginErrorResponse = {
    error: string;
};