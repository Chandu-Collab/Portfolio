import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDownload, 
  FaTwitter, 
  FaEnvelope
} from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary}40;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: FaGithub,
      title: 'Enterprise Web Application Development',
      description: 'Building robust, scalable web applications using modern technologies and best practices.',
      features: [
        'React, Next.js, TypeScript',
        'Node.js, Express.js backends',
        'MySQL, MongoDB databases',
        'RESTful API development',
        'Responsive design & animations'
      ]
    },
    {
      icon: FaGithub,
      title: 'Backend API & Microservices Engineering',
      description: 'Expertise in Node.js and modern backend frameworks for high-performance APIs and scalable systems.',
      features: [
        'Node.js core development',
        'Express.js & Fastify frameworks',
        'RESTful & GraphQL APIs',
        'Authentication & security best practices',
        'Performance optimization & scalability'
      ]
    },
    {
      icon: FaDownload,
      title: 'Cross-Platform Mobile App Development',
      description: 'Specialized in Flutter framework for creating beautiful, high-performance cross-platform mobile applications.',
      features: [
        'Flutter framework expertise',
        'Cross-platform iOS & Android',
        'Custom widgets & animations',
        'State management (Bloc, Provider)',
        'Native performance optimization'
      ]
    },
    {
      icon: FaLinkedin,
      title: 'Cloud Backend & Serverless Solutions',
      description: 'Complete Firebase integration for scalable, real-time backend solutions and cloud services.',
      features: [
        'Firebase Authentication',
        'Firestore real-time database',
        'Cloud Functions deployment',
        'Firebase Storage & Hosting',
        'Push notifications & analytics'
      ]
    },
    {
      icon: FaTwitter,
      title: 'API Engineering & Systems Integration',
      description: 'Designing and implementing robust APIs and integrating third-party services.',
      features: [
        'RESTful API design',
        'Third-party integrations',
        'Authentication & authorization',
        'API documentation',
        'Performance optimization'
      ]
    },
    {
      icon: FaTwitter,
      title: 'Database Architecture & Management',
      description: 'Expert in PostgreSQL, MySQL, MongoDB, Supabase, and more. Designing efficient database schemas and optimizing query performance.',
      features: [
        'PostgreSQL, MySQL, MongoDB, Supabase expertise',
        'Database schema design',
        'Query optimization',
        'Data migration & backup',
        'Performance monitoring'
      ]
    },
    {
      icon: FaGithub,
      title: 'UI/UX Engineering & Frontend Solutions',
      description: 'Creating clean, responsive, and animated user interfaces that engage users.',
      features: [
        'Responsive web design',
        'Framer Motion animations',
        'Styled Components',
        'Modern CSS techniques',
        'User experience optimization'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'AI & Intelligent Automation Solutions',
      description: 'Integrating AI capabilities to create intelligent and automated solutions.',
      features: [
        'Chatbot integrations',
        'AI-driven features',
        'Machine learning integration',
        'Natural language processing',
        'Automated workflows'
      ]
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

  return (
    <ServicesSection id="services" ref={ref}>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Services & What I Offer
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I provide comprehensive development services to bring your ideas to life,
            from concept to deployment and beyond.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ServiceIcon>
                  <service.icon />
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <ServiceFeature key={featureIndex}>
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services;
