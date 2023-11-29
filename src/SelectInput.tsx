import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Control, Controller } from "react-hook-form";

interface Props {
  data: any[];
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
      render={({ field, fieldState: { error } }) => {
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
              onChange={(event: any, newValue: any) => {
                onChange(newValue);
              }}
              value={data.find((option) => {
                return value === option;
              })}
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
