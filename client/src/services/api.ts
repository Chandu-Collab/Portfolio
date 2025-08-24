const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export interface Portfolio {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    resume: string;
  };
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  }>;
  experience: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: number;
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Get complete portfolio data
  async getPortfolio(): Promise<Portfolio> {
    return this.request<Portfolio>('/portfolio');
  }

  // Get projects
  async getProjects() {
    return this.request('/projects');
  }

  // Get specific project
  async getProject(id: number) {
    return this.request(`/projects/${id}`);
  }

  // Get skills
  async getSkills() {
    return this.request('/skills');
  }

  // Get experience
  async getExperience() {
    return this.request('/experience');
  }

  // Send contact form
  async sendContactForm(data: ContactFormData): Promise<{ message: string }> {
    return this.request<{ message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

export const apiService = new ApiService();
export default apiService;
