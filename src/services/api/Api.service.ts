import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { TLoginRequest } from "../../_types/_request/_login.request-type";
import { toast } from 'react-toastify';
import { TLoginErrorResponse, TLoginSuccessResponse } from "../../_types/_response/_login.response-type";
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

};

export default ApiService;