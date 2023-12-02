import { Container, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { ControlsStudents } from "./ControlsStudents";
import { Student } from "./Student";
import { IStudent } from "./types/IStudent";
import { Title } from "./Title";

export const AllStudentsPage: React.FC = () => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [allStudents, setAllStudents] = useState<IStudent[]>([]);
  const [queryString, setQueryString] = useState<string>("");
  const getStudents = useCallback(async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/students?${queryString}`,
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
  const getAllStudents = useCallback(async () => {
    const response = await fetch("http://127.0.0.1:8000/api/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5173",
      },
    });
    return await response.json();
  }, []);
  useEffect(() => {
    async function loadStudents() {
      const response = await getStudents();
      setStudents(response.data.students);
    }
    loadStudents();
  }, [getStudents]);
  useEffect(() => {
    async function loadStudents() {
      const response = await getAllStudents();
      setAllStudents(response.data.students);
    }
    loadStudents();
  }, [getAllStudents]);
  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "50px" }}>
        <Title text="Studente" />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ControlsStudents
              students={allStudents}
              queryString={queryString}
              setQueryString={setQueryString}
            />
          </Grid>
          <Grid container item xs={9}>
            {students.map((student) => (
              <Student student={student} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
