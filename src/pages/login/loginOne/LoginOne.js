import Box from "@mui/material/Box";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import styles from "./LoginOne.module.css";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function LoginOne() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <main className={styles.container}>
      <Box
        className={styles.formBody}
        sx={{
          maxWidth: { xs: "95%" },
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
        }}
      >
        <Box textAlign="center" marginBottom={3}>
          <FingerprintIcon fontSize="large" />
        </Box>

        <form>
          <Stack spacing={3}>
            <TextField
              variant="standard"
              label="Email"
              id="email"
              type="email"
              required
              placeholder="example@mail.com"
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

            <Box textAlign="center">
              <Button
                variant="contained"
                type="submit"
                sx={{ width: { xs: "80%", sm: "60%", lg: "40%" } }}
              >
                Sign In
              </Button>
            </Box>
          </Stack>
        </form>

        <Divider sx={{ margin: "2rem 0" }} />
        <footer>
          <Typography sx={{ marginBottom: "1rem" }}>
            Don't have an account? <Link>Sign up</Link>
          </Typography>

          <Link>Forgot password?</Link>
        </footer>
      </Box>
    </main>
  );
}
