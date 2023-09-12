import { Box, Grid, Hide, Show, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import LogoWhite from "@/assets/logo-white.png";
import { useRouter } from "next/router";

const Footer = () => {
  const menus = [
    {
      title: "Pintasan",
      submenus: [
        {
          title: "Beranda",
          to: "/",
        },
        {
          title: "Profil Perusahaan",
          to: "/profil",
        },
        {
          title: "Hubungi Kami",
          to: "/hubungi-kami",
        },
        {
          title: "Guideline Produk",
          to: "/produk-guide",
        },
        {
          title: "Gabung Mitra",
          to: "/gabung-mitra",
        },
      ],
    },
    {
      title: "Produk",
      submenus: [
        {
          title: "Starlight",
          to: "/produk",
        },
        {
          title: "JP25",
          to: "/produk",
        },
        {
          title: "Rosa21",
          to: "/produk",
        },
        {
          title: "Vision",
          to: "/produk",
        },
        {
          title: "Vision Pro",
          to: "/produk",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      submenus: [
        {
          title: "Beranda",
          to: "/",
        },
        {
          title: "Profil Perusahaan",
          to: "/profil",
        },
        {
          title: "Hubungi Kami",
          to: "/hubungi-kami",
        },
        {
          title: "Guideline Produk",
          to: "/produk-guide",
        },
        {
          title: "Gabung Mitra",
          to: "/gabung-mitra",
        },
      ],
    },
  ];

  const router = useRouter();
  return (
    <Box bg="red.500" w="full" pos="relative" minH="450px">
      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        px={{
          base: 4,
          md: 5,
        }}
        maxW={1200}
        mx="auto"
        pt={16}
        pb={6}
        h={{
          md: "full",
          base: "fit-content",
        }}
        gap={10}
        minH={{
          md: 450,
          base: "unset",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Image height={55} width={220} alt="logo-white" src={LogoWhite} />
          <Show above="md">
            <Text color="white">
              © 2023 PT. Trans Borneo Tours. All rights reserved
            </Text>
          </Show>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(auto-fit, minmax(150px, 1fr))",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          maxW="600px"
          w="full"
          pos="relative"
          zIndex={2}
        >
          {menus.map((menu) => (
            <Box key={menu.title}>
              <Stack spacing={4}>
                <Text color="white" fontSize="xl" fontWeight="bold">
                  {menu.title}
                </Text>
                <Stack spacing={3}>
                  {menu.submenus.map((sub, i) => (
                    <Text
                      key={i}
                      color="#FCE7E7"
                      onClick={() => {
                        router.push(sub.to);
                        console.log("klikkk");
                      }}
                    >
                      {sub.title}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Box>
          ))}
        </Grid>
        <Hide above="md">
          <Text color="white">
            © {new Date().getFullYear()} PT. Trans Borneo Tours. All rights
            reserved
          </Text>
        </Hide>
      </Box>
      <Box
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694061970/aotuo/Decoration_Logo_qpzt3p.png"
        bgRepeat="no-repeat"
        bgSize="contain"
        position="absolute"
        right={0}
        bgPosition="center"
        w="230px"
        height="400px"
        top={0}
        bottom={0}
        sx={{
          margin: "auto 0px",
        }}
        zIndex={1}
      />
    </Box>
  );
};

export default Footer;
