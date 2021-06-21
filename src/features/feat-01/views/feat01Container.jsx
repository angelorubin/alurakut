import React from "react";
import * as S from "./feat01Styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Feat01 = () => {
  const { title } = useSelector((state) => state.feat01);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch({
      type: "feat01/addTitle",
      payload: "React Redux Boilerplate",
    });
  };

  return (
    <S.Container>
      <nav>
        <Link to="/feat02">feat 02</Link>
      </nav>
      <S.Title>{title}</S.Title>
      <h3>Page - Feat 01</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat
        dolor eos repellendus cumque necessitatibus quas suscipit magni eveniet
        ducimus excepturi beatae architecto tempora quod consequatur, modi
        voluptates voluptatum porro.
      </p>
      <button type="button" onClick={handleClick}>
        modificar titulo
      </button>
    </S.Container>
  );
};

export default Feat01;
