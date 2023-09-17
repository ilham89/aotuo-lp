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
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
          to: "/products/starlight",
        },
        {
          title: "JP25",
          to: "/products/jp25",
        },
        {
          title: "ROSA21",
          to: "/products/rosa21",
        },
        {
          title: "VISION",
          to: "/products/vision",
        },
        {
          title: "VISION PRO",
          to: "/products/vision-pro",
        },
      ],
      to: "/produk",
    },
    {
      title: "TENTANG KAMI",
      submenus: [
        {
          title: "Profil Perusahaan",
          to: "/profil",
        },
        {
          title: "Hubungi Kami",
          to: "/hubungi-kami",
        },
        {
          title: "Guideline Produk",
          to: "/produk-guide",
        },
      ],
      to: "/",
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

  useEffect(() => {
    if (router.pathname) {
      onClose();
    }
  }, [router.pathname]);

  return (
    <Box w="full" ref={ref} pos="sticky" top={0} bg="white" zIndex={99}>
      <Box
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        px={5}
        maxW={1200}
        mx="auto"
        h="80px"
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
          <HStack spacing={8} h="full">
            {menus.map((menu, index) => (
              <Fragment key={menu.title}>
                <HStack
                  pos="relative"
                  h="full"
                  px={2}
                  spacing={2}
                  cursor="pointer"
                  onClick={() => {
                    if (menu.submenus.length > 0) {
                      if (selectedIndex === index) {
                        setSelectedIndex(-1);
                      } else {
                        setSelectedIndex(index);
                      }
                    } else {
                      router.push(menu.to);
                    }
                  }}
                  _hover={{
                    background: "red.500",
                    color: "white",
                  }}
                  color="red.500"
                >
                  <Text fontWeight="bold">{menu.title}</Text>
                  {!!menu.submenus.length && <ChevronDownIcon fontSize={24} />}

                  <Collapse
                    in={selectedIndex === index}
                    style={{
                      position: "absolute",
                      width: "300px",
                      bottom: selectedIndex === 1 ? -190 : -125,
                      zIndex: "10",
                      background: "white",
                      borderRadius: 16,
                      boxShadow: "0px 5px 30px 0px #B2B2B229",
                      padding: 16,
                      left: -75,
                      margin: "0px auto",
                    }}
                  >
                    <Stack spacing={2}>
                      {menu.submenus.map((sub) => (
                        <Text
                          fontWeight="bold"
                          color="red.500"
                          cursor="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(sub.to);
                          }}
                          key={sub.title}
                        >
                          {sub.title}
                        </Text>
                      ))}
                    </Stack>
                  </Collapse>
                </HStack>
              </Fragment>
            ))}
            <Button
              colorScheme="red"
              onClick={() => router.push("/gabung-mitra")}
            >
              GABUNG MITRA
            </Button>
          </HStack>
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
            <Stack spacing={5}>
              {menus.map((menu, index) => (
                <Fragment key={menu.title}>
                  <HStack
                    spacing={2}
                    cursor="pointer"
                    onClick={() => {
                      if (menu.submenus.length > 0) {
                        if (selectedIndex === index) {
                          setSelectedIndex(-1);
                        } else {
                          setSelectedIndex(index);
                        }
                      } else {
                        router.push(menu.to);
                      }
                    }}
                  >
                    <Text color="red.500" fontWeight="bold">
                      {menu.title}
                    </Text>
                    {!!menu.submenus.length && (
                      <>
                        {selectedIndex === index ? (
                          <ChevronUpIcon fontSize={24} color="red.500" />
                        ) : (
                          <ChevronDownIcon fontSize={24} color="red.500" />
                        )}
                      </>
                    )}
                  </HStack>
                  <Collapse in={selectedIndex === index}>
                    <Stack spacing={2}>
                      {menu.submenus.map((sub) => (
                        <Text
                          cursor="pointer"
                          key={sub.title}
                          color="red.500"
                          fontWeight="bold"
                          onClick={() => router.push(sub.to)}
                        >
                          {sub.title}
                        </Text>
                      ))}
                    </Stack>
                  </Collapse>
                </Fragment>
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
