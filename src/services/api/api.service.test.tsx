import ApiService from './Api.service';
import { TLoginRequest } from '../../_types/_request/_login.request-type';

describe('api service test', () => {

    test('login api testing - POST METHOD', async () => {

        //create payload
        const payload : TLoginRequest = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        };
        
        //mock response format
        const mockResponse = { token: 'QpwL5tke4Pnpja7X4' };

        //api calling
        const apiService = new ApiService();
        const apiResponse = await apiService.login(payload);

        //match
        expect(mockResponse).toEqual(apiResponse);

    });

});