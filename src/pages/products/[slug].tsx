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
import { ReactElement, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import Decoration1 from "@/assets/decoration1.png";
import Decoration2 from "@/assets/decoration2.png";
import { useRouter } from "next/router";

const products = [
  {
    name: "STARLIGHT",
    images: [
      {
        title: "skew",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946757/aotuo/Starlight_-_Look_Skew_druwef.webp",
      },
      {
        title: "left",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946756/aotuo/Starlight_-_Look_Left_bnb3of.webp",
      },
      {
        title: "front",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946756/aotuo/Starlight_-_Look_Front_ugtdqb.webp",
      },
      {
        title: "behind",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946756/aotuo/Starlight_-_Look_Behind_ydgs1x.webp",
      },
    ],
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
        value: "4 Jam",
      },
      {
        icon: <CompassIcon />,
        title: "Jarak Tempuh",
        value: "80 Km",
      },
    ],
    section_1: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695017454/aotuo/STARLIGHT_-_Lampu_LED_ewbcdp.webp",
    },
    section_2: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695018010/aotuo/STARLIGHT_-_Transmisi_m41eyf.webp",
    },
    section_3: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695017735/aotuo/STARLIGHT_-_Rem_Cakram_ofbna0.webp",
    },
    section_4: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695017880/aotuo/STARLIGHT_-_USB_pdulij.webp",
    },
    section_5: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695017948/aotuo/STARLIGHT_Cover_Image_emqklc.webp",
    },
    section_6: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695017317/aotuo/STARLIGHT_-_Front_Product_ajnwvv.webp",
    },
  },
  {
    name: "JP25",
    images: [
      {
        title: "skew",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946545/aotuo/JP25_-_Look_Skew_cw1czd.webp",
      },
      {
        title: "left",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946537/aotuo/JP25_-_Look_Left_gag79x.webp",
      },
      {
        title: "front",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946537/aotuo/JP25_-_Look_Front_l7jua3.webp",
      },
      {
        title: "behind",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946537/aotuo/JP25_-_Look_Behind_sio0ju.webp",
      },
    ],
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
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695018864/aotuo/JP25_-_Lampu_LED_rtms06.webp",
    },
    section_2: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695018638/aotuo/JP25_-_Transmisi_gqphux.webp",
    },
    section_3: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695019070/aotuo/JP25_-_Rem_Cakram_jo7lg2.webp",
    },
    section_4: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695019028/aotuo/JP25_-_USB_rulwzb.webp",
    },
    section_5: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695019029/aotuo/JP25_Cover_Image_qlwris.webp",
    },
    section_6: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695018860/aotuo/JP25_-_Front_Product_j6ovfx.webp",
    },
  },
  {
    name: "ROSA21",
    images: [
      {
        title: "skew",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946365/aotuo/ROSA21_-_Look_Skew_mfzxik.webp",
      },
      {
        title: "left",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946365/aotuo/ROSA21_-_Look_Left_dst9me.webp",
      },
      {
        title: "front",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946365/aotuo/ROSA21_-_Look_Front_uxk19r.webp",
      },
      {
        title: "behind",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946364/aotuo/ROSA21_-_Look_Behind_iokdrk.webp",
      },
    ],
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
    images: [
      {
        title: "skew",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1695634507/aotuo/Vision_-_Look_Skew_z4pgci.webp",
      },
      {
        title: "left",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1695634507/aotuo/Vision_-_Look_Left_ozmd6k.webp",
      },
      {
        title: "front",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1695634506/aotuo/Vision_-_Look_Front_gdy8pu.webp",
      },
      {
        title: "behind",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1696167518/aotuo/IMG_0896_ysmvjw_mj2bbl.webp",
      },
    ],
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
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634951/aotuo/Frame_56_akbrva.webp",
    },
    section_2: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634974/aotuo/Frame_57_w7rxat.webp",
    },
    section_3: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634924/aotuo/Frame_55_nfy8kb.webp",
    },
    section_4: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634891/aotuo/Frame_54_dgbala.webp",
    },
    section_5: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634507/aotuo/Vision_Cover_Image_1_f8ahcr.webp",
    },
    section_6: {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1695634720/aotuo/Frame_58_1_e0vqbs.png",
    },
  },
  {
    name: "VISION PRO",
    images: [
      {
        title: "skew",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946902/aotuo/Vision_Pro_-_Look_Skew_d6ux8e.webp",
      },
      {
        title: "left",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946902/aotuo/Vision_Pro_-_Look_Left_hkwx2c.webp",
      },
      {
        title: "front",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946902/aotuo/Vision_Pro_-_Look_Front_zsbvej.webp",
      },
      {
        title: "behind",
        url: "https://res.cloudinary.com/ds73yosji/image/upload/v1694946901/aotuo/Vision_Pro_-_Look_Behind_fllu8e.webp",
      },
    ],
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

const ProductDetail = () => {
  const [indexProduct, setIndexProduct] = useState(-1);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const colors = ["#000000", "#FFFFFF", "#E41213", "#9F9F9F", "#1227E4"];

  const router = useRouter();
  const { slug } = router.query;

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
  };

  useEffect(() => {
    if (slug) {
      const index = products.findIndex(
        (product) =>
          product.name.toLowerCase() === (slug as string).replace("-", " ")
      );

      if (index === -1) router.push("/404");

      setIndexProduct(index);
    }
  }, [slug]);

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
            {products[indexProduct]?.name}
          </Text>
          <Box maxW={650} px={6} w="full" mx="auto">
            <Slider {...settings}>
              {products[indexProduct]?.images?.map((product) => (
                <Image
                  key={product.title}
                  src={product.url}
                  alt={product.title}
                  width={isLargerThan768 ? 600 : 200}
                  height={isLargerThan768 ? 600 : 200}
                  style={{
                    margin: "0px auto",
                    width: isLargerThan768 ? 600 : 200,
                    height: isLargerThan768 ? 600 : 200,
                  }}
                  fetchPriority="high"
                  loading="eager"
                  priority
                />
              ))}
            </Slider>
          </Box>

          <HStack spacing={4} justifyContent="center">
            {colors.map((color) => (
              <Box
                h={10}
                w={10}
                borderRadius="full"
                bg="white"
                border="1px solid #E9E9E9"
                key={color}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  h={8}
                  w={8}
                  borderRadius="full"
                  {...(color === "#FFFFFF" && {
                    border: "1px solid #DFDFDF",
                  })}
                  bg={color}
                />
              </Box>
            ))}
            {products[indexProduct]?.name === "JP25" && (
              <Box
                h={10}
                w={10}
                borderRadius="full"
                bg="white"
                border="1px solid #E9E9E9"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box h={8} w={8} borderRadius="full" bg="#37ABFF" />
              </Box>
            )}
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
            {products[indexProduct]?.specs?.map((spec) => (
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
      {indexProduct !== -1 && (
        <>
          <SectionLeft
            image={products[indexProduct]?.section_1?.image}
            title="Lampu LED"
            description="Pencahayaan cerah, hemat energi, dan tampilan futuristik di malam hari dengan lampu LED canggih pada motor listrik kami"
          />
          <SectionRight
            image={products[indexProduct]?.section_2?.image}
            title="3 Mode Kecepatan"
            description="Nikmati fleksibilitas maksimal dengan 3 mode transmisi kecepatan pada motor listrik kami. Performa dan efisiensi dalam genggaman Anda"
          />
          <SectionLeft
            image={products[indexProduct]?.section_3?.image}
            title="Rem Cakram"
            description="Rem cakram motor listrik kami memberikan kendali pengereman yang optimal, memastikan keamanan perjalanan Anda"
          />
          <SectionRight
            image={products[indexProduct]?.section_4?.image}
            title="Port USB"
            description="Dilengkapi charging port USB memudahkan Anda untuk mengisi daya perangkat di mana saja, memenuhi kebutuhan mobilitas modern Anda"
          />

          <Box h="full" width="100%" maxW={1440} mx="auto">
            <Image
              width={450}
              height={450}
              alt="hero image"
              priority
              src={products[indexProduct]?.section_5?.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </>
      )}
      {indexProduct !== -1 && (
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
              src={products[indexProduct]?.section_6.image}
              alt={products[indexProduct]?.name}
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
                Spesifikasi {products[indexProduct]?.name}
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
                {products[indexProduct]?.specsDetail?.map((detail) => (
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
      )}

      <Box h={450} bg="red.500" pos="relative" maxW={1440} w="full" mx="auto">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="full"
          maxW={800}
          w="full"
          mx="auto"
          px={4}
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
              fontSize={{ base: "3xl", md: "5xl" }}
              textAlign="center"
            >
              Sambut Masa Depan Dengan Kendaraan Ramah Lingkungan
            </Text>
          </Stack>
        </Box>
        <Image
          src={Decoration1}
          alt="decoration one"
          width={150}
          height={400}
          style={{
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            height: "400px",
            width: "150px",
          }}
        />
        <Image
          src={Decoration2}
          alt="decoration two"
          width={150}
          height={400}
          style={{
            objectFit: "contain",
            position: "absolute",
            top: 0,
            right: 0,
            height: "400px",
            width: "150px",
          }}
        />
      </Box>
      <Box
        minH={450}
        h="full"
        py={8}
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694882901/aotuo/Background_Hubungi_Kami_Product_kv79vv.webp"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="full"
        maxW={1440}
        mx="auto"
      >
        <Box
          display="flex"
          alignItems="center"
          maxW={1200}
          w="full"
          mx="auto"
          minH={450}
          h="full"
          gap={{ base: 0, md: 7 }}
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

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProductDetail;
