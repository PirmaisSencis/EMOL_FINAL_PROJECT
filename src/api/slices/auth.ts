import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { access } from "fs";
interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
    token: localStorage.getItem('token') || null,
};
const API_URL =  "http://localhost:3000/api/v1/";
const SLICE_URl = "auth";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData: {name:string, email: string; password: string }, { rejectWithValue }) => {
        try {
            const response:any = await axios.post(`${API_URL}${SLICE_URl}/register`, userData);
            localStorage.setItem('token', response.data.access_token);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async (userData: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response:any = await axios.post(`${API_URL}${SLICE_URl}/login`, userData);
            localStorage.setItem('token', response.data.access_token);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
})
export default authSlice.reducer;



