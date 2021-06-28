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
          border: (theme) => `2px dashed ${theme.palette.grey[300]}`,
          borderRadius: "5px",
          padding: 2,
          gap: 1,
        }}
      >
        <Typography>My Title</Typography>
        <Divider />
        <FormLabel
          sx={{
            color: (theme) => theme.palette.grey[50],
          }}
        >
          Email
        </FormLabel>
        <Input />
        <FormLabel
          sx={{
            color: (theme) => theme.palette.common.black,
          }}
        >
          Password
        </FormLabel>
        <Input />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <S.Link to="/dashboard">
            <Button color="primary" variant="contained">
              Entrar
            </Button>
          </S.Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
