import {
  BlackNext,
  FbIcon,
  FbNext,
  IgIcon,
  IgNext,
  MailIcon,
  TelpIcon,
  WaIcon,
  WaNext,
} from "@/assets/icons/sosmed";
import BaseLayout from "@/layouts/base";
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

const HubungiKami = () => {
  const sosmeds = [
    {
      to: "+62811545793",
      icon: <WaIcon />,
      next: <WaNext />,
    },
    {
      to: "@aotuo.id",
      icon: <IgIcon />,
      next: <IgNext />,
    },
    {
      to: "0542 8217949",
      icon: <TelpIcon />,
      next: <BlackNext />,
    },
    {
      to: "tborneo@indo.net.id",
      icon: <MailIcon />,
      next: <BlackNext />,
    },
  ];
  return (
    <Box
      bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694100416/aotuo/DSC00216_1_jug2fm.png"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h={{
        base: "1100px",
        sm: "720px",
      }}
    >
      <Box
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        h="full"
        px={4}
      >
        <Box
          borderRadius="32px"
          maxW={1200}
          mx="auto"
          h={{
            base: "920px",
            sm: "500px",
          }}
          w="full"
          bg="red.500"
        >
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
            }}
            h="full"
          >
            <Box
              bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694101781/aotuo/DSC00145_1_wbxtol.png"
              bgPos="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              h={{
                base: "30%",
                md: "full",
              }}
              w={{
                base: "full",
                md: "50%",
              }}
              borderTopLeftRadius="32px"
              borderBottomLeftRadius={{
                base: 0,
                md: "32px",
              }}
              borderTopRightRadius={{
                base: "32px",
                md: 0,
              }}
            />
            <Box
              w={{
                base: "full",
                md: "50%",
              }}
              p={{
                md: 12,
                base: 4,
              }}
              h={{
                base: "70%",
                md: "full",
              }}
            >
              <Stack spacing={6}>
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize={{
                    base: "2xl",
                    md: "32px",
                  }}
                >
                  Hubungi kami segera untuk melakukan pemesanan
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(auto-fit, minmax(220px, 1fr))",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                >
                  {sosmeds.map((sosmed, index) => (
                    <GridItem
                      colSpan={1}
                      bg="white"
                      p={4}
                      borderRadius="xl"
                      w="full"
                      key={index}
                    >
                      <Stack>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          {sosmed.icon}
                          {sosmed.next}
                        </Box>
                        <Text color="black" fontSize="xl">
                          {sosmed.to}
                        </Text>
                      </Stack>
                    </GridItem>
                  ))}
                </Grid>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

HubungiKami.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HubungiKami;
