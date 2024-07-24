import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
      primary: "#101113",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default darkTheme;
