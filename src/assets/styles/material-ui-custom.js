import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';
import assign from 'object-assign';
const primary1Color = 'gray', //'#244F6F'
      primary2Color = '#498CBD',
      primary1FontColor = Colors.white,
      button = {
        backgroundColor: primary1Color,
        minWidth: '75px',
        borderRadius: '3px',
        color: primary1FontColor,
        textTransform: 'none',
        height: '24px',
        lineHeight: '24px',
        fontSize: '12px',
        margin: '3px 5px'
      };
const styles = {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Arial', //'Roboto, sans-serif',
  palette: {
    primary1Color: primary1Color,
    primary2Color: primary1Color,//Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: '#7B7878',
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: '#F2F2F8',//Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500
  },
  custom: {
    primary1FontColor: primary1FontColor,
    fontColor: '#636060',
    hintFontColor: '#949393',
    borderColor: '#CAC8C1',
    padding: '5px',
    fontSize: '10px',
    symbolUpColor: '#0684E2',
    symbolDownColor: '#EF091F',
    tabFocusColor: 'lightgray' //'#498CBD'
  },
  header1: {
    backgroundColor: primary1Color,
    color: primary1FontColor,
    height: '36px',
    padding: '5px 10px',
    fontSize: '16px'
  },
  dialogMedium: {
    backgroundColor: '#E4E5E6',
    background: '#E4E5E6',
    width: '500px'
  },
  tab:{
    fontSize:'12px',
    fontWeight:'bold',
    backgroundColor:primary1Color,
    borderRadius:'5px 5px 0px 0px',
    margin:'0px 10px 0px 0px',
    lineHeight:'30px'
  },
  button1: assign({}, button, {
    backgroundColor: primary1Color,
    color: primary1FontColor
  }),
  button2: assign({}, button, {
    backgroundColor: '#FAF8F8',
    color: '#737171'
  }),
  button3: assign({}, button, {
    backgroundColor: '#D84247',
    color: primary1FontColor,
    border: '1px solid #ccc',
    margin: 0
  }),
  button4: assign({}, button, {
    backgroundColor: '#F8F9FC',
    color: '#656665',
    border: '1px solid #ccc',
    margin: 0
  }),
  tabFocus:{
    fontSize:'12px',
    fontWeight:'bold',
    backgroundColor:primary2Color,
    borderRadius:'5px 5px 0px 0px',
    margin:'0px 10px 0px 0px',
    lineHeight:'30px'
  }
};

export default styles;
