import { Container, Box, TextField, Button } from "@mui/material";
//import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SelectInput } from "./SelectInput";
import { tecniche, trasversali } from "./constants/skils";
import { Title } from "./Title";
import { IStudent } from "./types/IStudent";
/*
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
*/
export const StudentForm: React.FC = () => {
  async function fetchPost(data: IStudent) {
    return fetch("http://127.0.0.1:8000/api/students", {
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
  /*
  interface InputTypes {
    login: string;
    password: string;
  }
  */
  /*
  const validationSchema = yup.object().shape({
    login: yup.string().email().required(),
    password: yup.string().required(),
  });
  
  const { register, handleSubmit } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });
  */
  const { register, handleSubmit, control } = useForm<any>();
  const { mutateAsync } = useMutation({ mutationFn: fetchPost });
  async function submitForm(data: IStudent) {
    console.log(data);
    const response = await mutateAsync(data);
    console.log(response);
    return response;
  }
  return (
    <>
      <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
        <Title text="Sign in" />
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
            label="Congnome"
            fullWidth
            {...register("cognome")}
          />
          {/*
          TODO: register doesn't work correct
          <DatePicker
            label="data di nascita"
            slotProps={{
              textField: {
                fullWidth: true,
                margin: "normal",
                ...register("dataDiNascita"),
              },
            }}
          />
          */}
          <TextField
            required
            margin="normal"
            label="data di nascita"
            fullWidth
            {...register("dataDiNascita")}
          />
          <TextField
            required
            margin="normal"
            label="nazione di nascita"
            fullWidth
            {...register("nazioneDiNascita")}
          />
          <TextField
            required
            margin="normal"
            label="cittadinanza"
            fullWidth
            {...register("cittadinanza")}
          />
          <TextField
            required
            margin="normal"
            label="città di residenza"
            fullWidth
            {...register("cittàDiResidenza")}
          />
          <TextField
            required
            margin="normal"
            label="via"
            fullWidth
            {...register("via")}
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
            label="email"
            {...register("mail")}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            label="lingua madre"
            {...register("linguaMadre")}
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
            sx={{
              backgroundColor: "#e20600",
              ":hover": {
                bgcolor: "#a90400",
                color: "white",
              },
            }}
          >
            Invia
          </Button>
        </Box>
      </Container>
    </>
  );
};
