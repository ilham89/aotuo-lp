import {
  AccelarationIcon,
  BanIcon,
  BatteryIcon,
  CakramIcon,
  CapacityIcon,
  ChargingIcon,
  CompassIcon,
  DimensionIcon,
  GearIcon,
  KeyIcon,
  LightingIcon,
  SecurityIcon,
  ServiceIcon,
  SpeedIcon,
  WeightIcon,
} from "@/assets/icons/specs";
import SectionLeft from "@/components/SectionLeft";
import SectionRight from "@/components/SectionRight";
import BaseLayout from "@/layouts/base";
import { Box, Button, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";

const Produk = () => {
  const colors = ["#000000", "#E41213", "#1227E4"];

  const specs = [
    {
      title: "Jarak Tempuh",
      value: "80 Km",
    },
    {
      title: "Kecepatan Maks",
      value: "50 Km/h",
    },
    {
      title: "Daya Angkut",
      value: "± 170 KG",
    },
  ];

  const specDetail = [
    {
      icon: <DimensionIcon />,
      title: "Dimensi Motor",
      value: "175 x 170 x 110 ",
    },
    {
      icon: <WeightIcon />,
      title: "Berat Motor",
      value: "93 Kg",
    },
    {
      icon: <CapacityIcon />,
      title: "Daya Angkut",
      value: "± 170 Kg",
    },
    {
      icon: <GearIcon />,
      title: "Mesin Transimisi",
      value: "Aotuo 60V 1500W",
    },
    {
      icon: <SpeedIcon />,
      title: "Kecepatan Maks",
      value: "50 Km/h",
    },
    {
      icon: <AccelarationIcon />,
      title: "Akselerasi 0 - 100 m",
      value: "10 Detik",
    },
    {
      icon: <CakramIcon />,
      title: "Sistem Pengereman",
      value: "Cakram Hidrolik",
    },
    {
      icon: <BanIcon />,
      title: "Ukuran Ban",
      value: "90/90/10",
    },
    {
      icon: <ServiceIcon />,
      title: "Mode Servis",
      value: "Tersedia",
    },
    {
      icon: <KeyIcon />,
      title: "Kunci",
      value: "Remot dan Kunci",
    },
    {
      icon: <LightingIcon />,
      title: "Pencahayaan",
      value: "Full LED",
    },
    {
      icon: <SecurityIcon />,
      title: "Security",
      value: "Sistem Alarm",
    },
    {
      icon: <BatteryIcon />,
      title: "Tipe Baterai",
      value: "Lithium Acid 60V/20Ah",
    },
    {
      icon: <ChargingIcon />,
      title: "Pengisian Cepat",
      value: "2 Jam",
    },
    {
      icon: <CompassIcon />,
      title: "Jarak Tempuh",
      value: "80 Km",
    },
  ];

  return (
    <Box>
      <Box w="full" display="flex" justifyContent="center">
        <Box maxW={1200} py={8} w="full">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
            color="black"
          >
            STARLIGHT
          </Text>
          <Image
            src="https://res.cloudinary.com/ds73yosji/image/upload/v1694271121/aotuo/Starlight_-_Look_Skew_itphw3.png"
            alt="stalight"
            width={700}
            height={700}
          />
          <HStack spacing={4} justifyContent="center">
            {colors.map((color) => (
              <Box h={8} w={8} borderRadius="full" bg={color} />
            ))}
          </HStack>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {specs.map((spec) => (
              <Stack>
                <Text color="#646668" fontWeight="medium">
                  {spec.title}
                </Text>
                <Text fontSize="3xl" color="red.500" fontWeight="bold">
                  {spec.value}
                </Text>
              </Stack>
            ))}
            <Button colorScheme="red" size="lg">
              Pesan Sekarang
            </Button>
          </Box>
        </Box>
      </Box>
      <SectionLeft
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694273026/aotuo/starlight-1.png"
        title=" Lampu LED"
        description="  Pencahayaan cerah, hemat energi, dan tampilan futuristik di malam
              hari dengan lampu LED canggih pada motor listrik kami"
      />
      <SectionRight
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694273479/aotuo/starlight-2.png"
        title="3 Mode Kecepatan"
        description="Nikmati fleksibilitas maksimal dengan 3 mode transmisi kecepatan pada motor listrik kami. Performa dan efisiensi dalam genggaman Anda"
      />
      <SectionLeft
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694273668/aotuo/starlight-3.png"
        title="Rem Cakram"
        description="Rem cakram motor listrik kami memberikan kendali pengereman yang optimal, memastikan keamanan perjalanan Anda"
      />
      <SectionRight
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694273754/aotuo/starlight-4.png"
        title="Port USB"
        description="Dilengkapi charging port USB memudahkan Anda untuk mengisi daya perangkat di mana saja, memenuhi kebutuhan mobilitas modern Anda"
      />
      <Box
        h={450}
        w="full"
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694273902/aotuo/starlight-5.png"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />

      <Box maxW={1200} w="full" py={8} mx="auto">
        <Stack direction="row" spacing={4} alignItems="center">
          <Image
            src="https://res.cloudinary.com/ds73yosji/image/upload/v1694274079/aotuo/starlight-6.png"
            alt="starligt-6"
            width={500}
            height={800}
          />
          <Stack spacing={8}>
            <Text
              color="black"
              fontSize="4xl"
              fontWeight="bold"
              textAlign="center"
            >
              Spesifikasi Starlight
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {specDetail.map((detail) => (
                <HStack spacing={3}>
                  {detail.icon}
                  <Stack spacing={2}>
                    <Text color="#646668" fontWeight="normal">
                      {detail.title}
                    </Text>
                    <Text color="black" fontWeight="bold">
                      {detail.value}
                    </Text>
                  </Stack>
                </HStack>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Box>
      <Box h={450} bg="red.500">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="full"
          maxW={800}
          w="full"
          mx="auto"
        >
          <Stack spacing={2}>
            <Text
              color="white"
              fontWeight="semibold"
              fontSize="2xl"
              textAlign="center"
            >
              Bersama Kami
            </Text>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="5xl"
              textAlign="center"
            >
              Sambut Masa Depan Dengan Kendaraan Ramah Lingkungan
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box h={450} py={8}>
        <Box
          display="flex"
          alignItems="center"
          maxW={1200}
          w="full"
          mx="auto"
          h="full"
          gap={7}
        >
          <Image
            src="https://res.cloudinary.com/ds73yosji/image/upload/v1694329797/aotuo/DSC00144_1_mzxptb.png"
            width={480}
            height={350}
            alt="spion"
            style={{
              height: "100%",
            }}
          />
          <Stack spacing={3}>
            <Text fontSize="5xl" fontWeight="bold" color="red.500">
              Hubungi Kami Untuk Mendapatkan Penawaran Terbaik
            </Text>
            <Button size="lg" colorScheme="red" w="fit-content">
              Pesan Sekarang
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

Produk.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Produk;
