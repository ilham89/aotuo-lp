import BaseLayout from "@/layouts/base";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Stack, Text } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

const Faq = () => {
  const [indexOpen, setIndexOpen] = useState<number[]>([]);
  const faqs = [
    {
      title: "Apa itu Aotuo Electric Bikes",
      answer:
        "<p>Aotuo Electric Bikes adalah merek sepeda listrik asal China yang diproduksi oleh PT. Trans Borneo Automotive. Aotuo pertama kali diluncurkan di Indonesia pada tahun 2019.</p>",
    },
    {
      title: "Apa saja syarat menjadi dealer resmi Motor Listrik Aotuo?",
      answer:
        "<p>Ada beberapa persyaratan yang perlu dipenuhi. Dealer Aotuo memiliki tiga jaringan atau layanan kemitraan, yaitu:</p> <br /><ul><li>H1: Merupakan dealer (penjualan) yang berhak menjual Sepeda Motor Listrik Aotuo</li><li>H2: (Bengkel Aotuo ) yang berhak menerima perawatan berkala dari Sepeda Motor Listrik Aotuo yang baru serta Menerima Kartu menerima servis dari Sepeda Motor Listrik Aotuo lama.</li><li>H3: (Sparepart) yang berhak menjual sparepart dari Motor Listrik Aotuo.</li></ul><br /><p>Status usaha bisa dirangkap menjadi H1,H2,H3 ini dari maindealer dan kemampuan servis serta ketersediaan sparepart.</p>",
    },
    {
      title: "Bagaimana pengisian ulang daya Motor Listrik Aotuo?",
      answer:
        "<p>Motor Listrik Aotuo menggunakan baterai aki 12V 20A yang bisa dicharge dimana saja melalui stop kontak biasa.</p> <br/><p>Charger Motor Listrik Aotuo dilengkapi fitur fast charging. Sehingga mempercepat waktu pengisian daya. Motor Listrik Aotuo hanya butuh waktu kurang lebih 4 jam untuk mengisi ulang daya (0%-100%).</p> <br /><p>Anda tidak perlu khawatir apabila lupa mencabut pengisi daya karena Motor Listrik Aotuo juga dilengkapi fitur Auto Cut System sebagai pemutus arus otomatis jika daya baterai sudah terisi penuh.</p>",
    },
    {
      title: "Berapa jumlah daya yang digunakan?",
      answer:
        "<p>Pengisian ulang daya Motor Listrik Aotuo hanya membutuhkan daya 2kWh (Kilo Watt per jam). Jika dirupiahkan hanya butuh kurang lebih 2 ribu rupiah sekali pengisian ulang daya (0%-100%). Tentu lebih murah dibandingkan penggunaan kendaraan berbahan bakar minyak.</p>",
    },
    {
      title: "Apakah Motor Listrik Aotuo perlu servis rutin?",
      answer:
        "<p>Motor Listrik Aotuo tidak menggunakan mesin, namun menggunakan dinamo motor elektrik sehingga tidak perlu mengganti oli. Kemungkinan servis rutin Motor Listrik Aotuo berada pada kampas rem, kelistrikan, baterai aki, dinamo yang berjangka tahunan sehingga sangat ramah di kantong para customer.</p>",
    },
  ];

  const onOpenFaq = (index: number) => {
    const newIndexOpen = [...indexOpen];

    const isExist = indexOpen.indexOf(index);

    if (isExist === -1) {
      newIndexOpen.push(index);
    } else {
      newIndexOpen.splice(isExist, 1);
    }

    setIndexOpen(newIndexOpen);
  };
  return (
    <Box>
      <Box
        w="full"
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694147317/aotuo/IMG_20230824_125924_037-01_1_nvkfkf.png"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        h="378px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" fontSize="64px" fontWeight="extrabold">
          FAQ
        </Text>
      </Box>
      <Box py={8} px={4}>
        <Stack spacing={2}>
          <Text
            color="#212427"
            fontWeight="bold"
            fontSize={{
              base: "2xl",
              md: "32px",
            }}
            textAlign="center"
          >
            Pertanyaan Yang Sering Diajukan
          </Text>
          <Text
            color="#212427"
            fontWeight="normal"
            fontSize={{
              base: "md",
              md: "xl",
            }}
            textAlign="center"
          >
            Ini adalah tempat di mana semua jawaban terhadap
            pertanyaan-pertanyaan Anda berada.
          </Text>
        </Stack>
        <Stack spacing={3} alignItems="center" mt={6}>
          {faqs.map((faq, index) => (
            <Box
              key={faq.title}
              border="1px solid"
              borderColor={
                indexOpen.indexOf(index) !== -1 ? "red.500" : "C8D7D2"
              }
              borderRadius="lg"
              py={5}
              px={6}
              maxWidth={800}
              w="full"
              onClick={() => onOpenFaq(index)}
              boxShadow={
                indexOpen.indexOf(index) !== -1
                  ? "0px 5px 30px 0px #E412131A"
                  : "0px 5px 30px 0px #B2B2B21A"
              }
            >
              <Stack spacing={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    color={
                      indexOpen.indexOf(index) !== -1 ? "red.500" : "black"
                    }
                    fontSize={{
                      base: "md",
                      md: "xl",
                    }}
                    fontWeight="semibold"
                  >
                    {faq.title}
                  </Text>
                  {indexOpen.indexOf(index) !== -1 ? (
                    <ChevronUpIcon color="red.500" fontSize="3xl" />
                  ) : (
                    <ChevronDownIcon color="red.500" fontSize="3xl" />
                  )}
                </Box>

                <Collapse in={indexOpen.indexOf(index) !== -1} animateOpacity>
                  <Text
                    color="#212427"
                    fontSize={{
                      base: "md",
                      md: "xl",
                    }}
                    fontWeight="normal"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    sx={{
                      "ol, ul": {
                        padding: "revert",
                      },
                    }}
                  />
                </Collapse>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

Faq.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Faq;
