import { type DefaultTheme } from "styled-components";

export interface Theme {
  name: string;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    cardBackground: string;
    headerBackground: string;
    buttonText: string;
  };
  typography: {
    fontFamily: string;
    headerSize: string;
    bodySize: string;
  };
  spacing: {
    padding: string;
    margin: string;
    gap: string;
  };
  layout: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
}

export const theme1: Theme = {
  name: "Theme 1",
  colors: {
    background: "#f8f8f8",
    text: "#333",
    primary: "#4a90e2",
    secondary: "#f0f0f0",
    cardBackground: "#fff",
    headerBackground: "#fff",
    buttonText: "#fff",
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    headerSize: "2.5rem",
    bodySize: "1rem",
  },
  spacing: {
    padding: "1.5rem",
    margin: "1.5rem",
    gap: "1rem",
  },
  layout: "minimalist",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export const theme2: Theme = {
  name: "Theme 2",
  colors: {
    background: "#121212",
    text: "#e0e0e0",
    primary: "#bb86fc",
    secondary: "#2c2c2c",
    cardBackground: "#1e1e1e",
    headerBackground: "#1e1e1e",
    buttonText: "#121212",
  },
  typography: {
    fontFamily: "Georgia, serif",
    headerSize: "3rem",
    bodySize: "1.1rem",
  },
  spacing: {
    padding: "2rem",
    margin: "2rem",
    gap: "2rem",
  },
  layout: "darkSidebar",
  borderRadius: "4px",
  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)",
};

export const theme3: Theme = {
  name: "Theme 3",
  colors: {
    background: "#e8f5e9",
    text: "#37474f",
    primary: "#ff8a65",
    secondary: "#aed581",
    cardBackground: "#fff",
    headerBackground: "#ff8a65",
    buttonText: "#fff",
  },
  typography: {
    fontFamily: "Pacifico, cursive",
    headerSize: "3.5rem",
    bodySize: "1.2rem",
  },
  spacing: {
    padding: "1.2rem",
    margin: "1.2rem",
    gap: "1.5rem",
  },
  layout: "colorfulCards",
  borderRadius: "16px",
  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
};

export const themes: { [key: string]: DefaultTheme } = {
  "Theme 1": theme1,
  "Theme 2": theme2,
  "Theme 3": theme3,
};
