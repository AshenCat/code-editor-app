import { createSlice } from "@reduxjs/toolkit";

export const initialState = false;

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        // reducer
        toggleDarkMode(state) {
            return !state;
        }
    }
});

// action
export const { toggleDarkMode } = darkModeSlice.actions

const darkModeReducer = darkModeSlice.reducer

export default darkModeReducer;