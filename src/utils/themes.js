import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
};
// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }
// const breakpoints = {
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }

const breakpoints = {
  xs: "200px",
  sm: "450px",
  s: "600px",
  md: "700px",
  m: "800px",
  l: "980px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1920px",
  xxxl: "2560px",
};
export const breakTheme = extendTheme({ breakpoints });
export const customTheme = extendTheme({ colors });

// export default customTheme;
