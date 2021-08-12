import { createSelector } from "@reduxjs/toolkit";
import { FileState } from "../../reducers/files/reducer";
import { RootState } from "../../store";

const selectActiveFiles = (files: FileState) => {
    const {userFiles, activeFiles} = files;
    return userFiles.filter(file=>activeFiles.includes(file.id));
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);