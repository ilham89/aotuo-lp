import { ObengIcon, OfficeIcon, YoutubeIcon } from "@/assets/icons/sosmed";
import BaseLayout from "@/layouts/base";
import { Box, HStack, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import Decoration1 from "@/assets/decoration1.png";
import Decoration2 from "@/assets/decoration2.png";
import { motion } from "framer-motion";

const Profil = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box>
      <Box maxW={1200} w="full" mx="auto" display="flex" alignItems="center">
        <Box>
          <Box
            as={motion.div}
            h={{
              base: "unset",
              md: "calc(100vh - 88px)",
            }}
            display="flex"
            alignItems={{
              base: "flex-start",
              md: "center",
            }}
            flexDirection={{
              base: "column",
              md: "row",
            }}
            px={4}
            gap={8}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 4,
              },
            }}
          >
            <Stack spacing={4} maxW="500px" w="full">
              <Text
                color="black"
                fontWeight="bold"
                fontSize={{
                  base: "32px",
                  sm: "48px",
                  md: "56px",
                }}
              >
                PT. Trans Borneo Automotive
              </Text>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={5}
              >
                <Box
                  p={2}
                  borderRadius="full"
                  boxShadow="0px 0px 20px 0px #E4121380"
                  bg="red.500"
                >
                  <YoutubeIcon />
                </Box>
                <Text color="black" fontSize="sm">
                  Bekerja sama dengan PT. Yhinzong Aotuo Electric Technology
                  membuat inovasi sepeda motor ramah lingkungan. Sepeda
                  motor listrik AOTUO.
                </Text>
              </Box>
            </Stack>
            <Image
              src="https://res.cloudinary.com/ds73yosji/image/upload/v1694882727/aotuo/Bapak_Profil_Perusahaan_dr4csn.webp"
              alt="profil"
              width={550}
              height={300}
            />
          </Box>
          <Box
            display="flex"
            alignItems={{
              base: "unset",
              md: "center",
            }}
            justifyContent="space-between"
            gap={10}
            px={4}
            flexDirection={{
              base: "column",
              md: "row",
            }}
            mt={{
              base: 10,
              md: 0,
            }}
            as={motion.div}
            initial={{
              opacity: 0,
              x: -100, // Start off-screen to the left
            }}
            animate={{
              opacity: 1,
              x: 0, // Move to the center
              transition: {
                duration: 5,
                type: "spring", // Apply a spring animation for bounce effect
              },
            }}
          >
            <Image
              src="https://res.cloudinary.com/ds73yosji/image/upload/v1694948443/aotuo/Tentang_Kami_1_hqjsnv.webp"
              alt="profile 1"
              width={450}
              height={450}
              style={{
                width: isLargerThan768 ? "40%" : "100%",
                height: isLargerThan768 ? "unset" : 300,
                objectFit: "contain",
              }}
            />
            <Stack
              spacing={4}
              w={{
                base: "full",
                md: "60%",
              }}
            >
              <Text
                color="black"
                fontSize={{
                  base: "md",
                  md: "2xl",
                }}
              >
                Seiring dengan kemajuan teknologi, perkembangan di dunia
                otomotif sangatlah cepat. Munculah berbagai macam kendaraan
                canggih bermotor yang menyebabkan polusi karena kandungan gas
                emisi yang sangat berbahaya bagi alam.{" "}
              </Text>
              <Text
                color="black"
                fontSize={{
                  base: "md",
                  md: "2xl",
                }}
              >
                Seiring dengan meningkatnya kendaraan konvensional berpengaruh
                juga terhadap sumber daya alam khususnya bahan baku minyak untuk
                kendaraan semakin berkurang sehingga harga minyak semakin
                tinggi.{" "}
              </Text>
            </Stack>
          </Box>
          <Box
            display="flex"
            alignItems={{
              base: "unset",
              md: "center",
            }}
            justifyContent="space-between"
            gap={10}
            my={10}
            px={4}
            flexDirection={{
              base: "column-reverse",
              md: "row",
            }}
            as={motion.div}
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{
              opacity: 1,
              x: 50,
              transition: {
                duration: 5,
                type: "spring",
              },
            }}
          >
            <Stack
              spacing={4}
              w={{
                base: "full",
                md: "40%",
              }}
            >
              <Text
                color="black"
                fontSize={{
                  base: "md",
                  md: "2xl",
                }}
              >
                PT. Trans Borneo Automotive bekerja sama dengan PT. Yhinzong
                Aotuo Electric Technology membuat inovasi sepeda motor ramah
                lingkungan. Sepeda motor listrik AOTUO.
              </Text>
              <Text
                color="black"
                fontSize={{
                  base: "md",
                  md: "2xl",
                }}
              >
                Sejak 2019 sebelum Pandemi 19 dan sudah menghasilkan ribuan
                moror dengan tipe ROSA 21, JP 25, VISION, DAN STARLIGHT yang
                telah lolos uji dari kementrian perhubungan.
              </Text>
            </Stack>
            <Image
              src="https://res.cloudinary.com/ds73yosji/image/upload/v1694948443/aotuo/Tentang_Kami_2_eoldjb.webp"
              alt="profile 2"
              width={450}
              height={450}
              style={{
                width: isLargerThan768 ? "60%" : "100%",
                height: isLargerThan768 ? "unset" : 300,
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
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
          as={motion.div}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 4.5,
              ease: "easeOut",
            },
          }}
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
            height: "100%",
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
            height: "100%",
          }}
        />
      </Box>
      <Box
        maxW={1200}
        w="full"
        mx="auto"
        display="flex"
        alignItems="center"
        py={8}
        px={4}
      >
        <Stack spacing={12} w="full">
          <Text
            color="red.500"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
          >
            Alamat Kami
          </Text>
          <Box pos="relative" w="full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1373.038138547491!2d116.8590444806981!3d-1.2710964023868123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df146c274e1b19f%3A0x3bf4a385db6e1e18!2sJl.%20Jenderal%20Sudirman%20No.21%2C%20RT.2%2C%20Damai%2C%20Kecamatan%20Balikpapan%20Selatan%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076114!5e0!3m2!1sid!2sid!4v1694362243510!5m2!1sid!2sid"
              width="800px"
              height="600px"
              style={{
                border: 0,
                width: "100%",
                maxWidth: 800,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Box
              bg="white"
              boxShadow="0px 5px 50px 0px #8F8F8F33"
              borderRadius="lg"
              p={5}
              maxW={550}
              w="full"
              pos={{
                base: "relative",
                md: "absolute",
              }}
              top={0}
              bottom={0}
              right={0}
              margin={{
                base: "32px 0px 0px 0px",
                md: "auto 0px",
              }}
              h="fit-content"
            >
              <Stack spacing={3}>
                <HStack spacing={2}>
                  <OfficeIcon />
                  <Text color="red.500" fontWeight="bold" fontSize="4xl">
                    Kantor
                  </Text>
                </HStack>
                <Text color="red.500" fontWeight="semibold" fontSize="2xl">
                  Jl. Jenderal Sudirman No.21
                </Text>
                <hr
                  style={{
                    background: "#E41213",
                    width: "25%",
                    height: 1,
                  }}
                />
                <Text color="red.500" fontWeight="normal" fontSize="2xl">
                  Jl. Jenderal Sudirman No.21, Klandasan Ilir, Kecamatan
                  Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box pos="relative" w="full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.232754285007!2d106.67870587527901!3d-6.099323159827491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0302b9215221%3A0xa9d1744574461f22!2sPergudangan%20Mutiara%20Kosambi%202!5e0!3m2!1sid!2sid!4v1694363182515!5m2!1sid!2sid"
              width="800px"
              height="600px"
              style={{
                border: 0,
                marginLeft: "auto",
                width: "100%",
                maxWidth: 800,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Box
              bg="white"
              boxShadow="0px 5px 50px 0px #8F8F8F33"
              borderRadius="lg"
              p={5}
              maxW={550}
              w="full"
              pos={{
                base: "relative",
                md: "absolute",
              }}
              mt={8}
              top={0}
              bottom={0}
              left={0}
              margin={{
                base: "32px 0px 0px 0px",
                md: "auto 0px",
              }}
              h="fit-content"
            >
              <Stack spacing={3}>
                <HStack spacing={2}>
                  <ObengIcon />
                  <Text color="red.500" fontWeight="bold" fontSize="4xl">
                    Workshop
                  </Text>
                </HStack>
                <Text color="red.500" fontWeight="semibold" fontSize="2xl">
                  Warehousing Mutiara Kosambi 2
                </Text>
                <hr
                  style={{
                    background: "#E41213",
                    width: "25%",
                    height: 1,
                  }}
                />
                <Text color="red.500" fontWeight="normal" fontSize="2xl">
                  Jalan Perancis Pergudangan Mutiara Kosambi 2 Blok B No. 7,
                  Benda, Tangerang, RT.004/RW.008, Benda, Kec. Benda, Kabupaten
                  Tangerang, Banten 15211, Indonesia
                </Text>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

Profil.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Profil;
