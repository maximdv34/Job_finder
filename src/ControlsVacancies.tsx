import { Autocomplete, TextField, Typography } from "@mui/material";
import { IVacancy } from "./types/Vacancy";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { fieldsVacancy } from "./constants/fielsVacancy";
interface Props {
  vacancies: IVacancy[];
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}
export const ControlsVacancies: React.FC<Props> = ({
  vacancies,
  setQueryString,
}) => {
  const professions = [
    ...new Set(vacancies.map((vacancy) => vacancy.professione)),
  ];
  const handleProfessionChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      setQueryString((prev) => {
        const updatedQueryString = prev.replace(/&?professione=[^&]*/, "");
        return updatedQueryString
          ? `${updatedQueryString}&professione=${value}`
          : `professione=${value}`;
      });
    } else {
      setQueryString((prev) => prev.replace(/&?professione=[^&]*/, ""));
    }
  };

  const handleSortChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      setQueryString((prev) => {
        const updatedQueryString = prev.replace(/&?sort=[^&]*/, "");
        return updatedQueryString
          ? `${updatedQueryString}&sort=${value}`
          : `sort=${value}`;
      });
    } else {
      setQueryString((prev) => prev.replace(/&?sort=[^&]*/, ""));
    }
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        margin="normal"
        textAlign={"center"}
      >
        Controllo
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={professions}
        //onChange={(e, v) => setQueryString(v ? `professione=${v}` : "")}
        onChange={handleProfessionChange}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Professione" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={fieldsVacancy}
        //onChange={(e, v) => setQueryString(v ? `sort=${v}` : "")}
        onChange={handleSortChange}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="ordinamento del" margin="normal" />
        )}
      />
    </>
  );
};
