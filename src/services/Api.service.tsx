import axios, { AxiosInstance } from "axios";
import { TLoginRequest } from "../_types/_request/_login.request-type";
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from "axios";
import { TLoginErrorResponse, TLoginSuccessResponse } from "../_types/_response/_login.response-type";
class ApiService {

    private instance: AxiosInstance;

    constructor() {
        //create axios instance
        this.instance = axios.create({
            baseURL: 'https://reqres.in/api'
        });
    }

    /**
    * @description login request send to API
    * @param login 
    */
    async login(login: TLoginRequest) {

        try {

            const response: AxiosResponse<TLoginSuccessResponse> = await this.instance.post(`/login`, login);
            return response.data;

        } catch (errors: any) {

            /**
             * error handling
             */
            const ERROR: AxiosError<TLoginErrorResponse> = errors;

            // response api
            if(ERROR.response?.data?.error){
                toast.error(`${ERROR.response?.data.error}`);
            }else{
                // response axios
                toast.error(`${ERROR.message}`);
            }
        }

    }

};

export default ApiService;