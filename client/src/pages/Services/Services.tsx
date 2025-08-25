import React from 'react';
import styled from 'styled-components';
import PageTransition from '../../components/PageTransition/PageTransition';
import Services from '../../components/Services/Services';

const ServicesPageContainer = styled.div`
  padding-top: 80px; // Account for fixed navbar
  min-height: 100vh;
`;

const ServicesPage: React.FC = () => {
  return (
    <PageTransition>
      <ServicesPageContainer>
        <Services />
      </ServicesPageContainer>
    </PageTransition>
  );
};

export default ServicesPage;
