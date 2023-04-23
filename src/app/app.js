import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../component/pages/slices/postSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
    },
});

export default store;






