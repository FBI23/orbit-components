// @flow
import { getTokens } from "@kiwicom/orbit-design-tokens";

/*
  TODO: missing some colors
  product: darkHover, darkActive
  orange: darkHover, darkActive
  red: darkHover, darkActive
  green: darkHover, darkActive
  blue: darkHover, darkActive
 */

const foundation = {
  palette: {
    product: {
      light: "#ECF8F7",
      lightHover: "#D6F0EE",
      lightActive: "#C0E8E4",
      dark: "#007F6D",
    },
    ink: {
      light: "#5F738C",
      lightHover: "#52647A",
      lightActive: "#465567",
      normal: "#252A31",
      normalHover: "#181B20",
      normalActive: "#0B0C0F",
    },
    orange: {
      light: "#FDF0E3",
      lightHover: "#FAE2C7",
      lightActive: "#F8D3AB",
      normal: "#F9971E",
      normalHover: "#F38906",
      normalActive: "#D67906",
      dark: "#8E2A06",
    },
    red: {
      light: "#FAEAEA",
      lightHover: "#F4D2D2",
      lightActive: "#EEB9B9",
      normal: "#D21C1C",
      normalHover: "#bd1919",
      normalActive: "#9D1515",
      dark: "#760909",
    },
    green: {
      light: "#EBF4EC",
      lightHover: "#D7EAD9",
      lightActive: "#C3DFC7",
      normal: "#28A138",
      normalHover: "#238B31",
      normalActive: "#1D7228",
      dark: "#235C2B",
    },
    blue: {
      light: "#E5F7FF",
      lightHover: "#C7EEFF",
      lightActive: "#A8E5FF",
      normal: "#0172CB",
      normalHover: "#0161AC",
      normalActive: "#01508E",
      dark: "#004680",
    },
  },
};

const orbit = getTokens(foundation);

export default {
  orbit,
  rtl: false,
};
