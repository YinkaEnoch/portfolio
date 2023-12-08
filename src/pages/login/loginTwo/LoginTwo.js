import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useTheme,
  Link,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import styles from "./LoginTwo.module.css";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { Link } from "react-router-dom";

const customTheme = (outerTheme) =>
  createTheme({
    palette: { mode: outerTheme.palette.mode },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#bbb",
            "--TextField-brandBorderHoverColor": "#fff",
            "--TextField-brandBorderFocusedColor": "#d2d2d5",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& label": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function LoginTwo() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const outerTheme = useTheme();

  return (
    <Box height="100svh" backgroundColor="#26262e" color="#d2d2d5">
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box
          height="100svh"
          width="60vw"
          sx={{
            padding: { md: "2rem 4rem", lg: "4rem 8rem" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Stack sx={{ height: { md: "100%" } }}>
            {/* Header OR LOGO */}
            <Typography variant="h4">Lorem Ipsum</Typography>

            {/* Body */}
            <Box margin="auto">
              <Typography variant="h5">Quis,</Typography>
              <Typography variant="h5">vel eros donec ac odio</Typography>
              <Typography variant="body1" margin="1rem 0">
                Et pharetra pharetra massa massa ultricies mi quis hendrerit
                dolor. Nisi porta lorem mollis aliquam ut porttitor leo. Donec
                et odio pellentesque diam volutpat commodo sed. A diam
                sollicitudin tempor id eu nisl nunc mi ipsum. Quis enim lobortis
                scelerisque fermentum dui faucibus in ornare. Quam lacus
                suspendisse faucibus interdum posuere lorem ipsum dolor sit.
                Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque
                viverra. Nisl suscipit adipiscing bibendum est ultricies integer
                quis auctor elit.{" "}
              </Typography>
              <Button
                component="a"
                variant="contained"
                sx={{ borderRadius: "50px" }}
                size="large"
              >
                Learn More
              </Button>
            </Box>

            {/* Footer */}
            <Typography variant="body1">
              &copy; 2023 Lorem Ipsum, Inc
            </Typography>
          </Stack>
        </Box>

        <Stack
          height="100svh"
          className={styles.loginPanel}
          justifyContent="center"
          spacing={3}
          sx={{
            padding: { xs: "2rem", sm: "4rem", md: "2rem", lg: "3rem" },
            width: { xs: "100vw", md: "40vw" },
          }}
        >
          <Typography variant="h4">Log In</Typography>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              type="email"
              id="email"
              required
              placeholder="example@mail.com"
              variant="standard"
              label="Email"
              fullWidth
              sx={{ color: "#fff" }}
            />

            <TextField
              variant="standard"
              label="Password"
              id="password"
              required
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      arial-label="toggle password visibility"
                      onClick={handleShowPassword}
                      sx={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>

          <Box marginTop="3rem"></Box>

          <Stack direction="row" spacing={3} alignItems="center">
            <Button
              variant="contained"
              type="submit"
              sx={{ width: { xs: "80%", sm: "60%", lg: "40%" } }}
            >
              Log In
            </Button>

            <Link to={"/"}>Forgot password?</Link>
          </Stack>

          <Typography sx={{ marginTop: "2rem" }}>
            Don't have an account? <Link>Sign up</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
