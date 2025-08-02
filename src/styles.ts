import styled from "styled-components";
import { type Theme } from "./theme";

export const MainContent = styled.main<{ $layout: string }>`
  padding-top: 5rem;
  min-height: 100vh;

  ${({ $layout }) =>
    $layout === "minimalist" &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem 2rem;
    `}
  ${({ $layout }) =>
    $layout === "darkSidebar" &&
    `
      display: grid;
      grid-template-columns: 250px 1fr;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `}
  ${({ $layout }) =>
    $layout === "colorfulCards" &&
    `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: ${({ theme }: { theme: Theme }) => theme.spacing.gap};
      padding: 5rem 2rem;
    `}
`;

export const PageWrapper = styled.div`
  ${({ theme }) =>
    theme.layout === "darkSidebar" &&
    `
      padding: 2rem;
    `}
  ${({ theme }) =>
    theme.layout === "minimalist" &&
    `
      max-width: 800px;
      width: 100%;
      text-align: center;
    `}
`;

export const Section = styled.section`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.margin};

  h2 {
    font-size: ${({ theme }: { theme: Theme }) => theme.typography.headerSize};
    margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.gap};
    font-family: ${({ theme }: { theme: Theme }) =>
      theme.typography.fontFamily};
  }

  p,
  ul {
    font-size: ${({ theme }: { theme: Theme }) => theme.typography.bodySize};
    line-height: 1.6;
    margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.gap};
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  color: ${({ theme }: { theme: Theme }) => theme.colors.buttonText};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius};
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ theme }: { theme: Theme }) => theme.boxShadow};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
