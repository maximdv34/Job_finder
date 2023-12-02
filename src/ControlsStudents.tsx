import { Autocomplete, TextField, Typography } from "@mui/material";
import { IStudent } from "./types/IStudent";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { fieldsStudent } from "./constants/fieldsStudent";
import { tecniche, trasversali } from "./constants/skils";
interface Props {
  students: IStudent[];
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}
export const ControlsStudents: React.FC<Props> = ({
  students,
  setQueryString,
}) => {
  /*
  const professions = [
    ...new Set(vacancies.map((student) => student.professione)),
  ];
  */
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
  const handleTecnicheChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      setQueryString((prev) => {
        const updatedQueryString = prev.replace(/&?tecniche=[^&]*/, "");
        return updatedQueryString
          ? `${updatedQueryString}&tecniche=${value}`
          : `tecniche=${value}`;
      });
    } else {
      setQueryString((prev) => prev.replace(/&?tecniche=[^&]*/, ""));
    }
  };
  const handleTrasversaliChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      setQueryString((prev) => {
        const updatedQueryString = prev.replace(/&?trasversali=[^&]*/, "");
        return updatedQueryString
          ? `${updatedQueryString}&trasversali=${value}`
          : `trasversali=${value}`;
      });
    } else {
      setQueryString((prev) => prev.replace(/&?trasversali=[^&]*/, ""));
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
        Filtri
      </Typography>
      {/*
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={professions}
        onChange={handleProfessionChange}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Professione" />}
      />
    */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={fieldsStudent}
        onChange={handleSortChange}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="ordina per" margin="normal" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tecniche}
        onChange={handleTecnicheChange}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Competenze tecniche" margin="normal" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={trasversali}
        onChange={handleTrasversaliChange}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Competenze trasversali"
            margin="normal"
          />
        )}
      />
    </>
  );
};
