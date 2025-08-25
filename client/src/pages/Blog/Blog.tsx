import React from 'react';
import styled from 'styled-components';
import PageTransition from '../../components/PageTransition/PageTransition';
import Blog from '../../components/Blog/Blog';

const BlogPageContainer = styled.div`
  padding-top: 80px; // Account for fixed navbar
  min-height: 100vh;
`;

const BlogPage: React.FC = () => {
  return (
    <PageTransition>
      <BlogPageContainer>
        <Blog />
      </BlogPageContainer>
    </PageTransition>
  );
};

export default BlogPage;
