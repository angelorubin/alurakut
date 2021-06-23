import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  height: 20vh;
`;

export const Title = styled.h1`
  color: ${({ color }) => (color ? color : "")};
  font-size: 2rem;
`;
