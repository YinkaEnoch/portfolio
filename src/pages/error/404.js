import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./404.module.css";

export default function ErrorPage() {
  return (
    <Stack
      alignItems={"center"}
      justifyContent="center"
      width="100vw"
      height="100vh"
      gap={4}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="body1">Page not found!</Typography>
      <Link to="/" className={styles.btn}>
        Home
      </Link>
    </Stack>
  );
}
