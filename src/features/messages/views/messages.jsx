import React, { useState, useEffect } from "react";
import { Box, Paper, useScrollTrigger } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const userMessages = useSelector((state) => state.messages);

  useEffect(() => {
    setMessages(userMessages);
  }, []);

  console.log(messages);

  return (
    <Box sx={{ display: "flex" }}>
      {messages.map((user) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>{user.id}</span>
          <span>{user.message}</span>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
