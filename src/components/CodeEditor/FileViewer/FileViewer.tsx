import { makeStyles } from '@material-ui/core'
import { Folder, FolderOpen } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import selectFileViewerData from '../../../state/selectors/selectFileViewerData/selectFileViewerData';
import openFile from '../../../state/thunks/openFile/openFile';
import FileViewerStructure from '../../../types/FileViewerStructure';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';

const Fileviewer = () => {
    const classes = useStyles();
    const FileviewerData = useAppSelector(selectFileViewerData);
    
    const dispatch = useAppDispatch();

    const onSelectNode = (node: FileViewerStructure) => {
        dispatch(openFile(node))
    };

    const renderTree = (node: FileViewerStructure) => {
        const {id: nodeId, name: nodeName, extension: nodeExtension} = node;
        return <TreeItem 
            className={classes.treeItem} 
            key={nodeId} 
            nodeId={nodeId} 
            label={nodeName} 
            onDoubleClick={()=>onSelectNode(node)}
            endIcon={<ExtensionIcon extension={nodeExtension} />}>
                {Array.isArray(node.children) ? node.children.map(node=>renderTree(node)): null}
            </TreeItem>
    }

    if (!Object.keys(FileviewerData).length) {
        return <div className={classes.emptyMessage}>No Files</div>
    }

    return (
        <TreeView className={classes.root} defaultCollapseIcon={<FolderOpen />} defaultExpandIcon={<Folder />}>
            {renderTree(FileviewerData)}
        </TreeView>
    )
}

const useStyles = makeStyles((theme) => ({
   root: {
       padding: '0px 10px 10px',
       height: '100%',
       width: '100%'    
    },
    treeItem: {
        padding: '2px',
        color: theme.font,
    },
    emptyMessage: {
        color: theme.font,
    },
}));

export default Fileviewer
