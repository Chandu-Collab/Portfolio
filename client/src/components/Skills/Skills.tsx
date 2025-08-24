import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(148, 163, 184, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(148, 163, 184, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: ${({ level }) => level}%;
`;

interface Skill {
  name: string;
  level: number;
  category: string;
}

const mockSkills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "Flutter", level: 85, category: "Frontend" },
  { name: "Three.js", level: 75, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 80, category: "Backend" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "JWT Authentication", level: 85, category: "Backend" },
  
  // Database
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "Firebase", level: 85, category: "Database" },
  { name: "Firestore", level: 80, category: "Database" },
  
  // Tools & Others
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Firebase Hosting", level: 85, category: "Tools" },
  { name: "Vercel", level: 80, category: "Tools" },
  { name: "Netlify", level: 80, category: "Tools" }
];

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setSkills(mockSkills);
  }, []);

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <Section id="skills">
      <Container>
        <SectionHeader ref={ref}>
          <SectionTitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </SectionTitle>
          <SectionSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillsContainer>
            {skillCategories.map((category) => (
              <SkillCategory key={category} variants={itemVariants}>
                <CategoryTitle>{category}</CategoryTitle>
                <SkillsList>
                  {getSkillsByCategory(category).map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillHeader>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>{skill.level}%</SkillLevel>
                      </SkillHeader>
                      <ProgressBar>
                        <ProgressFill
                          level={skill.level}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.5 }}
                        />
                      </ProgressBar>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsContainer>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;
