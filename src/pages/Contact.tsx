import React from 'react';
import { Section, StyledButton } from '../styles';

const Contact: React.FC = () => {
  return (
    <Section>
      <h2>Contact Us</h2>
      <p>
        For inquiries, please reach out to us using the details below.
      </p>
      <ul>
        <li>**Address:** # 01-04, 75 Ayer Rajah Crescent, 139953, Singapore</li>
        <li>**Contact:** +6582314107</li>
        <li>**Email:** hr@hipster-inc.com</li>
        <li>**Website:** www.hipster-inc.com</li>
      </ul>
      <StyledButton onClick={() => alert('Contact form not implemented!')}>
        Send a Message
      </StyledButton>
    </Section>
  );
};

export default Contact;
