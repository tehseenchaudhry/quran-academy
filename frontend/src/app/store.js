import {configureStore} from "@reduxjs/toolkit"
import {authApi} from "./api/userApi"

export const Store = configureStore({
    reducer : {
        [authApi.reducerPath] : authApi.reducer,
    },

     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware]),

})