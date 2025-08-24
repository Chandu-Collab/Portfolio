import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const ProjectsContainer = styled.div`
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

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text.secondary
  };
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
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
  height: 200px;
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
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
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

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "Full Stack",
    image: "/assets/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io. Includes team collaboration features and progress tracking.",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    image: "/assets/projects/taskapp.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/taskapp"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts. Built with modern React and Chart.js.",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
    category: "Frontend",
    image: "/assets/projects/weather.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather"
  },
  {
    id: 4,
    title: "REST API Server",
    description: "A robust RESTful API server built with Node.js and Express. Features authentication, rate limiting, and comprehensive documentation.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    category: "Backend",
    image: "/assets/projects/api.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/api"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and styled-components. Features smooth animations and optimized performance.",
    technologies: ["React", "TypeScript", "Styled Components", "Framer Motion"],
    category: "Frontend",
    image: "/assets/projects/portfolio.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and user authentication. Built with Socket.io and React.",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    image: "/assets/projects/chat.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/chat"
  }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <ProjectsContainer>
      <Section>
        <Container>
          <Header ref={ref}>
            <Title
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              My Projects
            </Title>
            <Subtitle
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of projects that showcase my skills and experience in web development.
            </Subtitle>
          </Header>

          <FilterContainer
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaFilter />
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterContainer>

          <ProjectsGrid
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            layout
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
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
        </Container>
      </Section>
    </ProjectsContainer>
  );
};

export default Projects;
