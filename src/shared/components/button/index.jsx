import React from "react";
import * as S from "./styles";

export const Button = (props) => {
  return <S.BaseButton {...props}>{props.children}</S.BaseButton>;
};
