import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@material-ui/core";
import * as S from "./styles";
import { alpha } from "@material-ui/core/styles";
import { Header } from "shared/components/header/header";
import { Sidebar } from "shared/components/sidebar/sidebar";

const Dashboard = () => {
  const { title } = useSelector((state) => state.dashboard);
  console.log(title);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "dashboard/addTitle",
      payload: "Logo Here",
    });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.8),
          minHeight: "80vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            border: "1px dashed white",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            flex: 4,
            display: "flex",
            backgroundColor: (theme) => theme.palette.grey[200],
          }}
        >
          Content
        </Box>
      </Box>
      <Box>
        Footer
        <Button onClick={handleClick}>change title</Button>
      </Box>
    </>
  );
};

export default Dashboard;
