export const MyTheme = {
  /***************** COLORS *****************/
  colors: {
    primary: {
      100: "#FFF6D6",
      200: "#FFEEB3",
      300: "#FEE280",
      400: "#FED74D",
      500: "#FECB18",
      600: "#E5B201",
      700: "#BC9201",
      800: "#705700",
      900: "#3D2F00",
    },
    secondary: {
      100: "#ECF3F9",
      200: "#A9C0D6",
      300: "#6A8EAF",
      400: "#42688A",
      500: "#2F4559",
      600: "#233443",
      700: "#1A2732",
    },
    tertiary: {
      100: "#D7F4E3",
      200: "#A4E5BF",
      300: "#70DB9D",
      400: "#33CC73",
      500: "#0AC257",
      600: "#009940",
      700: "#00662B",
      800: "#004D20",
      900: "#003315",
    },
    gray: {
      100: "#FBFBFB",
      200: "#F4F5F6",
      300: "#ECEDEF",
      400: "#E0E3E5",
      500: "#C7CCD1",
      600: "#8F99A3",
      700: "#67737E",
      800: "#454D54",
    },
    neutrals: {
      100: "#FFFFFF",
      900: "#000000",
    },
    success: {
      100: "#EBF9F1",
      300: "#D7F4E3",
      400: "#009940",
      500: "#0AC257",
      700: "#00662B",
      900: "#003315",
    },
    warning: {
      100: "#FEF4E6",
      300: "#FEEACD",
      500: "#F2930D",
      700: "#A86200",
      900: "#4D2D00",
    },
    danger: {
      100: "#FFF0F2",
      300: "#FFE0E6",
      500: "#DF2040",
      700: "#971128",
      900: "#37060E",
    },
    info: {
      100: "#E7F0FE",
      300: "#C0D7FC",
      500: "#176BF3",
      700: "#0946AA",
      900: "#052861",
    },
  },

  /**************** SPACING ****************/
  shadows: {
    soft: "0.125rem 0.25rem 0.5rem rgba(34, 38, 42, 0.05)",
    medium:
      "0.125rem 0.25rem 0.5rem rgba(34, 38, 42, 0.03), 0.25rem 0.5rem 1rem rgba(34, 38, 42, 0.05)",
    hard: "0.125rem 0.25rem 0.5rem rgba(34, 38, 42, 0.05), 0.25rem 0.5rem 1.5rem rgba(34, 38, 42, 0.1)",
    softInverted: "0.125rem -0.25rem 0.5rem rgba(34, 38, 42, 0.05)",
    mediumInverted:
      "0.125rem -0.25rem 0.5rem rgba(34, 38, 42, 0.03), 0.25rem -0.5rem 1rem rgba(34, 38, 42, 0.05)",
    hardInverted:
      "0.125rem -0.25rem 0.5rem rgba(34, 38, 42, 0.05), 0.25rem -0.5rem 1.5rem rgba(34, 38, 42, 0.1)",
  },

  utils: {
    spacing: (...values: number[]) =>
      values
        .slice(0, 4)
        .reduce((acc, value) => (acc += `${value * 4}px `), "")
        .trim(),
  },

  /**************** SPACING ****************/
  // rem Calculation based on a 8px system
  spacing: {
    xxxl: "3rem",
    xxl: "2.5rem",
    xl: "2rem",
    lg: "1.5rem",
    md: "1rem",
    sm: "0.75rem",
    xs: "0.5rem",
    xxs: "0.25rem",
    xxxs: "0.125rem",
  },

  /**************** CORNERS ****************/
  // rem Calculation based on a 8px system
  corners: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },

  breakpoints: {
    sm: "@media (max-width: 639px)",
    md: "@media (max-width: 767px)",
    lg: "@media (max-width: 1023px)",
    xl: "@media (max-width: 1279px)",
    xxl: "@media (max-width: 1535px)",
  },

  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "max-width",
    // rem
    container: {
      sm: 40,
      md: 47,
      lg: 63,
    },
    // em
    breakpoints: {
      xs: 0,
      sm: 40,
      md: 47,
      lg: 63,
    },
  },
};
