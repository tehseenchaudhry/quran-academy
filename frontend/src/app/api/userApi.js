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


        otpVerify: builder.mutation({
             query:(credentials)=>({
                url:"/verify-otp",
                method:"POST",
                body: credentials
             })
        }),

        otpResend: builder.mutation({
             query:(credentials)=>({
                url:"/resend-otp",
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
        }),

        logOut: builder.mutation({
             query:()=>({
                url:"/logout",
                method:"POST",
              
             })
        }),
        myProfile: builder.query({
             query:()=>({
                url:"/user-profile",
                method:"GET",
             })
        }),
         updateProfile: builder.mutation({
             query:(credentials)=>({
                url:"/user-profile",
                method:"PUT",
                body:credentials
             })
        }),


    })
 })

 export const {useSignUpMutation, useOtpVerifyMutation, useOtpResendMutation, useLogInMutation, useLogOutMutation, useMyProfileQuery,
    useUpdateProfileMutation
 } = authApi;