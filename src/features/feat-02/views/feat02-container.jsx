import React from "react";
import * as S from "./feat02-styles";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const Feat02 = () => {
  const { title } = useSelector((state) => state.feat02);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    return dispatch({
      type: "feat02/addTitle",
      payload: "New title",
    });
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <h3>Feat 02</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at,
        nam architecto facere corrupti excepturi dolor cum reprehenderit iure
        pariatur, consectetur accusamus adipisci, nemo voluptate voluptatum.
        Distinctio hic inventore quibusdam!
      </p>
      <Button color="secondary" onClick={handleClick}>
        mudar título
      </Button>
    </S.Container>
  );
};

export default Feat02;
