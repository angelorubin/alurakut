import React from "react";
import { Box, Paper, Typography, SvgIcon } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ReactComponent as NotebookIcon } from "assets/icons/notebook.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const Home = () => {
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
				flexDirection: "column",
				height: "100vh",
				width: "100%",
				backgroundColor: (theme) => theme.palette.primary.light,
			}}
		>
			<Box
				sx={{
					display: "flex",
					minHeight: 48,
					backgroundColor: (theme) => theme.palette.primary.main,
				}}
			>
				<Box
					sx={{
						display: "flex",
						mx: (theme) => theme.spacing(2),
						my: (theme) => theme.spacing(2),
					}}
				>
					<Logo />
				</Box>
				<Box
					sx={{
						display: "flex",
						flex: 1,
						alignItems: "center",
						justifyContent: "flex-end",
						mx: (theme) => theme.spacing(2),
						my: (theme) => theme.spacing(2),
					}}
				>
					<MenuIcon />
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Paper
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						borderRadius: "8px",
						minHeight: "224px",
						width: "95%",
						m: (theme) => theme.spacing(2),
						p: (theme) => theme.spacing(2),
					}}
				>
					<Typography
						sx={{
							fontFamily: "Rubik",
							fontStyle: "normal",
							fontWeight: "normal",
							fontSize: "24px",
							lineHeight: "28px",
							color: (theme) => theme.typography.rubik,
						}}
					>
						Bem-vindo(a), Javascripto
					</Typography>
					<Typography>
						Sorte de hoje: O melhor profeta do futuro é o passado
					</Typography>
					<Box sx={{ display: "flex", gap: (theme) => theme.spacing(2) }}>
						<Box>
							<Box>
								<Typography
									sx={{
										color: (theme) => theme.palette.grey[700],
										fontFamily: (theme) => theme.typography.rubik,
										fontStyle: "italic",
										fontSize: "12px",
										fontWeight: (theme) => theme.typography.fontWeightMedium,
									}}
								>
									Recados
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										alignItems: "center",
									}}
								>
									<Box>
										<SvgIcon component={NotebookIcon} />
									</Box>
								</Box>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										alignItems: "center",
									}}
								>
									0
								</Box>
							</Box>
						</Box>
					</Box>
				</Paper>
				<Paper
					sx={{
						display: "flex",
						borderRadius: "8px",
						height: "224px",
						minWidth: "96%",
						mt: 0,
						mr: (theme) => theme.spacing(2),
						mb: (theme) => theme.spacing(2),
						ml: (theme) => theme.spacing(2),
					}}
				>
					<Typography>Card 02</Typography>
				</Paper>
			</Box>
		</Box>
	);
};

export default Home;
