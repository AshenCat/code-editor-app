import React from 'react'
import CSSIcon from '../../../assets/images/css3-original.svg';
import GoIcon from '../../../assets/images/go-original.svg';
import HtmlIcon from '../../../assets/images/html5-original.svg';
import JavaIcon from '../../../assets/images/java-original.svg';
import JavascriptIcon from '../../../assets/images/javascript-original.svg';
import PHPIcon from '../../../assets/images/php-original.svg';
import PythonIcon from '../../../assets/images/python-original.svg';
import RubyIcon from '../../../assets/images/ruby-original.svg';
import TypescriptIcon from '../../../assets/images/typescript-original.svg';
import ReactIcon from '../../../assets/images/react-original.svg';
import DefaultIcon from '../../../assets/images/blank-file.svg';
import { makeStyles } from '@material-ui/core';

interface Props {
    extension?: string
}

const ExtensionIcon = (props: Props) => {
    const classes = useStyles();
    switch (props.extension) {
        case 'tsx':
        case 'jsx':
            return <div className={classes.icon}><ReactIcon /></div>
        case 'ts':
            return <div className={classes.icon}><TypescriptIcon /></div>
        case 'js':
            return <div className={classes.icon}><JavascriptIcon /></div>
        case 'css':
            return <div className={classes.icon}><CSSIcon /></div>
        case 'php':
            return <div className={classes.icon}><PHPIcon /></div>
        case 'java':
            return <div className={classes.icon}><JavaIcon /></div>
        case 'html':
            return <div className={classes.icon}><HtmlIcon /></div>
        case 'rb':
            return <div className={classes.icon}><RubyIcon /></div>
        case 'go':
            return <div className={classes.icon}><GoIcon /></div>
        case 'py':
            return <div className={classes.icon}><PythonIcon /></div>
        default:
            return <div className={classes.icon}><DefaultIcon /></div>
    }
}

const useStyles = makeStyles(() => ({
    icon: {
      height: '15px',
      width: '15px',
    }
  }));

export default ExtensionIcon
