import {
  Box,
  Button,
  Collapse,
  HStack,
  Hide,
  IconButton,
  Show,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const menus = [
    {
      title: "BERANDA",
      submenus: [],
      to: "/",
    },
    {
      title: "PRODUK",
      submenus: [
        {
          title: "STARLIGHT",
          to: "/produk",
        },
        {
          title: "JP25",
          to: "/produk",
        },
        {
          title: "ROSA21",
          to: "/produk",
        },
        {
          title: "VISION",
          to: "/produk",
        },
        {
          title: "VISION PRO",
          to: "/produk",
        },
      ],
      to: "/produk",
    },
    {
      title: "TENTANG KAMI",
      submenus: [],
      to: "/hubungi-kami",
    },
    {
      title: "FAQ",
      submenus: [],
      to: "/faq",
    },
  ];

  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const ref = useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <Box w="full" ref={ref}>
      <Box
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        px={5}
        py={6}
        maxW={1200}
        mx="auto"
      >
        <Image
          src={Logo}
          alt="logo"
          width={124}
          height={36}
          onClick={() => router.push("/")}
          style={{
            cursor: "pointer",
          }}
        />
        <Hide above="md">
          <IconButton
            aria-label="Hamburger menu"
            icon={
              isOpen ? (
                <CloseIcon color="black" />
              ) : (
                <HamburgerIcon color="black" />
              )
            }
            variant="ghost"
            onClick={onToggle}
          />
        </Hide>
        <Show above="md">
          <Box>
            <HStack spacing={10}>
              {menus.map((menu) => (
                <HStack key={menu.title} spacing={2} cursor="pointer">
                  <Text color="red.500" fontWeight="bold">
                    {menu.title}
                  </Text>
                  {!!menu.submenus.length && (
                    <ChevronDownIcon fontSize={24} color="red.500" />
                  )}
                </HStack>
              ))}
              <Button
                colorScheme="red"
                onClick={() => router.push("/gabung-mitra")}
              >
                GABUNG MITRA
              </Button>
            </HStack>
          </Box>
        </Show>
      </Box>
      <Hide above="md">
        <Collapse
          in={isOpen}
          style={{ position: "absolute", width: "100%", zIndex: "10" }}
        >
          <Box
            px={6}
            py={3}
            color="black"
            shadow="sm"
            bg="white"
            borderTop="1px solid"
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              {menus.map((menu) => (
                <HStack key={menu.title} spacing={2} cursor="pointer">
                  <Text color="red.500" fontWeight="bold">
                    {menu.title}
                  </Text>
                  {!!menu.submenus.length && (
                    <ChevronDownIcon fontSize={24} color="red.500" />
                  )}
                </HStack>
              ))}
              <Button
                colorScheme="red"
                onClick={() => router.push("/gabung-mitra")}
              >
                GABUNG MITRA
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Hide>
    </Box>
  );
};

export default Header;
