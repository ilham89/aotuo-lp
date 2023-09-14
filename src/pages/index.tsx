import SectionLeft from "@/components/SectionLeft";
import SectionRight from "@/components/SectionRight";
import BaseLayout from "@/layouts/base";
import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement, useEffect, useRef, useState } from "react";
import HeroImage from "@/assets/hero-image.webp";
import SambutMasaDepan from "@/assets/sambut-masa-depan.webp";
import AotuoLogo from "@/assets/logo-aotuo.png";
import RosaLED from "@/assets/ROSA21-Lampu-LED.webp";
import { motion } from "framer-motion";

import Slider, { Settings } from "react-slick";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Home = () => {
  const [reset, setReset] = useState(1);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    const interval = setInterval(() => {
      setReset((prev) => prev + 1);
    }, 18000);

    return () => clearInterval(interval);
  }, []);

  const settings: Settings = {
    infinite: false,
    slidesToShow: 3.2,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const motor = [
    {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694274065/aotuo/Starlight_-_Look_Skew_zhezop.png",
      title: "Starlight",
    },
    {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356619/aotuo/JP25_-_Look_Skew_bgdndk.png",
      title: "JP25",
    },
    {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356694/aotuo/ROSA21_-_Look_Skew_es8lgo.png",
      title: "ROSA21",
    },
    {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356714/aotuo/Vision_Pro_-_Look_Skew_ndpw3a.png",
      title: "Vision",
    },
    {
      image:
        "https://res.cloudinary.com/ds73yosji/image/upload/v1694356752/aotuo/Vision_Pro_-_Look_Skew_1_cbdwti.png",
      title: "Vision Pro",
    },
  ];
  return (
    <Box>
      <Box h="full" width="100%" maxW={1440} mx="auto">
        <Image
          width={500}
          height={500}
          alt="hero image"
          src={HeroImage}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <SectionLeft
        title="Desain Futuristik"
        description=" Desain futuristik dari Motor Listrik Aotuo akan membuat banyak
              kalangan terpesona"
        image={RosaLED}
      />
      <SectionRight
        title="Speedometer Digital"
        description="Rasakan sensasi berkendara baru dengan speedometer digital yang
              futuristik di Motor Listrik Aotuo"
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694012357/aotuo/Frame_13_1_h7iezv.png"
      />

      <SectionLeft
        title="Safety Reverse"
        description="Hadir dengan fitur safety reverse yang canggih di Motor Listrik
              Aotuo, memberikan mobilitas tak tertandingi"
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694012903/aotuo/Frame_19_1_nbs0kq.png"
      />

      <Box py={14} maxW={1200} mx="auto">
        <Stack spacing={6}>
          <Text
            color="red.500"
            textAlign="center"
            fontSize={{
              base: "3xl",
              md: "5xl",
            }}
            fontWeight="bold"
          >
            Tipe Motor
          </Text>
          <Box key={reset}>
            <Slider {...settings}>
              {motor.map((item) => (
                <Stack spacing={4} key={item.title}>
                  <Box
                    height={{
                      base: "250px",
                      md: "300px",
                    }}
                    bg="white"
                    aspectRatio={1}
                    boxShadow="lg"
                    borderRadius="lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={isLargerThan768 ? 300 : 250}
                      height={isLargerThan768 ? 300 : 250}
                    />
                  </Box>
                  <Text
                    color="black"
                    fontWeight="bold"
                    fontSize={{
                      base: "xl",
                      md: "4xl",
                    }}
                    mt={5}
                    textAlign="center"
                    w={{
                      base: "250px",
                      md: "300px",
                    }}
                  >
                    {item.title}
                  </Text>
                </Stack>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Box>
      <Box position="relative" maxW={1440} w="full" mx="auto">
        <Image
          src={SambutMasaDepan}
          alt="sambut masa depan"
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          pos="absolute"
          top={{
            base: 8,
            md: 20,
          }}
          left={0}
          right={0}
          margin="0 auto"
          px={6}
          ref={ref}
        >
          <Image
            width={isLargerThan768 ? 100 : 60}
            height={isLargerThan768 ? 100 : 60}
            alt="logo aotuo"
            src={AotuoLogo}
            style={{
              margin: "0px auto",
              marginBottom: 12,
            }}
          />
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: -50 }} // Animasi awal dari kiri
              animate={{ opacity: 1, y: 0 }} // Animasi selama animasi berlangsung
              transition={{ duration: 1, ease: "backInOut" }}
            >
              <Text
                color="red.500"
                fontWeight="bold"
                fontSize={{
                  base: "lg",
                  md: "4xl",
                }}
                textAlign="center"
              >
                Sambut Masa Depan
              </Text>
              <Text
                color="red.500"
                fontWeight="bold"
                fontSize={{
                  base: "lg",
                  md: "4xl",
                }}
                textAlign="center"
              >
                Dengan Kendaraan Ramah Lingkungan
              </Text>
            </motion.div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
