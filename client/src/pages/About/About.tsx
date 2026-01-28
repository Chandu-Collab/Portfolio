import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const TextContent = styled.div``;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    text-align: center;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const Description = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.div`
  width: 400px;
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 400px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background: ${({ theme }) => theme.colors.background};
  }

  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    position: relative;
    z-index: 1;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(148, 163, 184, 0.1);
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ExperienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ index: number }>`
  display: flex;
  justify-content: ${({ index }) => index % 2 === 0 ? 'flex-start' : 'flex-end'};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    padding-left: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.background};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 30px;
    }
  }
`;

const TimelineContent = styled.div<{ index: number }>`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 45%;
  border: 1px solid rgba(148, 163, 184, 0.1);
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 60px);
  }
`;

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Company = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Duration = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const JobDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Mantravat Info Tech",
      duration: "27 Jan 2025 – Present",
      description: "Designed and developed projects from scratch, ensuring quality through testing and debugging. Deployed completed applications and implemented updates as required. Worked across both frontend and backend to deliver fully functional, scalable solutions."
    },
    {
      title: "Intern / Flutter Developer",
      company: "Node 8 Innovations",
      duration: "5 Sep 2024 – 5 Jan 2025",
      description: "Developed mobile application screens and tested them for quality and performance. Collaborated with backend team to integrate APIs and ensure seamless data flow. Assisted in deploying features and fixes to the live environment."
    }
  ];

  return (
    <AboutContainer>
      <Section>
        <Container>
          <AboutContent ref={ref}>
            <TextContent>
              <Title
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                About Me
              </Title>
              
              <Subtitle
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                BE (ECE) Graduate & Full-Stack Developer
              </Subtitle>
              
              <Description
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  Hi, I'm Chandu<br/>
                  <b>Full-Stack Developer | TypeScript • React • Node.js • GraphQL • 3D Web</b>
                </p>
                <p>
                  I’m a Full-Stack Developer and BE (ECE) graduate with strong hands-on experience building scalable web and mobile applications using modern engineering practices.
                </p>
                <p>
                  My primary expertise is in TypeScript and React, with production experience in Next.js and Vue.js. I actively build immersive and interactive experiences using Three.js frameworks and 3D engines, delivering high-performance visuals and realistic UI interactions.
                </p>
                <p>
                  On the backend, I specialize in Node.js with Fastify and Express, designing robust REST and GraphQL APIs, scalable service architectures, and performance-optimized systems. I work confidently across PostgreSQL, MySQL, MongoDB, and Supabase, choosing the right data model for each product.
                </p>
                <p>
                  I also develop cross-platform mobile applications using React Native and Flutter, enabling fast iteration and consistent UX across platforms.
                </p>
                <p>
                  I have delivered real-world solutions including AI-powered platforms, automation systems, admin dashboards, and production-ready applications, with a strong focus on clean code, maintainability, and scalability.
                </p>
                <p>
                  I regularly work with AWS and Azure, version control workflows, containerization, and modern deployment pipelines — continuously improving reliability and delivery quality.
                </p>
                <p>
                  💡 I’m passionate about building impactful products, solving complex problems, and staying ahead with emerging technologies.
                </p>
              </Description>
            </TextContent>

            <ImageContainer
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <AboutImage>
                <img 
                  src={require('../../assets/WhatsApp Image 2025-07-08 at 00.12.26.jpeg')} 
                  alt="Madduri Chandra Hasa Reddy"
                />
              </AboutImage>
            </ImageContainer>
          </AboutContent>

          <StatsContainer
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <StatItem>
              <StatNumber>4+</StatNumber>
              <StatLabel>Major Projects</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>40+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
          </StatsContainer>
        </Container>
      </Section>

      <ExperienceSection>
        <Container>
          <SectionTitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Experience
          </SectionTitle>

          <Timeline>
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                index={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineContent index={index}>
                  <JobTitle>{item.title}</JobTitle>
                  <Company>{item.company}</Company>
                  <Duration>{item.duration}</Duration>
                  <JobDescription>{item.description}</JobDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </ExperienceSection>
    </AboutContainer>
  );
};

export default About;
