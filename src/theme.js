// src/theme.js
import { createTheme } from '@mui/material/styles'; // Instead of '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Change the primary color
    },
    secondary: {
      main: '#ff9100', // Change the secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change the font family
  },
});

export default theme;
