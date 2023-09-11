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
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694336562/aotuo/page%201.png"
          />
          <Page
            number={2}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694336990/aotuo/page%202.png"
          />
          <Page
            number={3}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337057/aotuo/page%203.png"
          />
          <Page
            number={4}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337123/aotuo/page%204.png"
          />
          <Page
            number={5}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337183/aotuo/page%205.png"
          />
          <Page
            number={6}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337439/aotuo/page%206.png"
          />
          <Page
            number={7}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337501/aotuo/page%207.png"
          />
          <Page
            number={8}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337567/aotuo/page%208.png"
          />
          <Page
            number={9}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337605/aotuo/page%209.png"
          />
          <Page
            number={10}
            image="https://res.cloudinary.com/ds73yosji/image/upload/v1694337669/aotuo/page%2010.png"
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
