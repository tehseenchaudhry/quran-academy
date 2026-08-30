 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 export const authApi = createApi({
    reducerPath:"authApi",
    
    baseQuery:  fetchBaseQuery({
        baseUrl:"http://localhost:4000/api/v1/user",
        credentials: "include"
    }),

    endpoints: (builder)=>({
        signUp: builder.mutation({
            query: (credentials)=>({
                url:"/signup",
                method:"POST",
                body: credentials
            })
        }),

        logIn: builder.mutation({
            query:(credentials)=>({
                url:"/login",
                method:"POST",
                body:credentials
            })
        })
    })
 })

 export const {useSignUpMutation, useLogInMutation} = authApi