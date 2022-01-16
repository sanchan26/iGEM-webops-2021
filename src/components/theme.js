// theme.js

import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme =  {
  colors: {  
  black: "#131313",
  white: "#F5F5F5",
  green: '#00B859',
  blue: '#222930',
    },
  fonts : {
    heading: 'Oswald',
    body: "Raleway"
  }
}

export default theme



  