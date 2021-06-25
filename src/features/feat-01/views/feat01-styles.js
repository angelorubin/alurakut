import styled, { css } from "styled-components";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@material-ui/core";

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

export const Button = styled(MuiButton).attrs(({}) => ({}))``;

export const Typography = styled(MuiTypography)``;
