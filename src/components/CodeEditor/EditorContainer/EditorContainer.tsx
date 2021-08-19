import React, { ChangeEvent } from 'react'
import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import selectActiveFiles from '../../../state/selectors/selectActiveFiles/selectActiveFiles';
import CustomTabPanel from './CustomTabPanel';
import { setEditorActiveFile } from '../../../state/reducers/files/reducer';
import CustomTabLabel from './CustomTabLabel';

function EditorContainer() {
    const classes = useStyles();
    const activeFiles = useAppSelector(selectActiveFiles);
    const editorActiveFile = useAppSelector(state=>state.files.editorActiveFile)
    const activeFilesIds = useAppSelector(state=>state.files.activeFiles)
    const dispatch = useAppDispatch();

    if(!activeFiles.length) {
        return <div className={classes.emptyMessage}>Select a file</div>
    }

    const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
        const activeFileId = activeFilesIds[tabPosition];
        if(activeFileId !== editorActiveFile) {
            dispatch(setEditorActiveFile(activeFileId));
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs 
                    textColor="primary" 
                    indicatorColor="primary" 
                    variant="scrollable" 
                    scrollButtons="auto" 
                    value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
                    onChange={onTabClick}>
                    {activeFiles.map(activeFile=><Tab key={activeFile.id} label={<CustomTabLabel activeFile={activeFile} />}/>)}
                </Tabs>
            </AppBar>
            {activeFiles.map(activeFile => <CustomTabPanel key={activeFile.id} activeFile={activeFile} editorActiveFile={editorActiveFile}/>)}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        height: '100%',
        overflow: 'hidden',
    },
    emptyMessage: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.font,
    },
}))

export default EditorContainer
