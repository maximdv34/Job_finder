import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const AllVacancies: React.FC = () => {
  /*
  interface IResponse {
    status: string;
    data: {
      vacancies: object[];
    };
  }
  */
  interface IVacancy {
    nome: string;
    indirizzio: string;
    mail: string;
    telefono: number;
    professione: string;
    tecniche: string[];
    trasversali: string[];
  }
  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  async function getVacancies() {
    return fetch("http://127.0.0.1:8000/api/vacancies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5173",
      },
    }).then((response) => {
      return response.json();
    });
  }

  useEffect(() => {
    async function loadVacancies() {
      const response = await getVacancies();
      setVacancies(response.data.vacancies);
      console.log(response.data.vacancies);
    }
    loadVacancies();
  }, []);
  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "50px" }}>
        <Typography
          component="h1"
          variant="h3"
          margin="normal"
          textAlign={"center"}
          sx={{ marginBottom: "50px" }}
        >
          Offerte di lavoro
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography
              component="h1"
              variant="h5"
              margin="normal"
              textAlign={"center"}
            >
              controlli
            </Typography>
          </Grid>
          <Grid container item xs={9}>
            {vacancies.map((vacancy) => (
              <Grid item xs={4}>
                <Card variant="outlined" sx={{ height: "500px" }}>
                  <CardContent>
                    <Typography
                      component="h1"
                      variant="h5"
                      margin="normal"
                      textAlign={"center"}
                    >
                      {vacancy.nome}
                    </Typography>

                    <Typography component="p" variant="h6" margin="normal">
                      {vacancy.professione}
                    </Typography>
                    {vacancy.tecniche.length !== 0 && (
                      <Typography component="p" variant="body1" margin="normal">
                        Competenze tecniche:
                        <ul style={{ margin: "10px 0" }}>
                          {vacancy.tecniche.map((i) => (
                            <li>{i}</li>
                          ))}
                        </ul>
                      </Typography>
                    )}
                    {vacancy.trasversali.length !== 0 && (
                      <Typography component="p" variant="body1" margin="normal">
                        Competenze trasversali:
                        <ul style={{ margin: "10px 0" }}>
                          {vacancy.trasversali.map((i) => (
                            <li>{i}</li>
                          ))}
                        </ul>
                      </Typography>
                    )}
                    <Typography component="p" variant="body1" margin="normal">
                      Indirizzio: {vacancy.indirizzio}
                    </Typography>
                    <Typography component="p" variant="body1" margin="normal">
                      Mail: {vacancy.mail}
                    </Typography>
                    <Typography component="p" variant="body1" margin="normal">
                      Telefono: {vacancy.telefono}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
