import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

interface Props {
  data: string[];
  formContext?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  label: string;
}
export const SelectInput: React.FC<Props> = ({ data, formContext, label }) => {
  return (
    <Stack spacing={3} width="100%" margin="16px 0 8px 0">
      <Autocomplete
        multiple
        id="tags-outlined"
        fullWidth
        options={data}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={label}
            //inputProps={formContext}
            // TODO: doesn't work this way
          />
        )}
      />
    </Stack>
  );
};
