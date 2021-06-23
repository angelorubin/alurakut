import React from "react";
import * as S from "./feat01-styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import * as C from "shared/components/button";

const Feat01 = () => {
  const { title } = useSelector((state) => state.feat01);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { palette } = theme;
  const { primary, secondary } = palette;

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
      <S.Title color={primary.main}>{title}</S.Title>
      <h3>Feat 01</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat
        dolor eos repellendus cumque necessitatibus quas suscipit magni eveniet
        ducimus excepturi beatae architecto tempora quod consequatur, modi
        voluptates voluptatum porro.
      </p>
      <C.Button
        variant="contained"
        color={secondary.main}
        type="button"
        onClick={handleClick}
      >
        modificar titulo
      </C.Button>
    </S.Container>
  );
};

export default Feat01;
