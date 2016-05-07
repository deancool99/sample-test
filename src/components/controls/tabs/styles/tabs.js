import CustomStyle from 'Styles/material-ui-custom';
const {
  primary1Color,
  disabledColor
} = CustomStyle.palette,
{
  tabFocusColor
} = CustomStyle.custom;
const styles = {
  tab:{
    color: '#333',
    fontSize:'16px',
    fontWeight:'400',
    backgroundColor:primary1Color,
    borderRadius:'2px 2px 0px 0px',
    margin:'0px',
    padding: '0px 15px 0px 15px',
    lineHeight:'30px',
    textTransform: 'none'
  },
  tabFocus:{
    color: '#333',
    fontSize:'16px',
    fontWeight:'400',
    backgroundColor:tabFocusColor,
    borderRadius:'2px 2px 0px 0px',
    margin:'0px',
    padding: '0px 15px 0px 15px',
    lineHeight:'30px',
    textTransform: 'none'
  },
  disabled: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize:'16px',
    fontWeight:'400',
    backgroundColor:disabledColor,
    borderRadius:'2px 2px 0px 0px',
    margin:'0px',
    padding: '0px 15px 0px 15px',
    lineHeight:'30px',
    textTransform: 'none'
  }
};
export default styles;
