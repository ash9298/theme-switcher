import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.padding};
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow};

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
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

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>Navigation</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
