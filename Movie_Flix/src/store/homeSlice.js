import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genre:{}
  },
  reducers: {
    getApiConfig: (state, action) => {
        state.url = action.payload;
    },
    getGenres: (state, action) => {
        state.genre = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfig, getGenres } = homeSlice.actions

export default homeSlice.reducer