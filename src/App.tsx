import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
export const App: React.FC = () => {
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
        >
          <TextField
            required
            margin="normal"
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            id="outlined-basic"
            label="Congnome"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            id="outlined-number"
            label="età"
            type="number"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};
