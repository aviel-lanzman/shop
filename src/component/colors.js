import { createContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#add8e6",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(null);
export default ThemeContext;
