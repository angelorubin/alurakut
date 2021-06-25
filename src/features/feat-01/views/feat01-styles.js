import styled, { css } from "styled-components";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme();

const { error, grey } = theme.palette;

export const Container = styled(MuiContainer).attrs(
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

export const Title = styled(MuiTypography).attrs(() => ({}))`
  font-size: 1.5rem;
`;

export const Typography = styled(MuiTypography)``;

export const WarningButton = styled(Button)`
  color: ${error.contrastText};
  background-color: ${error.main};
  &&:hover {
    color: ${grey[900]};
    background-color: ${error.light};
  }
`;
