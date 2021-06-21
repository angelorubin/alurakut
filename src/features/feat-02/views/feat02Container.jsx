import React from "react";
import * as S from "./feat02Styles";
import { useSelector, useDispatch } from "react-redux";

const Feat01 = () => {
  const state = useSelector((state) => state.feat01);
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch({
      type: "feat02/addTitle",
      payload: "React Redux",
    });
  };

  return (
    <S.Container>
      <S.Title>{state.title}</S.Title>
      <h1>lorem ipsun dolor</h1>
      <button onClick={handleClick}>modificar titulo</button>
    </S.Container>
  );
};

export default Feat01;
