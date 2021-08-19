import { makeStyles } from '@material-ui/core'
import React from 'react'
import EditorContainer from '../../components/CodeEditor/EditorContainer/EditorContainer'
import Fileviewer from '../../components/CodeEditor/FileViewer/FileViewer'

const CodeEditor = () => {
    const classes = useStyles()
    return <div className={classes.root}>
        <div className={classes.FileViewer}>
            <Fileviewer />
        </div>
        <div className={classes.codeEditorContainer}><EditorContainer /></div>
    </div>
}

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    FileViewer: {
        display: 'flex',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid black',
        maxWidth: '300px',
        overflow: 'auto'
    },
    codeEditorContainer: {
        flex: 3,
        height: '100%'
    }
}))

export default CodeEditor
