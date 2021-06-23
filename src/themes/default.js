import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue, green } from "@material-ui/core/colors";

export const theme = createMuiTheme({
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
      main: blue[600],
    },
    secondary: {
      main: green[600],
    },
    warning: {
      main: red[500],
    },
  },
});
