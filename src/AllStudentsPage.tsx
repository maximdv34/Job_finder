import { Container, Grid, Typography } from "@mui/material";

export const AllStudentsPage: React.FC = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ marginBottom: "50px" }}>
        <Typography
          component="h1"
          variant="h3"
          margin="normal"
          textAlign={"center"}
        >
          Studenti
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Container>
    </>
  );
};
