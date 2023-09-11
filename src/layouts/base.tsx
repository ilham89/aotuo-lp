import * as React from "react";

import { Box } from "@chakra-ui/react";

import Footer from "./partials/footer";
import Header from "./partials/header";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default BaseLayout;
