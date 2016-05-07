import CustomStyle from ('Styles/material-ui-custom'); 
const styles = {
  header: {
    backgroundColor: CustomStyle.palette.primary1Color,
    color: CustomStyle.custom.primary1FontColor,
    height: '36px',
    padding: '5px 10px',
    fontSize: '16px',
    position: 'absolute',
    top: 0
  },
  headerIcon: {borderRight: '1px solid #FFFFFF', margin: '-3px 5px 0px -5px', height: '30px', paddingRight: '5px'},
  body: {
    padding: '5px',
    margin: '5px'
  }
};

export default styles;
