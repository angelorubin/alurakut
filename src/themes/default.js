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
    type: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[900],
      contrastText: "#fff",
    },
    secondary: {
      light: green[300],
      main: green[600],
      dark: green[900],
      contrastText: "#000",
    },
    error: {
      light: red[300],
      main: red[600],
      dark: red[900],
      contrastText: "#000",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
      contrastThreshold: 3,
      getContrastText: "",
      augmentColor: "",
      tonalOffset: 0.2,
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
