import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

export default function Drop() {
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 800,
          height: 400,
          backgroundColor: color,
          transform: "translate(-50%,-50%)",
          borderRadius: "20px",
        }}
      ></Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Drop down</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Pages"
          onChange={handleChange}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value={"lime"}>lime</MenuItem>
          <MenuItem value={"lavender"}>lavender</MenuItem>
          <MenuItem value={"crimson"}>crimson</MenuItem>
          <MenuItem value={"darkblue"}>darkblue</MenuItem>
          <MenuItem value={"teal"}>teal</MenuItem>
          <MenuItem value={"rebeccapurple"}>rebeccapurple</MenuItem>
          <MenuItem value={"ghostwhite"}>ghostwhite</MenuItem>
          <MenuItem value={"aquamarine"}>aquamarine</MenuItem>
          <MenuItem value={"aliceblue"}>aliceblue</MenuItem>
        </Select>
        <br />
      </FormControl>
    </div>
  );
}