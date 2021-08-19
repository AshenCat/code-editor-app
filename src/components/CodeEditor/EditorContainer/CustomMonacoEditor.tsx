import Editor from '@monaco-editor/react';
import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react'
import supportedExtensions from '../../../constants/supportedExtension';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { updateFileCode } from '../../../state/reducers/files/reducer';
import UserFile from '../../../types/UserFile';
import Loading from '../../common/Loading';

interface Props {
    activeFile: UserFile;
}

function CustomMonacoEditor(props: Props) {
    const {activeFile: {id: fileId, extension, code: originalCode}} = props;
    const dispatch = useAppDispatch();
    const [code, setCode] = useState(originalCode);
    const darkMode = useAppSelector(state=>state.darkMode);
    const language = supportedExtensions[extension];

    const debouncedSave = useCallback(
        debounce((fileId: string, newCode: string) => {
            dispatch(updateFileCode({fileId, newCode}));
        }, 1000),
        []
    );

    const onChange = (newCode = '') => {
        setCode(newCode);
        debouncedSave(fileId, newCode);
    }

    return (
        <Editor width="100%" height="100%" language={language} theme={darkMode? 'vs-dark' : 'vs-light'} value={code} loading={<Loading />} onChange={onChange}/>
    )
}

export default CustomMonacoEditor
