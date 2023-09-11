import { Box, Text } from "@chakra-ui/react";

interface SectionRightProps {
  title: string;
  description: string;
  image: string;
}

const SectionRight = ({ title, description, image }: SectionRightProps) => {
  return (
    <Box minH="444px" position="relative">
      <Box
        px={4}
        py={6}
        maxW={1200}
        display="flex"
        alignItems="center"
        mx="auto"
        h="full"
        w="full"
        position="relative"
        zIndex={4}
      >
        <Box>
          <Text
            color="red.500"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text
            color="red.500"
            fontSize={{ base: "lg", md: "2xl" }}
            maxW="580px"
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Box
        position={{
          base: "relative",
          md: "absolute",
        }}
        bottom={0}
        right={0}
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        h={{
          base: "260px",
          md: "444px",
        }}
        maxW="500px"
        w="full"
        zIndex={1}
      />
    </Box>
  );
};

export default SectionRight;
