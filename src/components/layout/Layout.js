import { Box } from "@mui/material";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
    <Box sx={{ width: { xl: "1400px" } }} margin="auto">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
