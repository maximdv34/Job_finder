import { Card, CardContent, Grid, Typography } from "@mui/material";
import { IStudent } from "./types/IStudent";
interface Props {
  student: IStudent;
}
export const Student: React.FC<Props> = ({ student }) => {
  const date = new Date(student.dataDiNascita);

  const dataDiNascita =
    `${date.getDate().toString().padStart(2, "0")}.` +
    `${(date.getMonth() + 1).toString().padStart(2, "0")}.` +
    `${date.getFullYear()} `;
  return (
    <>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ height: "500px" }}>
          <CardContent>
            <Typography
              component="h1"
              variant="h5"
              margin="normal"
              textAlign={"center"}
            >
              {student.nome} {student.cognome}
            </Typography>
            <Typography component="div" variant="body1" margin="normal">
              Data di nascita: {dataDiNascita}
            </Typography>
            <Typography component="div" variant="body1" margin="normal">
              Cita di residenza: {student.cittàDiResidenza}
            </Typography>
            {student.tecniche.length !== 0 && (
              <Typography component="div" variant="body1" margin="normal">
                Competenze tecniche:
                <ul style={{ margin: "10px 0" }}>
                  {student.tecniche.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Typography>
            )}
            {student.trasversali.length !== 0 && (
              <Typography component="div" variant="body1" margin="normal">
                Competenze trasversali:
                <ul style={{ margin: "10px 0" }}>
                  {student.trasversali.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Typography>
            )}
            <Typography component="p" variant="body1" margin="normal">
              Indirizzio: {student.via}
            </Typography>
            <Typography component="p" variant="body1" margin="normal">
              Mail: {student.mail}
            </Typography>
            <Typography component="p" variant="body1" margin="normal">
              Telefono: {student.telefono}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
