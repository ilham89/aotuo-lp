import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface SectionRightProps {
  title: string;
  description: string;
  image: string;
}

const SectionRight = ({ title, description, image }: SectionRightProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Box
      h="full"
      bg="white"
      display="flex"
      justifyContent="space-between"
      gap={4}
      ref={ref}
      maxW={1440}
      w="full"
      mx="auto"
    >
      <Box
        px={{ base: 2, md: 4 }}
        py={{ base: 2, md: 6 }}
        w="full"
        maxW={1440}
        display="flex"
        alignItems="center"
      >
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Animasi awal dari kiri
            animate={{ opacity: 1, x: 0 }} // Animasi selama animasi berlangsung
            transition={{ duration: 3 }}
          >
            <Text
              color="red.500"
              fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              color="red.500"
              fontSize={{ base: "xs", md: "2xl" }}
              maxW="580px"
              fontWeight="medium"
            >
              {description}
            </Text>
          </motion.div>
        )}
      </Box>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Animasi awal dari kanan
          animate={{ opacity: 1, x: 0 }} // Animasi selama animasi berlangsung
          transition={{ duration: 2 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            width={100}
            height={100}
            alt={title}
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom",
            }}
          />
        </motion.div>
      )}
    </Box>
  );
};

export default SectionRight;
