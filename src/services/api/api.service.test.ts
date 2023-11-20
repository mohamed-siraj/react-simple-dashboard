import ApiService from './Api.service';
import { TLoginRequest } from '../../_types/_request/_login.request-type';

describe('Login api testing', () => {

    test('check success response - POST METHOD', async () => {

        //create payload
        const payload: TLoginRequest = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        };

        //api calling
        const apiService = new ApiService();
        const apiResponse = await apiService.login(payload);

        //match
        expect(apiResponse?.status).toEqual(200);

    });

    test('check error response - POST METHOD', async () => {

        //create payload
        const payload: TLoginRequest = {
            email: 'eve.holt@reqres.inwrong',
            password: 'cityslickawrong'
        };

        //api calling
        const apiService = new ApiService();
        await apiService.login(payload);

    });

});