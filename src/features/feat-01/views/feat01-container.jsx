import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@material-ui/core";
import * as S from "./feat01-styles";

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
    <Box display="flex" flexDirection="column">
      <Box p="1rem" bgcolor="primary.main">
        <nav>
          <Link to="/feat02">feat 02</Link>
        </nav>
        <S.Typography variant="h3">{title}</S.Typography>
        <Typography variant="h4">Feat 01</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat dolor eos repellendus cumque necessitatibus quas suscipit
          magni eveniet ducimus excepturi beatae architecto tempora quod
          consequatur, modi voluptates voluptatum porro.
        </p>
      </Box>
      <Box
        p="1rem"
        display="flex"
        border={1}
        m={1}
        borderColor="secondary.main"
      >
        <Box m={0} mr={1}>
          <Button
            fullWidth
            variant="outlined"
            size="small"
            onClick={handleClick}
          >
            modificar titulo
          </Button>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex">
            <Button fullWidth variant="outlined" color="primary" size="small">
              modificar titulo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feat01;
