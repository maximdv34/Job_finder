import { Card, CardContent, Grid, Typography } from "@mui/material";
import { IVacancy } from "./types/IVacancy";
interface Props {
  vacancy: IVacancy;
}
export const Vacancy: React.FC<Props> = ({ vacancy }) => {
  return (
    <>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ height: "460px" }}>
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
              <Typography component="div" variant="body1" margin="normal">
                Competenze tecniche:
                <ul style={{ margin: "10px 0" }}>
                  {vacancy.tecniche.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Typography>
            )}
            {vacancy.trasversali.length !== 0 && (
              <Typography component="div" variant="body1" margin="normal">
                Competenze trasversali:
                <ul style={{ margin: "10px 0" }}>
                  {vacancy.trasversali.map((i) => (
                    <li key={i}>{i}</li>
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
    </>
  );
};
