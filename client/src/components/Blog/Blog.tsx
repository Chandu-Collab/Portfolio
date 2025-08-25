import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const BlogSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary}40;
  }
`;

const BlogImage = styled.div<{ image: string }>`
  height: 200px;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}40, ${({ theme }) => theme.colors.secondary}40),
              url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const BlogCategory = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const BlogMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const BlogTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ViewAllButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const Blog: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript for better maintainability and developer experience.',
      category: 'React',
      author: 'Chandra Hasa Reddy',
      date: '2024-12-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      title: 'Advanced Node.js Patterns for Enterprise Applications',
      excerpt: 'Explore advanced Node.js patterns and best practices for building robust enterprise-level applications.',
      category: 'Node.js',
      author: 'Chandra Hasa Reddy',
      date: '2024-12-10',
      readTime: '8 min read',
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'Database Optimization Techniques for High-Performance Apps',
      excerpt: 'Discover proven strategies for optimizing database queries and improving application performance.',
      category: 'Database',
      author: 'Chandra Hasa Reddy',
      date: '2024-12-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      title: 'Flutter vs React Native: A Comprehensive Comparison',
      excerpt: 'Compare the two leading cross-platform mobile development frameworks and learn when to use each.',
      category: 'Mobile',
      author: 'Chandra Hasa Reddy',
      date: '2024-11-28',
      readTime: '7 min read',
      image: '/api/placeholder/400/200'
    },
    {
      id: 5,
      title: 'Modern CSS Techniques for Beautiful Web Interfaces',
      excerpt: 'Master the latest CSS features and techniques to create stunning and responsive web interfaces.',
      category: 'Frontend',
      author: 'Chandra Hasa Reddy',
      date: '2024-11-20',
      readTime: '4 min read',
      image: '/api/placeholder/400/200'
    },
    {
      id: 6,
      title: 'AI Integration in Web Applications: A Practical Guide',
      excerpt: 'Learn how to integrate AI capabilities into your web applications for enhanced user experiences.',
      category: 'AI',
      author: 'Chandra Hasa Reddy',
      date: '2024-11-15',
      readTime: '9 min read',
      image: '/api/placeholder/400/200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <BlogSection id="blog" ref={ref}>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Latest Blog Posts
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights, tutorials, and thoughts on modern web development,
            technology trends, and best practices.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <BlogGrid>
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BlogImage image={post.image}>
                  <BlogCategory>{post.category}</BlogCategory>
                </BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <BlogMetaItem>
                      <FaGithub />
                      {post.author}
                    </BlogMetaItem>
                    <BlogMetaItem>
                      <FaLinkedin />
                      {formatDate(post.date)}
                    </BlogMetaItem>
                    <BlogMetaItem>
                      <FaEnvelope />
                      {post.readTime}
                    </BlogMetaItem>
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <ReadMoreButton>
                    Read More <FaDownload />
                  </ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </motion.div>

        <ViewAllButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          View All Posts
        </ViewAllButton>
      </Container>
    </BlogSection>
  );
};

export default Blog;
