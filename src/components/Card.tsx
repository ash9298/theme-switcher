import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.3s ease-in-out;
  border: ${({ theme }) => theme.border || 'none'};

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  p {
    font-size: ${({ theme }) => theme.typography.bodySize};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;
