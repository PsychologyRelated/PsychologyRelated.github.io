import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const activeLabelStyles = {
  transform: "scale(0.9) translateY(-25px)",
  color: "#26282ac9",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      direction: "ltr",
      "html, body": {
        lineHeight: "tall",
        margin: "0px",
        padding: "0px",
        color: colors.bunkerBlack,
      },
    },
    fonts: {
      heading: `Playfair Display', serif`,
    },
  },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
  breakpoints: {
    sm: "22.563em",
    md: "63.375em",
    // md: "25.9em",
    lg: "80.5em",
    xl: "120em",
  },
});

export default theme;
