import React from "react";
import {
  Box,
  Button,
  Input,
  Divider,
  Typography,
  Paper,
  TextField,
  InputLabel,
  InputAdornment,
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
        width: "100%",
        background: (theme) =>
          `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 3,
          gap: 1,
          width: (theme) => theme.typography.pxToRem(300),
          margin: (theme) => theme.typography.pxToRem(10),
        }}
      >
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(25),
            color: (theme) => theme.palette.common.black,
            fontWeight: (theme) => theme.typography.fontWeightBold,
            textAlign: "center",
            fontFamily: (theme) => theme.typography.poppins,
          }}
        >
          Sign In
        </Typography>
        <Divider />
        <InputLabel
          sx={{
            color: "#555354",
            fontSize: (theme) => theme.typography.pxToRem(14),
            fontWeight: (theme) => theme.typography.fontWeightBold,
          }}
        >
          Username
        </InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <Input placeholder="senha" />
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <S.Link to="/dashboard">
            <Button
              sx={{
                color: (theme) => theme.palette.primary.dark,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.light,
                },
              }}
              variant="outlined"
              fullWidth
            >
              Entrar
            </Button>
          </S.Link>
        </Box>
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(12),
            textAlign: "center",
          }}
        >
          Don´t remenber your password? <Link to="/">Click here</Link>
        </Typography>
        <Typography
          sx={{
            fontSize: (theme) => theme.typography.pxToRem(12),
            textAlign: "center",
          }}
        >
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
