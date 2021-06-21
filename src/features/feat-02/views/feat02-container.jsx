import React from "react";
import * as S from "./feat02-styles";
import { useSelector } from "react-redux";

const Feat01 = () => {
  const { title } = useSelector((state) => state.feat01);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <h3>Page - Feat 02</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at,
        nam architecto facere corrupti excepturi dolor cum reprehenderit iure
        pariatur, consectetur accusamus adipisci, nemo voluptate voluptatum.
        Distinctio hic inventore quibusdam!
      </p>
    </S.Container>
  );
};

export default Feat01;
