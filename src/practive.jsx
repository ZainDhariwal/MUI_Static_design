import { Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Add } from "@mui/icons-material";
import styled from "@emotion/styled";

function Practice() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<SettingsIcon />}
      >
        settings
      </Button>
      <Button variant="contained" startIcon={<Add />} color="success">
        Add
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">this is my h1 tag!!!!!!</Typography>
      <Button
        variant="text"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        this is a button
      </Button>
      <BlueButton>another button</BlueButton>
    </>
  );
}

export default Practice;
