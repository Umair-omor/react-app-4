import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk("posts/fetchPost", async() => {
    const res = await axios.get("https://api.pujakaitem.com/api/products");
    return res.data
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        products: [],
        error: null,
        featureProducts: [], //=========
        filter_products: [],
        all_products: [],
        grid_view: true,
        sorting_value: "lowest",
        filters: {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;

            const fe = action.payload.filter(cu => cu.featured === true);
            state.featureProducts = fe;
            // state.featureProducts = action.payload.filter(cu => cu.featured === true);

        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error.message;
        });
    },
    reducers: {
        listView: state => {
            state.grid_view = false;
        },
        gridView: state => {
            state.grid_view = true;
        },
        currentsortvalue: (state, action) => {
            state.sorting_value = action.payload
        },
        sortingproductStor: (state, action) => {
            // state.products = action.payload;
            // state.products = action.payload;
            state.filter_products = action.payload;
        },

    }
});

export const {listView, gridView, currentsortvalue, sortingproductStor} = postSlice.actions;
export default postSlice.reducer;



// {
//     return curEle.featured === true;
// }























