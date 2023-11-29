import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SelectInput } from "./SelectInput";
import { tecniche, trasversali } from "./constants/skils";
export const VacancyForm: React.FC = () => {
  async function fetchPost(data: any) {
    return fetch("http://127.0.0.1:8000/api/vacancies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://127.0.0.1:5173",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    });
  }
  const { register, handleSubmit, control } = useForm<any>();
  const { mutateAsync } = useMutation({ mutationFn: fetchPost });
  async function submitForm(data: any) {
    console.log(data);
    const response = await mutateAsync(data);
    console.log(response);
    return response;
  }
  return (
    <>
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        <Typography component="h1" variant="h5" margin="normal">
          Offerta di lavoro
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="form"
          onSubmit={handleSubmit((data) => submitForm(data))}
        >
          <TextField
            margin="normal"
            fullWidth
            required
            label="Nome"
            {...register("nome")}
          />
          <TextField
            required
            margin="normal"
            label="indirizzio"
            fullWidth
            {...register("indirizzio")}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            label="email"
            {...register("mail")}
          />
          <TextField
            required
            margin="normal"
            label="telefono"
            fullWidth
            {...register("telefono")}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            label="professione"
            {...register("professione")}
          />
          <SelectInput
            data={tecniche}
            name="tecniche"
            label="Competenze tecniche"
            control={control}
          />
          <SelectInput
            data={trasversali}
            name="trasversali"
            label="Competenze trasversali"
            control={control}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            //sx={{ backgroundColor: "#e20600" }}
          >
            Invia
          </Button>
        </Box>
      </Container>
    </>
  );
};
