import React from "react";
import {
  Box,
  Button,
  Input,
  FormLabel,
  Divider,
  Typography,
  Paper,
} from "@material-ui/core";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          minWitdh: "90%",
          borderRadius: "5px",
          padding: 2,
          gap: 2,
          boxShadow: (theme) => theme.shadows[3],
        }}
      >
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(15),
            textAlign: "center",
          }}
        >
          Sign Up
        </Typography>
        <Divider />
        <Input placeholder="nome" />
        <Input placeholder="sobrenome" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <S.Link to="/dashboard">
            <Button color="primary" variant="contained">
              Cadastrar
            </Button>
          </S.Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
