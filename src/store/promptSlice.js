import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState = {
    loadingPostPromptRequest : false,
    promptResponse : null,
    allPromptListByUser : null,
    allPromptListByUserLoading : false
}


export const authPromptAskRequest = createAsyncThunk(
    'auth/promptAskRequest',

    async(formData)=> {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}ai/auth`,
            formData,
        )
        return response.data;
    }
)


export const authPromptListByUser = createAsyncThunk(
    'auth/promptListByUser',

    async(userId)=> {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}ai/getPrompts/${userId}`,
        )

        // console.log(response.data)
        return response.data;
    }
)




const promptSlice = createSlice({
    name : "promptSlice",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder

            .addCase(authPromptAskRequest.pending, (state) => {
            state.loadingPostPromptRequest = true;
            })
            .addCase(authPromptAskRequest.fulfilled, (state, action) => {
                (state.loadingPostPromptRequest = false),
                (state.promptResponse = action.payload.success ? action.payload.response : null);
            })
            .addCase(authPromptAskRequest.rejected, (state) => {
                state.loadingPostPromptRequest = false;
            })

            .addCase(authPromptListByUser.pending, (state) => {
                state.allPromptListByUserLoading = true;
                })
                .addCase(authPromptListByUser.fulfilled, (state, action) => {
                    (state.allPromptListByUserLoading = false),
                    (state.allPromptListByUser = action.payload.success ? action.payload.prompts : null);
                })
                .addCase(authPromptListByUser.rejected, (state) => {
                    state.allPromptListByUserLoading = false;
                })
    }

})

export default promptSlice.reducer;