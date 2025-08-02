import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
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
}
