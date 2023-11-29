import { Container, Grid, Typography } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ marginBottom: "50px" }}>
        <Typography
          component="h1"
          variant="h3"
          margin="normal"
          textAlign={"center"}
        >
          OBIETIVI
        </Typography>
        <Typography component="h1" variant="h5" textAlign={"center"}>
          Mettiamo in comunicazione le aziende con persone che cercano lavoro
        </Typography>
      </Container>
    </>
  );
};
