export const styles = {
  global: () => ({
    body: {
      minHeight: "100vh",
      color: "black",
      fontFamily: "Lato",
    },
    ".slick-list": {
      padding: "0px 16px",
    },
    ".page-odd": {
      width: "100%",
      // border: "2px solid black",
    },
    ".page-even": {
      background: "white",
      width: "100%",
      // border: "2px solid black",
    },
    ".slick-prev:before, .slick-next:before": {
      color: "red.500",
      fontSize: "32px",
    },
    ".slick-next": {
      right: "-15px",
    },
  }),
};
