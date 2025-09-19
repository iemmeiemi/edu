import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const StyledButton = styled(Button)(({ id }) => ({
  fontWeight: "bold",
  backgroundColor: id === "login-button" ? "#2563EB" : "white",
  color: id === "login-button" ? "white" : "#2563EB",
  borderRadius: "20px",
  width: "400px",
  height: "50px",
  "&:hover": {
    backgroundColor: id === "login-button" ? "#1E40AF" : "#f0f0f0",
  },
}));

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container
        disableGutters
        maxWidth="false"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(#2563EB 0%, #153885 52%)",
          width: "100vw",
          height: "100vh",
          p: 0,
          m: 0,
          //   overflow: "hidden",
          //   position: "relative",
        }}
      >
        <Box
          sx={{
            width: "580px",
            height: "650px",
            backgroundColor: "rgba(249, 250, 251, 0.7)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#FFFFFF" }}
          >
            Chào mừng!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <Typography sx={{ color: "white" }}>Email</Typography>
            <TextField
              id="outlined-basic"
              label="Nhập email"
              variant="outlined"
              sx={{
                width: "400px",
                backgroundColor: "white",
                borderRadius: "10px",
                border: "none",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ color: "white" }}>Mật khẩu</Typography>
            <FormControl
              sx={{
                width: "400px",
                backgroundColor: "white",
                borderRadius: "10px",
                border: "none",
                "& .MuiFormLabel-root.Mui-focused": {
                  display: "none",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    border: "none", // Màu khi hover
                  },
                  "&.Mui-focused fieldset": {
                    border: "none", // Màu khi focus
                  },
                },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Nhập mật khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Typography
              sx={{
                fontSize: "13px",
                textAlign: "right",
                color: (theme) => theme.palette.primary.main,
                marginTop: "5px",
                fontStyle: "",
              }}
            >
              Quên mật khẩu? Nhấn vào đây
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <StyledButton
              id="login-button"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: "20px",
                width: "400px",
                height: "50px",
              }}
            >
              Đăng nhập
            </StyledButton>
            <Divider
              orientation="horizontal"
              sx={{
                my: 2, // khoảng cách trên dưới
                color: "gray",
                fontSize: "0.875rem",
                width: "60%", // chiếm hết ngang
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Hoặc
              </Typography>
            </Divider>
            <StyledButton
              id="contact-admin-button"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontWeight: "bold",
                backgroundColor: "white",
                borderRadius: "20px",
                width: "400px",
                height: "50px",
              }}
            >
              Liên hệ với quản trị viên
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Login;
