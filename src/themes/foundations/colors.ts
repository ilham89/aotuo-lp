const colors = {
  black: "#212427",
  red: {
    "50": "#ffdfdf",
    "100": "#ffc5c5",
    "200": "#ff9d9d",
    "300": "#ff6566",
    "400": "#ff3435",
    "500": "#e41213",
    "600": "#c70e0f",
    "700": "#a41011",
    "800": "#881415",
    "900": "#4a0505",
  },
} as const;

export type Colors = typeof colors;

export default colors;
