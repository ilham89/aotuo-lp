import { ChakraTheme, extendTheme } from "@chakra-ui/react";

import { styles } from "./styles";
import foundations from "./foundations";

export const AotuoUI = extendTheme({
  styles,
  ...foundations,
}) as ChakraTheme;
