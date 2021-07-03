import React, { useState, useEffect } from "react";
import { Box, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const userMessages = useSelector((state) => state.messages);

  useEffect(() => {
    setMessages(userMessages);
  }, []);

  console.log(messages);

  return (
    <Box sx={{ display: "flex" }}>
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>{message.id}</span>
          <span>{message.message}</span>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
