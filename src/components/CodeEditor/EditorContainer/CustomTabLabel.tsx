import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React, { MouseEvent} from 'react'
import { useAppDispatch } from '../../../state/hooks';
import UserFile from '../../../types/UserFile'
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import closeFile from '../../../state/thunks/closeFile/closeFile';

interface Props {
    activeFile: UserFile;
}

function CustomTabLabel(props: Props) {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const {activeFile: {id: fileId, name: fileName, extension}} = props;
    const onClose = (event: MouseEvent) => {
        event.stopPropagation()
        dispatch(closeFile(fileId))
    };
    return (
        <div className={classes.root}>
            <ExtensionIcon extension={extension} />
            <div className={classes.fileName}>{fileName}</div>
            <CloseIcon className={classes.closeIcon} onClick={onClose} />
        </div>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
    },
    fileName: {
        padding: '0x 5px',
        color: theme.font,
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        color: theme.font
    }
}))

export default CustomTabLabel
