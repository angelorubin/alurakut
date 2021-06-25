import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { grey, red, blue, green } from "@material-ui/core/colors";

let theme = createMuiTheme({
  breakpoints: {
    keys: {
      0: "xs",
      1: "sm",
      2: "md",
      3: "lg",
      4: "xl",
    },
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: blue[200],
      main: blue[500],
      dark: blue[700],
      contrastText: "#fff",
    },
    secondary: {
      light: green[300],
      main: green[600],
      dark: green[900],
      contrastText: "#000",
    },
    warning: {
      main: red[500],
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
