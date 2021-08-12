import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserFile from "../../../types/UserFile";

export interface FileState {
    userFiles: UserFile[];
    activeFiles: string[];
    editorActiveFile: string | null;
}

export const initialState: FileState = {
    userFiles: [],
    activeFiles: [],
    editorActiveFile: null
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setFiles(state, action:PayloadAction<UserFile[]>) {
            state.userFiles = action.payload;
            state.activeFiles = [];
        },
        addActiveFile(state, action: PayloadAction<string>) {
            state.activeFiles.push(action.payload);
        },
        removeActiveFile(state, action: PayloadAction<string>) {
            state.activeFiles = state.activeFiles.filter(field => field !== action.payload)
        },
        updateFileCode(state, action: PayloadAction<{fileId: string; newCode: string}>) {
            const {fileId, newCode} = action.payload;
            const userFiles = state.userFiles;
            //originally let
            const userFile = userFiles.find(file=>file.id === fileId);
            if(userFile) {
                userFile.code = newCode;
            }
        },
        setEditorActiveFile(state, action: PayloadAction<string | null>) {
            state.editorActiveFile = action.payload;
        }
    },
})

export const { setFiles, addActiveFile, removeActiveFile, updateFileCode, setEditorActiveFile} = filesSlice.actions;
const filesReducer = filesSlice.reducer;
export default filesReducer