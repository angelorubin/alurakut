import React from "react";
import * as S from "./styles";

export const Container = (props) => {
  return <S.Container {...props}>{props.children}</S.Container>;
};
