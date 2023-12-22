import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Control, Controller } from "react-hook-form";
import { SyntheticEvent } from "react";

interface Props {
  data: string[];
  name: string;
  label: string;
  control: Control;
}
export const SelectInput: React.FC<Props> = ({
  data,
  name,
  label,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange, value, ref } = field;
        return (
          <Stack spacing={3} width="100%" margin="16px 0 8px 0">
            <Autocomplete
              multiple
              id="tags-outlined"
              fullWidth
              options={data}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              onChange={(
                _: SyntheticEvent<Element, Event>,
                newValue: string[]
              ) => {
                onChange(newValue);
              }}
              value={
                value ? data.filter((option) => value.includes(option)) : []
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  placeholder={label}
                  inputRef={ref}
                />
              )}
            />
          </Stack>
        );
      }}
    />
  );
};
