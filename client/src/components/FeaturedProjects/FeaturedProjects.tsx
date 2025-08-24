import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.surface};
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
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  border: 1px solid rgba(148, 163, 184, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${({ theme }) => theme.colors.gradients.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ViewAllButton = styled(motion.button)`
  display: block;
  margin: ${({ theme }) => theme.spacing['2xl']} auto 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/assets/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io. Includes team collaboration features and progress tracking.",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    image: "/assets/projects/taskapp.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts. Built with modern React and Chart.js.",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
    image: "/assets/projects/weather.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather",
    featured: true
  }
];

const FeaturedProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Simulate API call
    setProjects(mockProjects.filter(project => project.featured));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Section id="featured-projects">
      <Container>
        <SectionHeader ref={ref}>
          <SectionTitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of my recent projects that showcase my skills and experience in web development.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <ProjectImage>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks>
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      Code
                    </ProjectLink>
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>

        <ViewAllButton
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/projects'}
        >
          View All Projects
        </ViewAllButton>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;
