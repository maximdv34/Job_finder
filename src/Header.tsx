import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#e20600" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Formula 3
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button key="Home" sx={{ color: "#fff" }}>
                Home
              </Button>
            </Link>
            <Link to="/">
              <Button key="Studenti" sx={{ color: "#fff" }}>
                Studenti
              </Button>
            </Link>
            <Link to="/">
              <Button key="Offerte di lavoro" sx={{ color: "#fff" }}>
                Offerte di lavoro
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: "64px", marginBottom: "50px" }}></Box>
    </>
  );
};
