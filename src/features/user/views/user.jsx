import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById, getMessages } from "features/user/store/slice";

const User = () => {
	// const [messages, setMessages] = useState([]);
	const messages = useSelector((state) => state.messages);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserById(2)).then((res) => {
			console.log(res.payload.data);
		});

		const userMessages = dispatch(getMessages());
		console.log(userMessages);
	}, []);

	return (
		<Box sx={{ display: "flex" }}>
			{[].map((data) => (
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
