import styled, { css } from "styled-components";
import { Container, Typography, Button, Box } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme();

const { error, grey, common, text } = theme.palette;
const { typography } = theme;

export const MyContainer = styled(Container).attrs(
  ({ maxWidth, alignItems }) => ({
    maxWidth: maxWidth ? maxWidth : "xl",
    alignItems: alignItems ? alignItems : "",
  })
)`
  ${() => css`
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
  `},
`;

export const Title = styled(Typography)`
  color: ${({ color }) => (color ? color : common.white)};
`;

export const WarningButton = styled(Button)`
  color: ${text.primary};
  background-color: ${error.main};
  &&:hover {
    background-color: ${error.light};
  }
`;

export const TestBox = styled(Box)`
  @media (max-width: ${theme.breakpoints.values.md}) {
    background-color: red;
  }
`;
