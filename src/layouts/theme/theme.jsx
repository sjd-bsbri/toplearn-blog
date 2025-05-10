import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  direction: "rtl",
    mode: "light",
  typography: {
    fontFamily: "vazir, YekanBakh,Tanha, roboto",
  },
  breakpoints: {
    values: {
      xs: 376,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1441,
    },
  },
});
