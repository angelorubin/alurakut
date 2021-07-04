import React from "react";
import {
  Box,
  Button,
  Input,
  Divider,
  Typography,
  Paper,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { PersonOutline, Lock } from "@material-ui/icons";
import { useFormik } from "formik";

const Login = () => {
  let navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values) {
        console.log(JSON.stringify(values, null, 2));
        navigate("dashboard", { replace: true });
      }
    },
  });

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
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 3,
            gap: 2,
            width: (theme) => theme.typography.pxToRem(300),
            margin: (theme) => theme.typography.pxToRem(10),
            borderRadius: "12px",
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
            E-mail
          </InputLabel>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Type your e-mail"
            onChange={handleChange}
            value={values.email}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutline />
              </InputAdornment>
            }
          />
          <InputLabel
            sx={{
              color: "#555354",
              fontSize: (theme) => theme.typography.pxToRem(14),
              fontWeight: (theme) => theme.typography.fontWeightBold,
            }}
          >
            Password
          </InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Type your password"
            onChange={handleChange}
            value={values.password}
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "auto" }}
          >
            <Button
              variant="contained"
              disableElevation
              type="submit"
              sx={{
                marginTop: (theme) => theme.typography.pxToRem(10),
                minHeight: (theme) => theme.typography.pxToRem(30),
                borderRadius: (theme) => theme.typography.pxToRem(20),
                backgroundColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.primary.contrastText,
                width: "100%",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.primary.contrastText,
                },
              }}
            >
              Entrar
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(12),
              textAlign: "center",
            }}
          >
            Don´t remenber your password? <Link to="/">click here</Link>
          </Typography>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(12),
              textAlign: "center",
            }}
          >
            Don´t have an account? <Link to="/create-account">click here</Link>
          </Typography>
        </Paper>
      </form>
    </Box>
  );
};

export default Login;
