import { configureStore } from "@reduxjs/toolkit";
import image from "./image/index"

export const store = configureStore({
    reducer: {
        img: image,
    }
})