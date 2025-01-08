
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';




const initialState = {
    isAuth : false ,
    isLoading : false,
    isServerLoading : false,
    user :null,
    otpLoading : false
}


export const reg = createAsyncThunk(
    'auth/reg',
    
    async (formDate) => {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}auth/reg`,
            formDate ,
             {
                withCredentials : true,
             }
        )
        return response.data ;
    }
)

export const getOtpForReg = createAsyncThunk(
    'auth/getOtpForReg',
    
    async (email) => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}auth/getOtp/${email}`,
        )
        return response.data ;
    }
)

export const getOtpForRec = createAsyncThunk(
  'auth/getOtpForRec',
  
  async (email) => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}rec/otp/${email}`,
      )
      return response.data ;
  }
)

export const login = createAsyncThunk(
  'auth/login',
  
  async (formDate) => {
      const response = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/login`,
          formDate ,
           {
              withCredentials : true,
           }
      )
      return response.data ;
  }
)

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}auth/checkauth`,
      {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
    // console.log("response?.data",response?.data)a
    return response.data;
  }
);


export const verifyOtp = createAsyncThunk(
  "auth/verifuOtp",

  async(formData) => {
    const response = await axios.post(
  `${import.meta.env.VITE_API_URL}rec/otpVerify`,
      formData
    )
    return response.data ;
  }


)



export const resetPassword = createAsyncThunk(
  "auth/resetPassword",

  async(newPasswordFormData) => {
    const response = await axios.post(
  `${import.meta.env.VITE_API_URL}rec/newPass`,
  newPasswordFormData 
    )
    return response.data ;
  }
)


export const logoutUser = createAsyncThunk(
  "/auth/logout", 
  async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}auth/logout`,
    {}, // Empty body
    {
      withCredentials: true, // Include credentials for cross-origin
    }
  );
  console.log(response.data);
  return response.data;
});







const authSlice = createSlice({
    name : "authSlice",
    initialState ,
    reducers : {},
    extraReducers : (builder) => {
        builder

        



        .addCase(checkAuth.pending, (state) => {
          state.isLoading = true;
          state.isServerLoading  = true
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.success ? action.payload.user : null;
          state.isAuth = action.payload.success;
          state.isServerLoading  = false
        })
        

        .addCase(login.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            (state.isLoading = false),
            (state.isAuth = action.payload.success),
            (state.user = action.payload.success ? action.payload.user : null);
          })
          .addCase(login.rejected, (state) => {
            state.isLoading = false;
          })

          .addCase(reg.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(reg.fulfilled, (state, action) => {
            (state.isLoading = false),
            (state.isAuth = action.payload.success),
            (state.user = action.payload.success ? action.payload.user : null);
          })
          .addCase(reg.rejected, (state) => {
            state.isLoading = false;
          })



          .addCase(getOtpForReg.pending, (state) => {
            state.otpLoading = true;
          })
          .addCase(getOtpForReg.fulfilled, (state) => {
            (state.otpLoading = false)
          })
          .addCase(getOtpForReg.rejected, (state) => {
            state.otpLoading = false;
          })

          

          .addCase(getOtpForRec.pending, (state) => {
            state.otpLoading = true;
          })
          .addCase(getOtpForRec.fulfilled, (state) => {
            (state.otpLoading = false)
          })
          .addCase(getOtpForRec.rejected, (state) => {
            state.otpLoading = false;
          })


          .addCase(verifyOtp.pending, (state) => {
            state.otpLoading = true;
          })
          .addCase(verifyOtp.fulfilled, (state) => {
            (state.otpLoading = false)
          })
          .addCase(verifyOtp.rejected, (state) => {
            state.otpLoading = false;
          })

          .addCase(resetPassword.pending, (state) => {
            state.otpLoading = true;
          })
          .addCase(resetPassword.fulfilled, (state) => {
            (state.otpLoading = false)
          })
          .addCase(resetPassword.rejected, (state) => {
            state.otpLoading = false;
          })


          .addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isAuth = false;
          });

    }
})



export default authSlice.reducer