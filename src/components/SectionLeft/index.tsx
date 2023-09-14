import { Box, BoxProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

interface SectionLeftProps {
  title: string;
  description: string;
  image: string | StaticImport;
}
const SectionLeft = ({ title, description, image }: SectionLeftProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Box
      h="full"
      bg="red.500"
      display="flex"
      justifyContent="space-between"
      gap={4}
      ref={ref}
      maxW={1440}
      w="full"
      mx="auto"
    >
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Animasi awal dari kiri
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
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </motion.div>
      )}

      <Box
        px={{ base: 2, md: 4 }}
        py={{ base: 2, md: 6 }}
        w="full"
        maxW={1440}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Animasi awal dari kiri
            animate={{ opacity: 1, x: 0 }} // Animasi selama animasi berlangsung
            transition={{ duration: 3 }}
          >
            <Text
              color="white"
              fontSize={{ base: "lg", md: "3xl", lg: "5xl" }}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              color="white"
              fontSize={{ base: "xs", md: "2xl" }}
              fontWeight="medium"
              maxW="580px"
            >
              {description}
            </Text>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default SectionLeft;
