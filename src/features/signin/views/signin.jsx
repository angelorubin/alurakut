import React from "react";
import {
	Box,
	Typography,
	Input,
	Link,
	Button,
	Divider,
	OutlinedInput,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import LoginLogo from "assets/icons/login-logo.svg";
import * as S from "./styles";

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
				navigate("/dashboard", { replace: true });
			}
		},
	});

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				backgroundColor: (theme) => theme.palette.primary.light,
				overflowY: "hidden",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: (theme) => theme.spacing(3),
					width: "739px",
					minHeight: "368px",
					borderRadius: (theme) => theme.shape.borderRadius(2),
					mr: (theme) => theme.spacing(4),
					ml: (theme) => theme.spacing(4),
				}}
			>
				<Box
					sx={{
						display: "flex",
						flex: 1,
						gap: (theme) => theme.spacing(3),
						"@media (max-width: 600px)": {
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							flex: 3,
							gap: (theme) => theme.spacing(4),
							backgroundColor: (theme) => theme.palette.common.white,
						}}
					>
						<S.Logo
							src={LoginLogo}
							sx={{
								"@media (max-width: 400px)": {
									width: "190px",
									height: "45px",
								},
							}}
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								gap: (theme) => theme.spacing(2),
							}}
						>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
									fontWeight: "bold",
									fontSize: "12px",
									color: "#D81D99",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								Conecte-se aos seus amigos e familiares usando recados e
								mensagens instantâneas
							</Typography>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
									fontStyle: " normal",
									fontWeight: "bold",
									fontSize: "12px",
									lineHeight: "14px",
									color: "#D81D99",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								Conheça novas pessoas através de amigos de seus amigos e
								comunidades
							</Typography>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
									fontStyle: " normal",
									fontWeight: "bold",
									fontSize: "12px",
									lineHeight: "14px",
									color: "#D81D99",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								Compartilhe seus vídeos, fotos e paixões em um só lugar
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							flex: 1,
							gap: (theme) => theme.spacing(2),
							backgroundColor: "#F1F9FE",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								flex: 3,
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									textAlign: "center",
								}}
							>
								Acesse o
								<Link
									href="http://www.orkut.com/index.html"
									underline="none"
									target="_blank"
									sx={{
										color: (theme) => theme.palette.grey[800],
										fontWeight: (theme) => theme.typography.fontWeightBold,
										fontFamily: (theme) => theme.typography.rubik,
										fontSize: "14px",
										mr: 1,
										ml: 1,
									}}
								>
									www.orkut.com
								</Link>
								com a sua conta
							</Typography>
							<OutlinedInput
								placeholder="Usuário"
								sx={{
									background: " #FFFFFF",
									height: "40px",
									border: "1px solid #C5C6CA",
									borderRadius: "8px",
								}}
							/>
							<Button>Login</Button>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								justifyContent: "center",
								flex: 1,
								border: "1px dashed red",
								minHeight: "74px",
							}}
						>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.rubik,
									fontsize: "12px",
									lineHeight: "14px",
									textAlign: "center",
									color: "#333333",
								}}
							>
								Ainda não é membro?
							</Typography>
							<Typography sx={{}}>ENTRAR JÁ</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: (theme) => theme.shape.borderRadius(8),
						width: "100%",
						backgroundColor: "#BBCDE8",
						minHeight: "27px",
						p: 6,
					}}
				>
					<Typography
						sx={{
							display: "flex",
							fontFamily: (theme) => theme.palette.common.white,
							fontSize: "12px",
							lineHeight: "14px",
							textAlign: "center",
							"@media (max-width:400px)": {
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							},
						}}
					>
						<Typography
							component="span"
							sx={{
								fontFamily: (theme) => theme.typography.rubik,
								fontSize: "12px",
								lineHeight: "14px",
								textAlign: "center",
								color: "#333333",
							}}
						>
							© 2020 Orkut.br
						</Typography>
						<Divider
							sx={{
								"@media (max-width: 400px)": {
									display: "none",
								},
							}}
						>
							-
						</Divider>
						<Link href="#" underline="none">
							Sobre o Orkut.br
						</Link>
						<Divider
							sx={{
								"@media (max-width: 400px)": {
									display: "none",
								},
							}}
						>
							-
						</Divider>
						<Link href="#" underline="none">
							Centro de segurança
						</Link>
						<Divider
							sx={{
								"@media (max-width: 400px)": {
									display: "none",
								},
							}}
						>
							-
						</Divider>
						<Link href="#" underline="none">
							Privacidade
						</Link>
						<Divider
							sx={{
								"@media (max-width: 400px)": {
									display: "none",
								},
							}}
						>
							-
						</Divider>
						<Link href="#" underline="none">
							Termos
						</Link>
						<Divider
							sx={{
								"@media (max-width: 400px)": {
									display: "none",
								},
							}}
						>
							-
						</Divider>
						<Link href="#" underline="none">
							Contato
						</Link>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;

/**
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
		*/
