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
      title: "Apa yang menjadi keunggulan Aotuo Electric Bikes?",
      answer:
        "<p>Aotuo Electric Bikes mengedepankan mutu dan kualitas demi kenyamanan berkendara. Aotuo Electric Bikes dirancang oleh para ahli otomotif dengan design futuristik ramah lingkungan. Dibekali oleh controller yang mumpuni, sistem kelistrikan yang sudah teruji kualitasnya, baterai yang memiliki jarak tempuh jauh, handling yang stabil, jok yang nyaman, serta sistem pengereman ABS system demi kenyamanan dan keamanan pengguna. Tak ketinggalan, Aotuo Electric Bikes dilengkapi dengan USB port output guna mengisi daya smartphone pengguna dalam perjalanan.</p>",
    },
    {
      title:
        "Apakah aman jika Aotuo Electric Bikes dicuci layaknya motor konvensional ?",
      answer:
        "<p><Tentu saja sangat aman. Karena Aotuo Electric Bikes di rancang oleh para ahli otomotif dengan design futuristik yang sudah teruji kualitasnya supaya tahan dalam berbagai medan dan cuaca. Sehingga pengendara Aotuo Electric Bikes dijamin nyaman dan aman./p>",
    },
    {
      title: "Apakah Aotuo Electric Bikes dapat melewati genangan air?",
      answer:
        "<p>Bisa saja, asalkan genangan air tidak melebihi ketinggian roda. Apabila genangan melebihi ketinggian roda, tentu saja akan menyebabkan motor sulit bergerak, bila hal tersebut terjadi dalam jangka waktu lama dapat mengurangi umur dinamo elektrik.</p>",
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
      title:
        "Berapa ukuran daya listrik untuk pengisian daya baterai Aotuo Electric Bikes dan perhitungan biayanya?",
      answer:
        "<p>Aotuo Electric Bikes menggunakan baterai SLA berkapasitas 60V|20Ah dan 72V|20Ah yang dapat diisi ulang menggunakan daya listrik minimal 450 VA (Volt Ampere). Dengan estimasi waktu pengisian ±4jam (dari 0%-10%) disertai fitur pengisian cepat dan pemotong daya otomatis (apabila sudah penuh).</p><br /><p>Baterai Aotuo Electric Bikes dapat diisi ulang menggunakan pengisi daya bawaan dan dapat diisi ulang dimana saja asalkan ada arus listrik pengisi daya.</p><br /><p>Berikut rincian untuk menghitung besaran rupiah yang dikeluarkan setiap pengisian daya Aotuo Electric Bikes</p><br /><p>Tarif Listrik per kWh untuk Pelanggan Rumah Tangga Tahun 2023:</p><br /><img src='https://res.cloudinary.com/ds73yosji/image/upload/v1695635703/aotuo/Frame_108_sucwxx.png' alt='table-one' style='object-fit:contain; width: 100%; height:100%; margin-bottom: 24px' /><p>Tarif Listrik per kWh untuk Bisnis & Industri:</p><br /> <img src='https://res.cloudinary.com/ds73yosji/image/upload/v1695635925/aotuo/Frame_109_wdubwb.png' alt='table-two' style='object-fit:contain; width: 100%; height:100%; margin-bottom: 24px' /><p>Untuk menghitung keluaran biaya kita gunakan rumus kWh × tarif listrik per kWh= hasil.</p><br /><p>Rumus untuk menghitung kWh kita gunakan rumus</p><p>(Watt × jam) : 1000 = kWh.</p><br /><p>Untuk mengetahui jumlah daya (Watt) yang dibutuhkan kita gunakan rumus Volt input charger × Ampere input charger= Watt</p><br /><p>Kita ambil contoh menghitung biaya sekali pengisian ulang daya Aotuo Electric Bikes ROSA21 dengan input daya AC 200V, output DC 3.0 A menggunakan golongan daya tegangan listrik ringan rumah tangga 900VA.</p><br /><p>(Watt) × waktu pengisian : 1000</p><p>=(200V × 3A) × 5 jam : 1000</p><p>=600 × 5 : 1000</p><p>=3000 : 1000</p><p>=3 kWh</p><br /><p>Untuk mengetahui biaya pengisian, kWh dikalikan dengan tarif per kWh.</p><br /><p>3 kWh × tarif/kWh</p><p>=3 kWh × Rp. 1.352,-</p><p>=Rp. 4.056,-</p><br /><p>Maka, biaya sekali pengisian daya Aotuo Electric Bikes ROSA21 selama 5 jam sebesar Rp. 4.056,-</p>",
    },
    {
      title: "Apakah Motor Listrik Aotuo perlu servis rutin?",
      answer:
        "<p>Motor Listrik Aotuo tidak menggunakan mesin, namun menggunakan dinamo motor elektrik sehingga tidak perlu mengganti oli. Kemungkinan servis rutin Motor Listrik Aotuo berada pada kampas rem, kelistrikan, baterai aki, dinamo yang berjangka tahunan sehingga sangat ramah di kantong para customer.</p>",
    },
    {
      title: "Bagaimana dengan Garansi Aotuo Electric Bikes?",
      answer:
        "<p>Kami menyediakan layanan garansi motor dan sparepart selama 1 tahun dari tanggal pembelian.</p><br /><p>*Syarat dan ketentuan berlaku (Tidak atas kelalaian pengguna)</p>",
    },
    {
      title: "Dimana saya bisa mendapatkan suku cadang Aotuo Electric Bikes?",
      answer:
        "<p>Anda bisa mendapatkan pelayanan servis dan suku cadang di dealer resmi Aotuo Electric Bikes yang tersebar dibeberapa kota besar di Indonesia.</p>",
    },
    {
      title: "Apakah Aotuo Electric Bikes dikenakan pajak tahunan?",
      answer:
        "<p>Untuk diketahui, pemerintah sendiri memang tengah mendorong transformasi dari motor berbahan bakar minyak menjadi motor listrik yang lebih ramah lingkungan. Salah satu caranya adalah dengan memberikan insentif. Insentif ini termasuk adanya potongan atau keringanan pajak.</p><br /><p>Harga pajak Aotuo Electric Bikes adalah gratis untuk PKB dan SWDKLLJ sebesar Rp. 35.000 sejak tahun 2023, sesuai dengan Peraturan Menteri Dalam Negeri No. 6 Tahun 2023.</p><br /><p>Pajak motor listrik termasuk ke dalam Pajak Kendaraan Bermotor (PKB) yang harus oleh pemilik kendaraan. Selain itu, pengguna motor listrik juga harus membayar Tarif Sumbangan Wajib Dana Kecelakaan Lalu Lintas Jalan (SWDKLLJ) sesuai Peraturan Menteri Keuangan RI Nomor 36/PMK.010/2008.<br /><br />Masyarakat perlu melakukan pembayaran pajak motor listrik di kantor SAMSAT sesuai dengan wilayah tempat tinggal. Sebenarnya, jumlah yang perlu dibayarkan oleh pemilik motor listrik tertulis di dalam STNK. Akan tetapi, berikut cara penghitungan untuk estimasinya!<br /><br />Pertama, kamu harus mengetahui 2% dari harga Aotuo Electric Bikes yang anda beli. Misalnya, anda membeli Aotuo JP25 dengan harga Rp.19.000.000,-. Dengan demikian, 2% dari harga Aotuo JP25 ini kira-kira sebesar Rp380.000,-.<br /><br />Kedua, anda harus mengetahui 10% dari hasil perhitungan pertama. Masih dengan contoh yang sama, anda perlu mengetahui nilai 10% nya, yaitu Rp38.000,-. Harga kedua ini lah yang menjadi estimasi untuk mengetahui harga PKB yang perlu kamu bayarkan setiap tahunnya.<br /><br />Ketiga, anda juga harus membayar Sumbangan Wajib Dana Kecelakaan Lalu Lintas (SWDKLLJ) yang berbeda-beda setiap unitnya. Range tarif SWDKLLJ jika anda menggunakan unit Aotuo Electric Bikes adalah Rp38.000,- sampai dengan Rp51.000,-.<br /><br />Jadi estimasi yang akan anda bayarkan jika menggunakan Aotuo Electric Bikes adalah R38.000,- ditambah dengan Rp38.000,- yang jumlahnya Rp76.000,-. Harga pajak tahunan motor listrik memang lebih murah dari motor konvensional. Akan tetapi, harga ini merupakan harga estimasi. Harga akurat yang akan anda bayarkan ada di STNK, yaitu pada bagian PKB dan SWDKLLJ.</p><br /><p>Selain pajaknya yang lebih murah, penggunaan motor listrik juga hanya memakan biaya 50 persen dari biaya bensin motor konvensional. Motor listrik juga lebih murah dalam biaya perawatan. Pasalnya tidak perlu rutin ganti oli, mengganti busi, dan lain sebagainya. Servis rutin motor listrik pun hanya pemeriksaan mekanis.</p><br /><p>Adapun pemeriksaan mekanis yang dilakukan termasuk periksa kondisi baterai (battery health), atau penggantian cairan rem depan dan belakang.</p>",
    },
    {
      title: "Apa saja syarat menjadi dealer resmi Motor Listrik Aotuo?",
      answer:
        "<p>Ada beberapa persyaratan yang perlu dipenuhi. Dealer Aotuo memiliki tiga jaringan atau layanan kemitraan, yaitu:</p> <br /><ul><li>H1: Merupakan dealer (penjualan) yang berhak menjual Sepeda Motor Listrik Aotuo</li><li>H2: (Bengkel Aotuo ) yang berhak menerima perawatan berkala dari Sepeda Motor Listrik Aotuo yang baru serta Menerima Kartu menerima servis dari Sepeda Motor Listrik Aotuo lama.</li><li>H3: (Sparepart) yang berhak menjual sparepart dari Motor Listrik Aotuo.</li></ul><br /><p>Status usaha bisa dirangkap menjadi H1,H2,H3 ini dari maindealer dan kemampuan servis serta ketersediaan sparepart.</p>",
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
        bgImage="https://res.cloudinary.com/ds73yosji/image/upload/v1694748757/aotuo/Background_FAQ_ciisfn.webp"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        h="378px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxW={1440}
        mx="auto"
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
