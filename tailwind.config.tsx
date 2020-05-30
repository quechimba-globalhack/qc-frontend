const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: "",
  important: true,
  purge: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {},
    screens: {
      mobile: "0px",
      landscape: "481px",
      tablet: "768px",
      desktop: "1025px",
      ultradesktop: "1281px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      gray: {
        100: "#000000BD",
        200: "#4E4E4E",
        300: "#000000A1",
        400: "#707070",
        500: "#929292",
        600: "#EBEBEB",
      },
      green: {
        100: "#057175",
        200: "#149DA2",
      },
      red: "#FF0000",
    },
    backgroundColor: (theme) => theme("colors"),
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: (theme) => theme("colors"),
    textColor: (theme) => theme("colors"),
    placeholderColor: (theme) => theme("colors"),
    borderRadius: {},
    borderWidth: {},
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "100": "1",
    },
  },
  variants: {
    backgroundImage: ["responsive", "hover"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    gradients: ["responsive", "hover"],
    inset: ["responsive"],
    minHeight: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      }

      addComponents(buttons)
    })
  ],
};
