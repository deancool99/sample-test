import CustomStyle from 'Styles/material-ui-custom'; 
const styles = {
  header: {
    backgroundColor: '#E1E1E1',
    paddingRight: '18px'
  },
  headerItem: {
    height: '30px',
    color: CustomStyle.palette.primary1Color,
    fontWeight: 'bold',
    borderLeft: '1px solid ' + CustomStyle.custom.borderColor,
    borderRight: '1px solid ' + CustomStyle.custom.borderColor
  },
  columnItem: {
    height: '26px',
    color: '#7E7C7D',
    borderLeft: '1px solid ' + CustomStyle.custom.borderColor,
    borderRight: '1px solid ' + CustomStyle.custom.borderColor
  },
  arrow: {
    color: CustomStyle.palette.primary1Color
  }
};
export default styles;
