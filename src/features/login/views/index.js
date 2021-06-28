import React from "react";
import { Box, Button, Input, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWitdh: "90%",
          border: (theme) => `2px solid ${theme.palette.grey[300]}`,
          borderRadius: "5px",
          boxShadow: "",
          padding: 2,
          gap: 1,
        }}
      >
        <FormLabel>Email</FormLabel>
        <Input />
        <FormLabel>Password</FormLabel>
        <Input />

        <Link to="/dashboard">
          <Button color="primary" variant="contained">
            Entrar
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
