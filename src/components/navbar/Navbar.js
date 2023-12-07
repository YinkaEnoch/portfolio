import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "assets/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <Stack direction="row" justifyContent="space-around" gap={4} padding="1rem">
      <Link to={"/"}>
        <img src={Logo} alt="fitness arena logo" className={styles.logo} />
      </Link>

      <Stack direction="row" gap={6} alignItems={"center"}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="#exercises" className={`${styles.active} ${styles.link}`}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}
