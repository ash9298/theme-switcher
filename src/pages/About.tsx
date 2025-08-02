import React from 'react';
import { Section, StyledButton } from '../styles';

const About: React.FC = () => {
  return (
    <Section>
      <h2>About Us</h2>
      <p>
        Hipster Pte. Ltd. is a creative agency based in Singapore. We specialize in
        delivering unique and innovative digital solutions for our clients.
      </p>
      <p>
        Our mission is to combine cutting-edge technology with thoughtful design
        to create memorable user experiences.
      </p>
      <StyledButton onClick={() => alert('About page button clicked!')}>
        Our Services
      </StyledButton>
    </Section>
  );
};

export default About;
