import SectionLeft from "@/components/SectionLeft";
import SectionRight from "@/components/SectionRight";
import BaseLayout from "@/layouts/base";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";

import Slider, { Settings } from "react-slick";

const Home = () => {
  const [reset, setReset] = useState(1);

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
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
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
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694010350/aotuo/finalheroimage1_1_toqkvl.png"
        height={{
          base: "210px",
          sm: "calc(100vh - 88px)",
        }}
        width="full"
      />
      <SectionLeft
        title="Desain Futuristik"
        description=" Desain futuristik dari Motor Listrik Aotuo akan membuat banyak
              kalangan terpesona"
        image="https://res.cloudinary.com/ds73yosji/image/upload/v1694011367/aotuo/Frame_6_2_1_tdhjar.png"
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

      <Box py={14} maxW={1300} ml="auto">
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
                      width={300}
                      height={300}
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
                  >
                    {item.title}
                  </Text>
                </Stack>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
