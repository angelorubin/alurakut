import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@material-ui/core";
// import * as S from "./styles";
import { alpha } from "@material-ui/core/styles";

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
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        maxHeight: "40vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              color: "common.white",
              fontWeight: "typography.fontWeightBold",
              fontSize: "1.5rem",
            }}
          >
            Fundo
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "spacing-between",
            alignItems: "center",
            gap: 1,
            flex: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "common.black",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              color: "common.white",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "common.white",
            }}
          >
            link 01
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Feat01;
