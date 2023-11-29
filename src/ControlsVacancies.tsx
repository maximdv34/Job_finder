import { Autocomplete, TextField, Typography } from "@mui/material";
import { IVacancy } from "./types/Vacancy";
import { Dispatch, SetStateAction, memo } from "react";
interface Props {
  vacancies: IVacancy[];
  setQueryString: Dispatch<SetStateAction<string>>;
}
export const ControlsVacancies: React.FC<Props> = ({
  vacancies,
  setQueryString,
}) => {
  /*
  function getProfessions() {
    return [...new Set(vacancies.map((vacancy) => vacancy.professione))];
  }
  const professions = useMemo(getProfessions, [vacancies]);
  */
  const professions = [
    ...new Set(vacancies.map((vacancy) => vacancy.professione)),
  ];
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        margin="normal"
        textAlign={"center"}
      >
        controlli
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={professions}
        onChange={(e, v) =>
          v ? setQueryString(`?professione=${v}`) : setQueryString("")
        }
        fullWidth
        renderInput={(params) => <TextField {...params} label="Professione" />}
      />
    </>
  );
};
