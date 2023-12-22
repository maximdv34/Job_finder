import { Container, Grid } from "@mui/material";
import { Title } from "./Title";

export const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ marginBottom: "50px", color: "white" }}>
        <Title text="Formula 3" />
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={3} container direction="row" justifyContent="center">
            <img
              src="logo2.jpg"
              style={{ width: "100%", height: "200px" }}
            ></img>
          </Grid>
          <Grid item xs={3} container direction="row" justifyContent="center">
            <img src="logo.png" style={{ height: "200px" }}></img>
          </Grid>
          <Grid item xs={3} container direction="row" justifyContent="center">
            <img
              src="logo3.jpg"
              style={{ width: "100%", height: "200px" }}
            ></img>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
