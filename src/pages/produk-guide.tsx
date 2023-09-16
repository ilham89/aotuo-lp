//@ts-nocheck
import BaseLayout from "@/layouts/base";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import HTMLFlipBook from "react-pageflip";

type PageInterfaceProps = {
  number: number;
  image: string;
};
type Ref = HTMLDivElement;

const Page = React.forwardRef<Ref, PageInterfaceProps>(
  ({ number, image }, ref) => {
    return (
      <div className={number % 2 === 0 ? "page-even" : "page-odd"} ref={ref}>
        <Box
          bgSize="contain"
          bgImage={image}
          bgRepeat="no-repeat"
          bgPos="center"
          h="full"
        />
      </div>
    );
  }
);

Page.displayName = "Page";

const ProdukGuide = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box maxW={1200} w="full" mx="auto" py={isLargerThan768 ? 8 : 4} px={5}>
      <Text
        color="red.500"
        fontSize={isLargerThan768 ? "4xl" : "2xl"}
        fontWeight="bold"
        textAlign="center"
        mb={isLargerThan768 ? 8 : 4}
      >
        Guide Produk
      </Text>
      <div>
        <HTMLFlipBook
          width={isLargerThan768 ? 550 : 340}
          height={isLargerThan768 ? 650 : 400}
          minWidth={500}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
        >
          <Page
            number={1}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883553/aotuo/Left_Side_1_bnpumx.webp"
          />
          <Page
            number={2}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883609/aotuo/Right_Side_1_ivpqwt.webp"
          />
          <Page
            number={3}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883607/aotuo/Left_Side_2_hapesm.webp"
          />
          <Page
            number={4}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883610/aotuo/Right_Side_2_abhtf7.webp"
          />
          <Page
            number={5}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883609/aotuo/Left_Side_3_epsrdm.webp"
          />
          <Page
            number={6}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883610/aotuo/Right_Side_3_yhwfnu.webp"
          />
          <Page
            number={7}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883609/aotuo/Left_Side_4_ai5cgn.webp"
          />
          <Page
            number={8}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883610/aotuo/Right_Side_4_s6k5yc.webp"
          />
          <Page
            number={9}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883609/aotuo/Left_Side_5_rirrzr.webp"
          />
          <Page
            number={10}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694883611/aotuo/Right_Side_5_qyu4gd.webp"
          />
        </HTMLFlipBook>
      </div>
    </Box>
  );
};

ProdukGuide.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProdukGuide;
