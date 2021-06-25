import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@material-ui/core";
import * as S from "./feat01-styles";
import { useTheme } from "@material-ui/core/styles";

const Feat01 = () => {
  const theme = useTheme();
  const { title } = useSelector((state) => state.feat01);
  const dispatch = useDispatch();
  const { error, grey, common, text } = theme.palette;

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch({
      type: "feat01/addTitle",
      payload: "React Redux Boilerplate",
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <S.TestBox>
        <Box>Box 01</Box>
        <Box>Box 02</Box>
      </S.TestBox>
      <Box p="1rem" bgcolor="primary.main">
        <nav>
          <Link to="/feat02">
            <Typography>feat 02</Typography>
          </Link>
        </nav>
        <S.Title color={common.white}>{title}</S.Title>
        <S.Title color={text.primary}>Feat 01</S.Title>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat dolor eos repellendus cumque necessitatibus quas suscipit
          magni eveniet ducimus excepturi beatae architecto tempora quod
          consequatur, modi voluptates voluptatum porro.
        </Typography>
      </Box>
      <Box
        m={1}
        p="1rem"
        display="flex"
        border={1}
        borderColor="secondary.main"
      >
        <Box m={0} mr={1}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleClick}
          >
            modificar titulo
          </Button>
        </Box>
        <Box display="flex">
          <Box>
            <S.WarningButton>Warning Button</S.WarningButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feat01;
