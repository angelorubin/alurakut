import React from "react";
import {
	Box,
	Typography,
	Button,
	Divider,
	Link as MuiLink,
	OutlinedInput,
} from "@material-ui/core";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import LoginLogo from "assets/icons/login-logo.svg";
import * as S from "./styles";

const Signin = () => {
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
				backgroundColor: "primary.light",
				overflowY: "hidden",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: (theme) => theme.spacing(2),
					m: 4,
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
							gap: (theme) => theme.spacing(3),
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: (theme) => theme.spacing(4),
							backgroundColor: "common.white",
							borderRadius: 8,
							height: "368px",
							flex: 4,
							p: 4,
						}}
					>
						<S.Logo
							src={LoginLogo}
							sx={{
								maxWidth: "319px",
								height: "76px",
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
									fontSize: "12px",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								<Typography
									component="span"
									sx={{
										color: "#D81D99",
										fontWeight: "bold",
										fontSize: "12px",
										mr: 1,
									}}
								>
									Conecte-se
								</Typography>
								aos seus amigos e familiares usando recados e mensagens
								instantâneas
							</Typography>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
									fontSize: "12px",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								<Typography
									component="span"
									sx={{
										color: "#D81D99",
										fontSize: "12px",
										fontWeight: "bold",
										mr: 1,
									}}
								>
									Conheça
								</Typography>
								novas pessoas através de amigos de seus amigos e comunidades
							</Typography>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
									fontSize: "12px",
									mr: 4,
									ml: 4,
									mt: 4,
									textAlign: "center",
								}}
							>
								<Typography
									component="span"
									sx={{
										color: "#D81D99",
										fontSize: "12px",
										fontWeight: "bold",
										mr: 1,
									}}
								>
									Compartilhe
								</Typography>
								seus vídeos, fotos e paixões em um só lugar
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								backgroundColor: "#F1F9FE",
								gap: (theme) => theme.spacing(4),
								borderRadius: 8,
								mb: 3,
								p: 4,
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									textAlign: "center",
								}}
							>
								Acesse o
								<MuiLink
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
									www.orkut.br
								</MuiLink>
								com a sua conta
							</Typography>
							<OutlinedInput
								sx={{
									background: " #FFFFFF",
									height: "40px",
									border: "1px solid #C5C6CA",
									borderRadius: 4,
									fontFamily: (theme) => theme.typography.fontFamily.rubik,
								}}
								placeholder="Usuário"
							/>
							<RouterLink to="/home">
								<Button
									sx={{
										backgroundColor: "#2E7BB4",
										width: "209px",
										height: "40px",
										color: "common.white",
										borderRadius: 4,
										textDecoration: "none",
									}}
								>
									entrar
								</Button>
							</RouterLink>
						</Box>
						<Box
							sx={{
								display: "flex",
								flex: 1,
								alignItems: "center",
								flexDirection: "column",
								justifyContent: "center",
								minHeight: "74px",
								backgroundColor: "#F1F9FE",
								borderRadius: 8,
							}}
						>
							<Typography
								sx={{
									fontFamily: (theme) => theme.typography.rubik,
									fontSize: "12px",
									lineHeight: "14px",
									textAlign: "center",
									color: "#333333",
								}}
							>
								Ainda não é membro?
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									color: "primary.dark",
									fontWeight: "bold",
								}}
							>
								ENTRAR JÁ
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: (theme) => theme.shape.borderRadius(8),
						width: "100%",
						backgroundColor: "#BBCDE8",
						minHeight: "27px",
						p: 1,
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
								flexFlow: "row wrap",
								alignItems: "center",
								justifyContent: "center",
								gap: (theme) => theme.spacing(1),
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
						<MuiLink href="#" underline="none">
							Sobre o Orkut.br
						</MuiLink>
						<Divider>-</Divider>
						<MuiLink href="#" underline="none">
							Centro de segurança
						</MuiLink>
						<Divider>-</Divider>
						<MuiLink href="#" underline="none">
							Privacidade
						</MuiLink>
						<Divider>-</Divider>
						<MuiLink href="#" underline="none">
							Termos
						</MuiLink>
						<Divider>-</Divider>
						<MuiLink href="#" underline="none">
							Contato
						</MuiLink>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Signin;
