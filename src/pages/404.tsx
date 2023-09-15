import BaseLayout from "@/layouts/base";
import { ReactElement } from "react";
import AotuoLogo from "@/assets/logo-aotuo.png";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const NotFound = () => {
  return (
    <Box
      px={4}
      maxW={1200}
      h="90vh"
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={4} maxW="600px" alignItems="center">
        <Image
          src={AotuoLogo}
          alt="aotuo logo"
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
        <Text
          textAlign="center"
          color="red.500"
          fontWeight="bold"
          fontSize={{
            base: "xl",
            md: "4xl",
          }}
        >
          Halaman tidak ditemukan
        </Text>
        <Button size="lg" colorScheme="red" w="fit-content">
          Kembali ke Beranda
        </Button>
      </Stack>
    </Box>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default NotFound;
