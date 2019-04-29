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
      dark: "#00826F",
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
      light: "#FDF3E8",
      lightHover: "#FBE4CB",
      lightActive: "#F8D5AF",
      normal: "#F9971E",
      normalHover: "#F38906",
      normalActive: "#D67906",
      dark: "#8E2A06",
    },
    red: {
      light: "#FBEEEE",
      lightHover: "#F5D6D6",
      lightActive: "#EFBDBD",
      normal: "#D21C1C",
      normalHover: "#bd1919",
      normalActive: "#9D1515",
      dark: "#760909",
    },
    green: {
      light: "#EEF6EF",
      lightHover: "#DAECDD",
      lightActive: "#C6E1CA",
      normal: "#28A138",
      normalHover: "#238B31",
      normalActive: "#1D7228",
      dark: "#235C2B",
    },
    blue: {
      light: "#EBF9FF",
      lightHover: "#CCF0FF",
      lightActive: "#ADE7FF",
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
