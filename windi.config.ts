import { defineConfig } from "windicss/helpers"
import defaultTheme from "windicss/defaultTheme"

export default defineConfig({
  darkMode: "class",
  shortcuts: {
    "game-btn":
      "mt-5 mx-auto block px-8 py-1 text-white bg-green-500 hover:bg-green-600 dark:(bg-green-600 hover:bg-green-700) rounded text-lg",
  },
  theme: {
    extend: {},
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
})
