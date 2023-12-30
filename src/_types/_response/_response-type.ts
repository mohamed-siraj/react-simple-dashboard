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

/**
 * @description user list type
 */

export type UserData = Array<{
    id : number;
    email : string;
    first_name : string;
    last_name : string;
    avatar : string;
}>

export type TUserListResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages : number;
    data : UserData
}