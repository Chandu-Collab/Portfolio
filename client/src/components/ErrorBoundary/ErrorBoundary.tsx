import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BiErrorCircle } from 'react-icons/bi';
import { MdRefresh, MdHome } from 'react-icons/md';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const ErrorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ErrorIcon = styled(motion.div)`
  font-size: 4rem;
  color: #ef4444;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  line-height: 1.6;
`;

const ErrorDetails = styled.details`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  summary {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: #ef4444;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  pre {
    background: rgba(0, 0, 0, 0.2);
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow-x: auto;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  private handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined 
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1] as const,
            staggerChildren: 0.1
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const
          }
        }
      };

      const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
          scale: 1,
          rotate: 0,
          transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20
          }
        }
      };

      return (
        <ErrorContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ErrorIcon variants={iconVariants}>
            <BiErrorCircle />
          </ErrorIcon>
          
          <motion.div variants={itemVariants}>
            <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ErrorMessage>
              We encountered an unexpected error while loading this page. 
              Don't worry, this happens sometimes. You can try refreshing the page 
              or return to the homepage.
            </ErrorMessage>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ButtonGroup>
              <ActionButton
                onClick={this.handleRetry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdRefresh />
                Try Again
              </ActionButton>
              
              <SecondaryButton
                onClick={this.handleGoHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdHome />
                Go Home
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <motion.div variants={itemVariants}>
              <ErrorDetails>
                <summary>Error Details (Development Mode)</summary>
                <pre>
                  <strong>Error:</strong> {this.state.error.message}
                  {'\n\n'}
                  <strong>Stack:</strong>
                  {'\n'}
                  {this.state.error.stack}
                  {this.state.errorInfo && (
                    <>
                      {'\n\n'}
                      <strong>Component Stack:</strong>
                      {'\n'}
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </pre>
              </ErrorDetails>
            </motion.div>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
