import { styled } from "@material-ui/system";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const Link = styled(ReactRouterDomLink)`
	text-decoration: none;
`;

/**
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
*/
