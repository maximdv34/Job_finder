import { Container, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IVacancy } from "./types/Vacancy";
import { Vacancy } from "./Vacancy";
import { ControlsVacancies } from "./ControlsVacancies";

export const AllVacanciesPage: React.FC = () => {
  const [vacancies, setVacancies] = useState<IVacancy[]>([]);
  const [allVacancies, setAllVacancies] = useState<IVacancy[]>([]);
  const [queryString, setQueryString] = useState<string>("");
  const getVacancies = useCallback(async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/vacancies?${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://127.0.0.1:5173",
        },
      }
    );
    return await response.json();
  }, [queryString]);
  const getAllVacancies = useCallback(async () => {
    const response = await fetch("http://127.0.0.1:8000/api/vacancies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5173",
      },
    });
    return await response.json();
  }, []);
  useEffect(() => {
    async function loadVacancies() {
      const response = await getVacancies();
      setVacancies(response.data.vacancies);
    }
    loadVacancies();
  }, [getVacancies]);
  useEffect(() => {
    async function loadVacancies() {
      const response = await getAllVacancies();
      setAllVacancies(response.data.vacancies);
    }
    loadVacancies();
  }, [getAllVacancies]);
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
            <ControlsVacancies
              vacancies={allVacancies}
              queryString={queryString}
              setQueryString={setQueryString}
            />
          </Grid>
          <Grid container item xs={9}>
            {vacancies.map((vacancy) => (
              <Vacancy vacancy={vacancy} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
