import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUserListResponse } from '../../../../_types/_response/_response-type';
import ApiService from '../../../api/Api.service';

/**
 * api call
 */
export const fetchUser = createAsyncThunk('fetchUser', async (payload : {page : number}) => {
    const apiService = new ApiService();
    const response = await apiService.userList(payload.page);
    return response;
  });
  

/**
 * state type define
 */
type TInitialState = {
    userList: TUserListResponse;
    loading : boolean;
}

/**
 * initialState define
 */
const initialState: TInitialState = {
    userList: {
        page: 1,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data: []
    },
    loading : false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action : PayloadAction<TUserListResponse | undefined>) => {
            state.loading = false;
            if(action.payload?.data){
                state.userList.data = [...state.userList.data, ...action.payload?.data];
                state.userList.page = action.payload?.page + 1 || 0;
                state.userList.per_page = action.payload?.per_page || 0;
                state.userList.total = action.payload?.total || 0;
                state.userList.total_pages = action.payload?.total_pages || 0;
            }
        })
        .addCase(fetchUser.rejected, (state) => {
            state.loading = false;
        });
    }
});


export default userSlice.reducer;