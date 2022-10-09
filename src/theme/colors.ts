import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#faf9f9",
  backgroundDisabled: "#ebe9e9",
  contrast: "#261313",
  invertedContrast: "#ffffff",
  input: "#f4eaea",
  tertiary: "#f5efef",
  text: "#7a2a2a",
  textDisabled: "#c4bdbd",
  textSubtle: "#ba8080",
  borderColor: "#ebe9e9",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ffe6e6 0%, #ffefef 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ff2020",
  background: "#353131",
  backgroundDisabled: "#423737",
  contrast: "#ffffff",
  invertedContrast: "#261313",
  input: "#5a3f3f",
  primaryDark: "#a10000",
  tertiary: "#473535",
  text: "#fce2e2",
  textDisabled: "#716161",
  textSubtle: "#d4c4c4",
  borderColor: "#634b4b",
  card: "#2c2626",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c3131 0%, #542a2a 100%)",
  },
};
