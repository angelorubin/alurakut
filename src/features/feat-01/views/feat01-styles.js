import styled, { css } from "styled-components";
import {
  Container as MuiContainer,
  Typography as MuiTypography,
} from "@material-ui/core";

export const Container = styled(MuiContainer).attrs(({ maxWidth }) => ({
  maxWidth: maxWidth ? maxWidth : "xs",
}))`
  ${() => css`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Title = styled(MuiTypography).attrs(({ color }) => ({
  color: color ? color.toString() : "#000",
}))`
  color: ${({ color }) => (color ? color : "error")};
  font-size: 2rem;
`;
