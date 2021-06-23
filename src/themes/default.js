import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: green[600],
    },
  },
});
