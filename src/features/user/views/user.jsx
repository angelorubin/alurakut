import React, { useState, useEffect } from "react";
import { Box, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import userReducer from "features/user/store/slice";

const User = () => {
	const [messages, setMessages] = useState([]);
	const userMessages = useSelector((state) => state.messages);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		setMessages(userMessages);
		dispatch(userReducer.fetchUserById(1).then((data) => console.log(data)));
	}, []);

	console.log(messages);

	return (
		<Box sx={{ display: "flex" }}>
			{messages.map((data) => (
				<Box
					key={data.id}
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<span>{data.id}</span>
					<span>{data.message}</span>
				</Box>
			))}
		</Box>
	);
};

export default User;
