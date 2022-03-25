import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';

export  const theme = createTheme({
  palettel: {
    primary: red,
    secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
  },
  myCustom:{
      color:'green',
      backgroundColor:'red'
  }
});