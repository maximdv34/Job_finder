import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  /*
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    */
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StudentForm: React.FC = () => {
  function f() {
    return;
  }
  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5" margin="normal">
          Sign in
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="form"
          onSubmit={f}
        >
          <TextField margin="normal" fullWidth required label="Nome" />
          <TextField required margin="normal" label="Congnome" fullWidth />
          <DatePicker
            label="data di nascita"
            slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          />
          <TextField
            required
            margin="normal"
            label="nazione di nascita"
            fullWidth
          />
          <TextField required margin="normal" label="cittadinanza" fullWidth />
          <TextField
            required
            margin="normal"
            label="città di residenza"
            fullWidth
          />
          <TextField required margin="normal" label="via" fullWidth />
          <TextField required margin="normal" label="telefono" fullWidth />
          <TextField required margin="normal" fullWidth label="Email" />
          <TextField required margin="normal" fullWidth label="lingua madre" />
          {/*
              <FormControl margin="normal" fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            */}
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};
