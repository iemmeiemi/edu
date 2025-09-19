import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const SelectComponent = ({ handleChange, options, value, label}) => {
  return (
    <div>
      <FormControl className="w-30">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
            {options.map((option) => (
                <MenuItem value={option.value}>{option.title}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
