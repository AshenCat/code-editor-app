import React from 'react'
import { makeStyles } from '@material-ui/core'
import SignOut from '../../../auth/SignOut';
import OpenWorkspace from '../../CodeEditor/OpenWorkspace/OpenWorkspace';

const AuthenticatedButtons = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <OpenWorkspace></OpenWorkspace>
            <SignOut />
        </div>
    )
}

const useStyles = makeStyles(()=>({
    root: {
        display: 'flex',
    }
}))

export default AuthenticatedButtons
