import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import authSlice from "./authSlice"
import favoritesSlice from "./favoritesSlice"
import themeSlice from "./themeSlice"

export const store=configureStore({
    reducer:{
        cart:cartSlice,
        auth:authSlice,
        favorites:favoritesSlice,
        theme:themeSlice
    }
})