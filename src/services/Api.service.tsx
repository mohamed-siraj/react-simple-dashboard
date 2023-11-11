import axios, { AxiosInstance } from "axios";
import { TLoginRequest } from "../_types/_login.type";

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
        return await this.instance.post(`/login`, login);
    }

}

export default ApiService;