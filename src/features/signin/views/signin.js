import React from "react";
import {
  Box,
  Button,
  Input,
  Divider,
  Typography,
  Paper,
} from "@material-ui/core";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { theme } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";

const Login = () => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: (theme) =>
          `linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          gap: 3,
          boxShadow: (theme) => theme.shadows[3],
        }}
      >
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(15),
            textAlign: "center",
          }}
        >
          Sign In
        </Typography>
        <Divider />
        <Input placeholder="e-mail" size="small" />
        <Input placeholder="senha" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <S.Link to="/dashboard">
            <Button
              sx={{}}
              fullWidth
              color="primary"
              variant="contained"
              size="medium"
            >
              Entrar
            </Button>
          </S.Link>
        </Box>
        <Typography sx={{ fontSize: (theme) => theme.typography.pxToRem(12) }}>
          Não lembra a senha? <Link to="">clique aqui</Link>
        </Typography>
        <Typography sx={{ fontSize: (theme) => theme.typography.pxToRem(12) }}>
          <Link to="/signup">Cadastrar-se</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
