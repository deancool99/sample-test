import assign from 'object-assign';
import CustomStyle from ('Styles/material-ui-custom'); 
const body = {
  padding: '0px 5px',
  margin: '-3px 1px 0',
  width: 'auto',
  height: '27px'
},
background = {
  border: 'solid 1px ' + CustomStyle.palette.primary1Color,
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  background: 'linear-gradient(#346087, #264C6E, #1E4160)',
  boxShadow: 'inset 0px 1px 0px #1C3F5E, 0px 1px 0px 0px #274E71'
};
const styles = {
  body: body,
  focus: assign({}, body, background, {
    background: 'linear-gradient( #0F2841 0%, #1A426D 10%, #0F2D4C 100%)',
    // boxShadow: 'inset 0px 1px 0px #0E243C, 0px 1px 0px 0px #0F2E4D, 0px 3px 1px #0E2B49'
    boxShadow: 'inset 0px 1px 0px #0E243C'
  }),
  // focus: assign({}, body, { border: 'solid 1px ' + CustomStyle.palette.primary1Color,
	// backgroundImage: 'linear-gradient(bottom, rgb(171,27,27) 0%, rgb(212,51,51) 100%)',
  // boxShadow: 'inset 0px 1px 0px #1C3F5E, 0px 1px 0px 0px #274E71, 0px 3px 1px #396085'}),
  unfocus: assign({}, body, background, {
  })
};
export default styles;
