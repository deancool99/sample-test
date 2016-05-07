import assign from 'object-assign';
import CustomStyle from 'Styles/material-ui-custom';
const primary1Color = CustomStyle.palette.primary1Color,
  primary1FontColor = CustomStyle.custom.primary1FontColor,
  button = {
  // backgroundColor: primary1Color,
  minWidth: '70px',
  borderRadius: '3px',
  color: primary1FontColor,
  textTransform: 'none',
  height: '30px',
  lineHeight: '30px',
  fontSize: '12px',
  margin: '3px 5px',
  whiteSpace: 'nowrap'
};
const styles = {
  primary: assign({}, button, {
    backgroundColor: primary1Color,
    color: primary1FontColor
  }),
  secondary: assign({}, button, {
    backgroundColor: '#FAF8F8',
    color: '#737171'
  }),
  highlight: assign({}, button, {
    backgroundColor: '#D84247',
    color: primary1FontColor,
    border: '1px solid #ccc',
    margin: 0
  }),
  general: assign({}, button, {
    background: 'linear-gradient( #F8F8FC 0%, #EDEFF8 10%, #EDEFF8 90%, #F8F8FC 100%)',
    boxShadow: 'inset 0px 1px 0px #ECEDEC',
    // backgroundColor: '#F8F9FC',
    color: primary1Color,
    border: '1px solid #ccc',
    margin: 0
  }),
  disabled: assign({}, button, {
    backgroundColor: '#F8F9FC',
    color: '#656665',
    border: '1px solid #ccc',
    margin: 0
  })
};
export default styles;
