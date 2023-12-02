import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Icon,
  IconButton,
  Paper,
  Popover,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [openListIndex, setOpenListIndex] = useState(-1);
  const handleListClick = (index: number) => {
    if (index === openListIndex) {
      setOpenListIndex(-1);
    } else {
      setOpenListIndex(index);
    }
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "transparent", position: "relative" }}
      >
        <Toolbar
          sx={{ background: "transparent", textTransform: "none!important" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <img
            src="logo.png"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
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
            {/* 
            <Link to="/inserimento_studenti">
              <Button key="Studenti" sx={{ color: "#fff" }}>
                Inserimento studenti
              </Button>
            </Link>
            <Link to="/inserimento_offerte_di_lavoro">
              <Button key="Offerte di lavoro" sx={{ color: "#fff" }}>
                Inserimento offerte di lavoro
              </Button>
            </Link>
            */}
            <Button
              key="Offerte di lavoro"
              sx={{ color: "#fff", backgroundColor: "transparent!important" }}
              onClick={() => handleListClick(0)}
            >
              Aziende
              <SvgIcon
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ExpandMoreIcon"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </SvgIcon>
              <Popover
                open={openListIndex === 0}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 64, left: 1920 }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ backgroundColor: "transparent" }}
              >
                <Paper sx={{ backgroundColor: "transparent" }}>
                  <Grid>
                    <Grid sx={{ textAlign: "center" }}>
                      <Link to="/inserimento_offerte_di_lavoro">
                        <Button
                          key="Offerte di lavoro"
                          sx={{ color: "black", width: "100%" }}
                        >
                          Inserimento offerte di lavoro
                        </Button>
                      </Link>
                    </Grid>
                    <Grid sx={{ textAlign: "center" }}>
                      <Link to="/tutti_offerte_di_lavoro">
                        <Button
                          key="Offerte di lavoro"
                          sx={{ color: "black", width: "100%" }}
                        >
                          Tutti offerte
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Paper>
              </Popover>
            </Button>
            <Button
              key="Studenti"
              sx={{ color: "#fff" }}
              onClick={() => handleListClick(1)}
            >
              Studenti
              <SvgIcon
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ExpandMoreIcon"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </SvgIcon>
              <Popover
                open={openListIndex === 1}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 64, left: 2100 }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Paper>
                  <Grid sx={{ textAlign: "center" }}>
                    <Link to="/inserimento_studenti">
                      <Button
                        key="inserimento_studenti"
                        sx={{ color: "black", width: "100%" }}
                      >
                        Inserimento studenti
                      </Button>
                    </Link>
                  </Grid>
                  <Grid sx={{ textAlign: "center" }}>
                    <Link to="/tutti_studenti">
                      <Button
                        key="tutti_studenti"
                        sx={{ color: "black", width: "100%" }}
                      >
                        Tutti studenti
                      </Button>
                    </Link>
                  </Grid>
                </Paper>
              </Popover>
            </Button>
            <Link to="/API">
              <Button key="API" sx={{ color: "#fff" }}>
                Corsi A.P.I.
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: "64px" }}></Box>
    </>
  );
};
