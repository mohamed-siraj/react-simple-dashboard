import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { TLoginRequest, TRegisterRequest } from "../../_types/_request/_request-type";
import { toast } from 'react-toastify';
import { TLoginErrorResponse, TLoginSuccessResponse, TRegisterSuccessResponse, TUserListResponse } from "../../_types/_response/_response-type";
class ApiService {

    private INSTANCE: AxiosInstance;
    public BASE_URL = 'https://reqres.in/api';

    constructor() {
        //create axios instance
        this.INSTANCE = axios.create({
            baseURL: this.BASE_URL
        });
    }

    /**
    * @description login request send to API
    * @param login 
    * @returns {AxiosResponse<TLoginSuccessResponse> }
    */
    async login(login: TLoginRequest) {

        try {

            const response: AxiosResponse<TLoginSuccessResponse> = await this.INSTANCE.post(`/login`, login);
            return response;

        } catch (errors: any) {

            /**
             * error handling
             */
            const ERROR: AxiosError<TLoginErrorResponse> = errors;
            toast.error(`${ERROR.response?.data.error}`);
        }

    }

    /**
     * @description register request 
     * @param register 
     * @returns {AxiosResponse<TRegisterSuccessResponse>}
     */
    async register(register: TRegisterRequest) {
        try {

            const response: AxiosResponse<TRegisterSuccessResponse> = await this.INSTANCE.post(`/register`, register);
            return response;

        } catch (errors: any) {
            /**
             * error handling
             */
            const ERROR: AxiosError<TLoginErrorResponse> = errors;
            toast.error(`${ERROR.response?.data.error}`);
        }
    }

    async userList(page: number) {
        try {

            const response : AxiosResponse<TUserListResponse> = await this.INSTANCE.get(`users?page=${page}`)
            return response.data;

        } catch (errors : any) {
            /**
             * error handling
             */
            const ERROR: AxiosError<TLoginErrorResponse> = errors;
            toast.error(`${ERROR.response?.data.error}`);
        }
    }


};

export default ApiService;