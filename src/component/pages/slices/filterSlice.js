import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fetchPost } from '../pages/slices/postSlice';




const filterSlice = createSlice({
    name: "filter",
    initialState: {
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
    }
    reducers: {

    }
})











