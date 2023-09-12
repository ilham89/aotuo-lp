import { Box, HStack, Text } from "@chakra-ui/react";

interface SectionLeftProps {
  title: string;
  description: string;
  image: string;
}
const SectionLeft = ({ title, description, image }: SectionLeftProps) => {
  return (
    <Box minH="444px" h="full" position="relative" bg="red.500">
      <Box
        position={{
          base: "relative",
          md: "absolute",
        }}
        bottom={0}
        left={0}
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        h={{
          base: "260px",
          md: "444px",
        }}
        maxW="500px"
        w="full"
        bgPos="center"
        sx={{
          zIndex: 1,
        }}
      />
      <Box
        px={4}
        py={6}
        w="full"
        maxW={1200}
        display="flex"
        alignItems="center"
        mx="auto"
        minH={{
          base: "unset",
          md: "444px",
        }}
        justifyContent={{
          base: "flex-start",
          md: "flex-end",
        }}
        sx={{
          zIndex: 999,
        }}
        position="relative"
      >
        <Box>
          <Text
            color="white"
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text color="white" fontSize={{ base: "md", md: "2xl" }} maxW="580px">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionLeft;
