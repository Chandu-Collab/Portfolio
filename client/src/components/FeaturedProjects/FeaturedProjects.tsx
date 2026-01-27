import taurusAiThumb from '../../assets/taurus-ai.png';
import peonyThumb from '../../assets/peony-thumb.png';
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
  transition: ${({ theme }) => theme.transitions.smooth};
  border: 1px solid rgba(148, 163, 184, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.3);
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
    transition: ${({ theme }) => theme.transitions.smooth};
  }

  &:hover img {
    transform: scale(1.15) rotate(2deg);
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
    title: "School Management System",
    description: "An AI-enhanced school management platform inspired by Teachmint, featuring comprehensive student registration, academic tracking, and innovative AI-powered teaching assistance.",
    technologies: ["React", "Node.js", "MySQL", "AI Integration", "Express"],
    image: '', // No image, will show initials
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "TaurusAI Admin Portal",
    description: "An intelligent job automation platform that leverages AI to streamline the entire job application process. Built with Flutter, Node.js, and Firebase.",
    technologies: ["Flutter", "Node.js", "Firebase", "AI Integration", "REST APIs"],
    image: taurusAiThumb,
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Peony – Interactive Birthday Gift Experience",
    description: "Peony is a visually engaging and interactive birthday gift web application designed to create a delightful digital surprise experience. The project focuses on smooth animations, clean UI, responsive design, and user-friendly navigation to deliver an emotional and memorable experience for the recipient. Built using modern frontend technologies and deployed on Netlify, the application demonstrates strong UI development skills, responsive layout handling, performance optimization, and production-level deployment practices. The project reflects creativity combined with real-world frontend engineering standards.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Netlify Deployment",
      "Responsive Design",
      "UI Animation"
    ],
    image: peonyThumb,
    liveUrl: "https://peony-birthday-gift.netlify.app",
    githubUrl: "https://github.com/Chandu-Collab/gift",
    featured: true
  },
  {
    id: 4,
    title: "Fruitsy",
    description: "A subscription-based fresh fruit delivery platform offering daily, weekly, and monthly plans with customizable bowl sizes. Built with Flutter and Firebase.",
    technologies: ["Flutter", "Firebase", "Firestore", "Real-time DB", "Push Notifications"],
    image: '', // No image, will show initials
    liveUrl: "#",
    githubUrl: "#",
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
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
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
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
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
                  )}
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
