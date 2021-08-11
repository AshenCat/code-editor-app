
import CSSIcon from '../../assets/images/css3-original.svg';
import GoIcon from '../../assets/images/go-original.svg';
import HtmlIcon from '../../assets/images/html5-original.svg';
import JavaIcon from '../../assets/images/java-original.svg';
import JavascriptIcon from '../../assets/images/javascript-original.svg';
import PHPIcon from '../../assets/images/php-original.svg';
import PythonIcon from '../../assets/images/python-original.svg';
import RubyIcon from '../../assets/images/ruby-original.svg';
import TypescriptIcon from '../../assets/images/typescript-original.svg';
import ReactIcon from '../../assets/images/react-original.svg';
import { makeStyles } from '@material-ui/core/styles';

const ProgrammingLanguagesList = () => { 
const classes = useStyles();
  return (
    <div className={classes.iconHolder}>
      <div className={classes.icon}><CSSIcon /></div>
      <div className={classes.icon}><GoIcon /></div>
      <div className={classes.icon}><HtmlIcon /></div>
      <div className={classes.icon}><JavaIcon /></div>
      <div className={classes.icon}><JavascriptIcon /></div>
      <div className={classes.icon}><PHPIcon /></div>
      <div className={classes.icon}><PythonIcon /></div>
      <div className={classes.icon}><RubyIcon /></div>
      <div className={classes.icon}><TypescriptIcon /></div>
      <div className={classes.icon}><ReactIcon /></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px',
  },
  iconHolder: {
    display: 'flex'
  }
}));

export default ProgrammingLanguagesList;