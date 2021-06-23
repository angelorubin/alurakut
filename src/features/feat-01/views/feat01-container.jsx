import React from "react";
import * as S from "./feat01-styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";

const Feat01 = () => {
  const { title } = useSelector((state) => state.feat01);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { palette } = theme;

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch({
      type: "feat01/addTitle",
      payload: "React Redux Boilerplate",
    });
  };

  return (
    <S.Container maxWidth="xl">
      <nav>
        <Link to="/feat02">feat 02</Link>
      </nav>
      <S.Title color={palette.common.black}>{title}</S.Title>
      <h3>Feat 01</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat
        dolor eos repellendus cumque necessitatibus quas suscipit magni eveniet
        ducimus excepturi beatae architecto tempora quod consequatur, modi
        voluptates voluptatum porro.
      </p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleClick}
      >
        modificar titulo
      </Button>
    </S.Container>
  );
};

export default Feat01;
