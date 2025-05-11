import axios from "./../axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../types/types";

interface CategoryState {
    categories: Category[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: null,
};

const SLICE_URl = "categories";

export const createCategory = createAsyncThunk(
    "category/create",
    async (categoryData: { name: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`/${SLICE_URl}`, categoryData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories.push(action.payload as any);
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});

export default categorySlice.reducer;