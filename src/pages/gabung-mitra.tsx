import BaseLayout from "@/layouts/base";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import Mitra from "@/assets/mitra.webp";
import {
  BlackNext,
  IgIcon,
  IgNext,
  MailIcon,
  TelpIcon,
  WaIcon,
  WaNext,
} from "@/assets/icons/sosmed";

const GabungMitra = () => {
  const syarat = [
    {
      title:
        "Menyediakan modal untuk pengambilan unit minimal 10 Unit dari keempat tipe untuk jawa dan luar jawa minimal 20 unit.",
    },
    {
      title: "Harus memiliki izin badan usaha",
    },
    {
      title:
        "Calon pemilik dealer harus mengajukan surat permohonan ke ATPM PT. Trans Borneo Tour",
    },
    {
      title:
        "Melampirkan Fotokopi kepemilikan bangunan atau kontrak ruko minimal 5 x 10m untuk showroom dan display spare part juga service",
    },
    {
      title:
        "Lokasi yang dipilih harus strategi dan layak di pinggir jalan serta tidak boleh berdekatan dengan dealer resmi satu kota hanya boleh satu dealer.",
    },
    {
      title:
        "Memiliki kesiapan Sumber Daya Manusia yang dibagi menjadi dua untuk bagian sales dan memiliki after sales service yang juga kuat",
    },
  ];

  const sosmeds = [
    {
      to: "+62811545793",
      icon: <WaIcon />,
      next: <WaNext />,
      link: "https://wa.me/62811545793",
    },
    {
      to: "@aotuo.id",
      icon: <IgIcon />,
      next: <IgNext />,
      link: "https://www.instagram.com/aotuo.id/",
    },
    {
      to: "0542 8217949",
      icon: <TelpIcon />,
      next: <BlackNext />,
      link: "tel:05428217949",
    },
    {
      to: "tborneo@indo.net.id",
      icon: <MailIcon />,
      next: <BlackNext />,
      link: "mailto:motorlistrikaotuo@gmail.com",
    },
  ];

  return (
    <Box>
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694748587/aotuo/Background_Gabung_Mitra_vq9tnh.webp"
        height="calc(100vh - 88px)"
        width="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxW={1440}
        mx="auto"
      >
        <Stack spacing={4} w="full" maxW={700} alignItems="center">
          <Text
            color="white"
            fontSize="5xl"
            fontWeight="extrabold"
            textAlign="center"
          >
            Tertarik Bergabung Menjadi Agen Kami?
          </Text>
          <Button colorScheme="red" w="fit-content">
            Ya, Saya Tertarik
          </Button>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="center" w="full">
        <Box maxW={1200} px={4} py={12}>
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
            }}
            justifyContent="space-between"
          >
            <Box
              w={{
                base: "100%",
                md: "60%",
              }}
            >
              <Stack spacing={4}>
                <Text
                  fontSize={{
                    base: "2xl",
                    md: "32px",
                  }}
                  color="red.500"
                  fontWeight="bold"
                >
                  Layanan Kemitraan Aotuo Electric Bikes
                </Text>
                <Text
                  color="black"
                  fontWeight="normal"
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<p>PT. TRANS BORNEO TOURS adalah perusahaan agen tunggal pemegang merek untuk motor listrik AOTUO di Indonesia. Syarat menjadi dealer resmi motor listrik aotuo ada beberapa persyaratan yang perlu dipenuhi dealer. AOTUO memiliki tiga jaringan atau layanan kemitraan yaitu:</p><br /><ul><li>H1 merupakan dealer (penjualan) yang berhak menjual sepeda motor listrik aotuo</li><li>H2 (Bengkel AOTUO) yang berhak menerima kartu perawatan berkala dari sepeda motor aotuo yang baru serta menerima servise dari sepeda motor aotuo lama.</li><li>H3 (Sparepart) yang berhak menjual sparepart dari motor listrik aotuo</li></ul><br /><p>Status usaha bisa dirangkap menjadi H1, H2, H3 ini dari main dealer dan kemampuan service juga ketersediaan spare part.</p>",
                  }}
                  sx={{
                    "ol, ul": {
                      padding: "revert",
                    },
                  }}
                />
              </Stack>
            </Box>
            <Box
              w={{
                base: "100%",
                md: "35%",
              }}
            >
              <Image
                src={Mitra}
                alt="mitra"
                width={600}
                height={650}
                style={{
                  objectFit: "contain",
                  borderRadius: 16,
                  margin: "0px auto",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        pos="relative"
        w="full"
        minH={900}
        py={8}
        px={4}
        maxW={1440}
        mx="auto"
        bgImage={{
          base: "https://res.cloudinary.com/ds73yosji/image/upload/v1694883266/aotuo/Background_Syarat_Responsif_rc4icd.webp",
          md: "https://res.cloudinary.com/ds73yosji/image/upload/v1694883126/aotuo/Background_Syarat_y7uppj.webp",
        }}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        {/* <Box
          pos="absolute"
          top={0}
          left={0}
          bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694268036/aotuo/patternpad_1_1_gwgwul.png"
          bgSize="cover"
          bgRepeat="no-repeat"
          w={300}
          h="full"
          zIndex={1}
        />
        <Box
          pos="absolute"
          top={0}
          right={0}
          bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694268135/aotuo/patternpad_1_2_vgxtto.png"
          bgSize="cover"
          bgRepeat="no-repeat"
          w={300}
          h="full"
          zIndex={1}
        /> */}

        <Stack spacing={6} pos="relative" zIndex={3}>
          <Text
            color="white"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Syarat Menjadi Agen
          </Text>
          <Stack spacing={4} alignItems="center">
            {syarat.map((s, i) => (
              <Box
                bg="white"
                border="1px solid #C8D7D2"
                boxShadow="0px 5px 30px 0px #B2B2B229"
                borderRadius="lg"
                px={5}
                py={6}
                key={s.title}
                maxW={800}
                w="full"
              >
                <HStack spacing={1} alignItems="flex-start">
                  <Text
                    fontSize={{
                      base: "md",
                      md: "xl",
                    }}
                    color="black"
                  >
                    {i + 1}.
                  </Text>
                  <Text
                    fontSize={{
                      base: "md",
                      md: "xl",
                    }}
                    color="black"
                  >
                    {s.title}
                  </Text>
                </HStack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box
        py={32}
        px={4}
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694358461/aotuo/Main_Frame_xdyjub.png"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        maxW={1440}
        mx="auto"
        w="full"
      >
        <Box borderRadius="32px" maxW={1200} mx="auto" w="full" bg="red.500">
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
            }}
            h="full"
          >
            <Box
              bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694948622/aotuo/Tangan_Kunci_Motor_zzje5i.webp"
              bgPos="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              h={{
                base: "30%",
                md: "500px",
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
              display={{
                base: "none",
                md: "block",
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
                          <a
                            href={sosmed.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sosmed.next}
                          </a>
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

GabungMitra.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
export default GabungMitra;
