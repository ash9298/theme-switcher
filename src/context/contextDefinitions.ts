import { createContext } from "react";

export interface ThemeContextType {
  themeName: string;
  setThemeName: (name: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
