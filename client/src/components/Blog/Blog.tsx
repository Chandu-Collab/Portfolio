import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdCalendarToday, MdAccessTime, MdArrowForward, MdLocalOffer, MdClose } from 'react-icons/md';
import { getRecentPosts } from '../../data/blogPosts';

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

const BlogImage = styled.div<{ image?: string }>`
  height: 200px;
  background: ${({ image, theme }) => 
    image 
      ? `linear-gradient(45deg, ${theme.colors.primary}40, ${theme.colors.secondary}40), url(${image})`
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
  };
  background-size: cover;
  background-position: center;
  position: relative;
`;

const VideoThumbnail = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &::after {
    content: '▶';
    color: white;
    margin-left: 4px;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
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

const VideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  background: black;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.secondary};
  }
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

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  border: 2px dashed rgba(148, 163, 184, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  max-width: 600px;
  margin: 0 auto;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EmptyText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  code {
    background: ${({ theme }) => theme.colors.surface};
    padding: 2px 8px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: 'Courier New', monospace;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Blog: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = getRecentPosts(6);

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
            My journey in tech - projects I'm building, things I'm learning,
            and achievements along the way.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {blogPosts.length === 0 ? (
            <EmptyState
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <EmptyIcon>📝</EmptyIcon>
              <EmptyTitle>Ready to Showcase Your Work!</EmptyTitle>
              <EmptyText>
                Open <code>client/src/data/blogPosts.ts</code> to add your projects, learnings, and achievements.
              </EmptyText>
              <EmptyText>
                Add your images to <code>client/public/images/</code> folder or videos to <code>client/public/videos/</code>.
              </EmptyText>
            </EmptyState>
          ) : (
            <BlogGrid>
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => post.video && setSelectedVideo(post.video)}
                  style={{ cursor: post.video ? 'pointer' : 'default' }}
                >
                  <BlogImage image={post.image}>
                    {post.video ? (
                      <>
                        <VideoThumbnail
                          src={post.video}
                          muted
                          preload="metadata"
                        />
                        <PlayButton />
                      </>
                    ) : null}
                    <BlogCategory>{post.category}</BlogCategory>
                  </BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <BlogMetaItem>
                      <MdCalendarToday />
                      {formatDate(post.date)}
                    </BlogMetaItem>
                    <BlogMetaItem>
                      <MdAccessTime />
                      {post.readTime}
                    </BlogMetaItem>
                    {post.tags && post.tags[0] && (
                      <BlogMetaItem>
                        <MdLocalOffer />
                        {post.tags[0]}
                      </BlogMetaItem>
                    )}
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <ReadMoreButton>
                    {post.link ? 'View Project' : 'Read More'} <MdArrowForward />
                  </ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
          )}
        </motion.div>

        {blogPosts.length > 0 && (
          <ViewAllButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            View All Posts
          </ViewAllButton>
        )}
      </Container>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <VideoContainer
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedVideo(null)}>
                <MdClose />
              </CloseButton>
              <Video
                src={selectedVideo}
                controls
                autoPlay
              />
            </VideoContainer>
          </VideoModal>
        )}
      </AnimatePresence>
    </BlogSection>
  );
};

export default Blog;
