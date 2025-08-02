import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.padding};
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.primary};
  }

  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23${({ theme }) => theme.colors.text.substring(1)}'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1em;
  transition: all 0.3s ease-in-out;
`;

const Header: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  return (
    <StyledHeader>
      <h1>Hipster Inc.</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeSelect value={themeName} onChange={(e) => setThemeName(e.target.value)}>
          <option value="Theme 1">Theme 1</option>
          <option value="Theme 2">Theme 2</option>
          <option value="Theme 3">Theme 3</option>
        </ThemeSelect>
      </nav>
    </StyledHeader>
  );
};

export default Header;
