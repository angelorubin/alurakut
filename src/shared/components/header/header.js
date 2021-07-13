import * as React from "react";
import { AppBar, Typography, Box, SvgIcon } from "@material-ui/core";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { ExitToApp } from "@material-ui/icons";

export const Header = () => {
	const { title } = useSelector((state) => state.dashboard);
	return (
		<AppBar
			position="relative"
			sx={{
				minHeight: "10vh",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				padding: 1,
			}}
		>
			<Box sx={{ flex: 1 }}>{title}</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					gap: 1,
					justifyContent: "flex-end",
					alignItems: "center",
				}}
			>
				<S.Link to="/dashboard/user">
					<Typography
						variant="body2"
						sx={{
							color: "common.white",
						}}
					>
						User
					</Typography>
				</S.Link>
				<S.Link to="/">
					<Typography
						variant="body2"
						sx={{
							color: "common.white",
						}}
					>
						Link 02
					</Typography>
				</S.Link>
				<S.Link to="/">
					<Typography
						variant="body2"
						sx={{
							color: "common.white",
						}}
					>
						link 03
					</Typography>
				</S.Link>
				<S.Link
					to="/"
					sx={{
						color: "common.white",
					}}
				>
					<ExitToApp />
				</S.Link>
			</Box>
		</AppBar>
	);
};
