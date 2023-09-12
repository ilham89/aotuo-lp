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
import {
  Box,
  Button,
  Grid,
  HStack,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement, useState } from "react";
import Slider, { Settings } from "react-slick";

const Produk = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const products = [
    {
      name: "STARLIGHT",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694274065/aotuo/Starlight_-_Look_Skew_zhezop.png",
      specs: [
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
      ],
      specsDetail: [
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
      ],
      section_1: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694273026/aotuo/starlight-1.png",
      },
      section_2: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694273479/aotuo/starlight-2.png",
      },
      section_3: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694273668/aotuo/starlight-3.png",
      },
      section_4: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694273754/aotuo/starlight-4.png",
      },
      section_5: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694273902/aotuo/starlight-5.png",
      },
      section_6: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694274079/aotuo/starlight-6.png",
      },
    },
    {
      name: "JP25",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356619/aotuo/JP25_-_Look_Skew_bgdndk.png",
      specs: [
        {
          title: "Jarak Tempuh",
          value: "60 Km",
        },
        {
          title: "Kecepatan Maks",
          value: "50 Km/h",
        },
        {
          title: "Daya Angkut",
          value: "± 170 KG",
        },
      ],
      specsDetail: [
        {
          icon: <DimensionIcon />,
          title: "Dimensi Motor",
          value: "175 x 65 x 110",
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
          value: "Aotuo 60V 2000W",
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
          value: "60 Km",
        },
      ],
      section_1: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446449/aotuo/jp25-1.png",
      },
      section_2: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446703/aotuo/jp25-2.png",
      },
      section_3: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447049/aotuo/jp25-3.png",
      },
      section_4: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447542/aotuo/jp25-4.png",
      },
      section_5: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447925/aotuo/JP25-5.png",
      },
      section_6: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448191/aotuo/jp25-6.png",
      },
    },
    {
      name: "ROSA21",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356694/aotuo/ROSA21_-_Look_Skew_es8lgo.png",
      specs: [
        {
          title: "Jarak Tempuh",
          value: "120 Km",
        },
        {
          title: "Kecepatan Maks",
          value: "70 Km/h",
        },
        {
          title: "Daya Angkut",
          value: "± 200 KG",
        },
      ],
      specsDetail: [
        {
          icon: <DimensionIcon />,
          title: "Dimensi Motor",
          value: "187 x 70 x 110",
        },
        {
          icon: <WeightIcon />,
          title: "Berat Motor",
          value: "113 Kg",
        },
        {
          icon: <CapacityIcon />,
          title: "Daya Angkut",
          value: "± 200 Kg",
        },
        {
          icon: <GearIcon />,
          title: "Mesin Transimisi",
          value: "Aotuo 72V 2000W",
        },
        {
          icon: <SpeedIcon />,
          title: "Kecepatan Maks",
          value: "70 Km/h",
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
          value: "Lithium Acid 72V/32Ah",
        },
        {
          icon: <ChargingIcon />,
          title: "Pengisian Cepat",
          value: "2 Jam",
        },
        {
          icon: <CompassIcon />,
          title: "Jarak Tempuh",
          value: "120 Km",
        },
      ],
      section_1: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694011367/aotuo/Frame_6_2_1_tdhjar.png",
      },
      section_2: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446791/aotuo/rosa21-2.png",
      },
      section_3: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447134/aotuo/rosa21-3.png",
      },
      section_4: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447610/aotuo/rosa21-4.png",
      },
      section_5: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447975/aotuo/ROSA21-5.png",
      },
      section_6: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448238/aotuo/rosa21-6.png",
      },
    },
    {
      name: "VISION",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356714/aotuo/Vision_Pro_-_Look_Skew_ndpw3a.png",
      specs: [
        {
          title: "Jarak Tempuh",
          value: "80 Km",
        },
        {
          title: "Kecepatan Maks",
          value: "60 Km/h",
        },
        {
          title: "Daya Angkut",
          value: "± 200 KG",
        },
      ],
      specsDetail: [
        {
          icon: <DimensionIcon />,
          title: "Dimensi Motor",
          value: "185 x 70 x 110",
        },
        {
          icon: <WeightIcon />,
          title: "Berat Motor",
          value: "103 Kg",
        },
        {
          icon: <CapacityIcon />,
          title: "Daya Angkut",
          value: "± 200 Kg",
        },
        {
          icon: <GearIcon />,
          title: "Mesin Transimisi",
          value: "Aotuo 72V 2000W",
        },
        {
          icon: <SpeedIcon />,
          title: "Kecepatan Maks",
          value: "60 Km/h",
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
          value: "Lithium Acid 72V/20Ah",
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
      ],
      section_1: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446533/aotuo/vision-1.png",
      },
      section_2: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446842/aotuo/vision-2.png",
      },
      section_3: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447187/aotuo/vision-3.png",
      },
      section_4: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447655/aotuo/vision-4.png",
      },
      section_5: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448032/aotuo/Vision-5.png",
      },
      section_6: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448291/aotuo/vision-6.png",
      },
    },
    {
      name: "VISION PRO",
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356752/aotuo/Vision_Pro_-_Look_Skew_1_cbdwti.png ",
      specs: [
        {
          title: "Jarak Tempuh",
          value: "80 Km",
        },
        {
          title: "Kecepatan Maks",
          value: "60 Km/h",
        },
        {
          title: "Daya Angkut",
          value: "± 200 KG",
        },
      ],
      specsDetail: [
        {
          icon: <DimensionIcon />,
          title: "Dimensi Motor",
          value: "185 x 70 x 110",
        },
        {
          icon: <WeightIcon />,
          title: "Berat Motor",
          value: "103 Kg",
        },
        {
          icon: <CapacityIcon />,
          title: "Daya Angkut",
          value: "± 200 Kg",
        },
        {
          icon: <GearIcon />,
          title: "Mesin Transimisi",
          value: "Aotuo 72V 2000W",
        },
        {
          icon: <SpeedIcon />,
          title: "Kecepatan Maks",
          value: "60 Km/h",
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
          value: "Lithium Acid 72V/20Ah",
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
      ],
      section_1: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446580/aotuo/vision-pro-1.png",
      },
      section_2: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694446894/aotuo/vision-pro-2.png",
      },
      section_3: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447231/aotuo/vision-pro-3.png",
      },
      section_4: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694447714/aotuo/vision-pro-4.png",
      },
      section_5: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448092/aotuo/Vision_Pro-5.png",
      },
      section_6: {
        image:
          "https://res.cloudinary.com/ds73yosji/image/upload/v1694448340/aotuo/vision-pro-6.png",
      },
    },
  ];

  const colors = ["#000000", "#E41213", "#1227E4"];

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current, next) => setCurrentProduct(next),
  };

  return (
    <Box>
      <Box w="full" display="flex" justifyContent="center">
        <Box maxW={1200} py={8} w="full" px={4}>
          <Text
            fontSize={{
              base: "3xl",
              md: "5xl",
            }}
            fontWeight="bold"
            textAlign="center"
            color="black"
          >
            {products[currentProduct].name}
          </Text>
          <Box maxW={650} w="full" px={6} mx="auto">
            <Slider {...settings}>
              {products.map((product) => (
                <Image
                  key={product.name}
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  style={{
                    margin: "0px auto",
                    width: isLargerThan768 ? 600 : 200,
                    height: isLargerThan768 ? 600 : 200,
                  }}
                />
              ))}
            </Slider>
          </Box>

          <HStack spacing={4} justifyContent="center">
            {colors.map((color) => (
              <Box h={8} w={8} borderRadius="full" bg={color} key={color} />
            ))}
          </HStack>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            mt={6}
            flexWrap="wrap"
            gap={5}
          >
            {products[currentProduct].specs.map((spec) => (
              <Stack key={spec.title}>
                <Text
                  color="#646668"
                  fontWeight="medium"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  {spec.title}
                </Text>
                <Text
                  fontSize={{
                    base: "xl",
                    md: "3xl",
                  }}
                  color="red.500"
                  fontWeight="bold"
                >
                  {spec.value}
                </Text>
              </Stack>
            ))}
            {isLargerThan768 && (
              <Button colorScheme="red" size="lg">
                Pesan Sekarang
              </Button>
            )}
          </Box>
          {!isLargerThan768 && (
            <Box display="flex" justifyContent="center">
              <Button colorScheme="red" size="lg" mt={5}>
                Pesan Sekarang
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <SectionLeft
        image={products[currentProduct].section_1.image}
        title="Lampu LED"
        description="Pencahayaan cerah, hemat energi, dan tampilan futuristik di malam hari dengan lampu LED canggih pada motor listrik kami"
      />
      <SectionRight
        image={products[currentProduct].section_2.image}
        title="3 Mode Kecepatan"
        description="Nikmati fleksibilitas maksimal dengan 3 mode transmisi kecepatan pada motor listrik kami. Performa dan efisiensi dalam genggaman Anda"
      />
      <SectionLeft
        image={products[currentProduct].section_3.image}
        title="Rem Cakram"
        description="Rem cakram motor listrik kami memberikan kendali pengereman yang optimal, memastikan keamanan perjalanan Anda"
      />
      <SectionRight
        image={products[currentProduct].section_4.image}
        title="Port USB"
        description="Dilengkapi charging port USB memudahkan Anda untuk mengisi daya perangkat di mana saja, memenuhi kebutuhan mobilitas modern Anda"
      />
      <Box
        h={450}
        w="full"
        bgImage={products[currentProduct].section_5.image}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />

      <Box maxW={1200} w="full" py={8} mx="auto" px={4}>
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          spacing={4}
          alignItems={{
            md: "center",
            base: "unset",
          }}
        >
          <Image
            src={products[currentProduct].section_6.image}
            alt={products[currentProduct].name}
            width={500}
            height={800}
            style={{
              height: isLargerThan768 ? 800 : 500,
              width: isLargerThan768 ? 500 : 300,
              margin: "0px auto",
            }}
          />
          <Stack spacing={8}>
            <Text
              color="black"
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              Spesifikasi Starlight
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(auto-fit, minmax(200px, 1fr))",
                md: "repeat(3, 1fr)",
              }}
              gap={{
                md: 6,
                base: 4,
              }}
            >
              {products[currentProduct].specsDetail.map((detail) => (
                <HStack spacing={3} key={detail.title} w="full">
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
              fontSize={{
                base: "3xl",
                md: "5xl",
              }}
              textAlign="center"
            >
              Sambut Masa Depan Dengan Kendaraan Ramah Lingkungan
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box minH={450} h="full" py={8}>
        <Box
          display="flex"
          alignItems="center"
          maxW={1200}
          w="full"
          mx="auto"
          minH={450}
          h="full"
          gap={7}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Image
            src="https://res.cloudinary.com/ds73yosji/image/upload/v1694329797/aotuo/DSC00144_1_mzxptb.png"
            width={480}
            height={350}
            alt="spion"
            style={{
              height: 350,
            }}
          />
          <Stack
            spacing={3}
            alignItems={{
              base: "center",
              md: "unset",
            }}
          >
            <Text
              fontSize={{
                base: "3xl",
                md: "5xl",
              }}
              fontWeight="bold"
              color="red.500"
              textAlign={{
                base: "center",
                md: "unset",
              }}
            >
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
