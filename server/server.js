const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Contact form rate limiting
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5 // limit each IP to 5 contact form submissions per hour
});

// Portfolio data
const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "chandrahasareddy65@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    bio: "Passionate full-stack developer with expertise in modern web technologies. I create beautiful, functional, and user-friendly applications.",
    resume: "/assets/resume.pdf"
  },
  skills: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "TypeScript", level: 80, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "Python", level: 75, category: "Language" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Docker", level: 65, category: "DevOps" },
    { name: "Git", level: 90, category: "Tools" }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "/assets/projects/ecommerce.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      image: "/assets/projects/taskapp.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/taskapp",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      image: "/assets/projects/weather.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/weather",
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "Remote",
      startDate: "2022-01",
      endDate: null,
      current: true,
      description: "Led development of multiple web applications using React and Node.js. Mentored junior developers and implemented best practices."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Startup XYZ",
      location: "San Francisco, CA",
      startDate: "2020-06",
      endDate: "2021-12",
      current: false,
      description: "Developed responsive user interfaces and improved application performance by 40%."
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      location: "City, State",
      startDate: "2016-09",
      endDate: "2020-05",
      gpa: "3.8/4.0"
    }
  ]
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = portfolioData.projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify the transporter configuration
    await transporter.verify();
    console.log('Email transporter verified successfully');

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: portfolioData.personal.email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p><strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
            </p>
            <p><strong style="color: #374151;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply to:</strong> You can reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
      replyTo: email // This allows you to reply directly to the sender
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    console.log('Message from:', name, `(${email})`);
    console.log('Subject:', subject);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      console.error('Email authentication failed. Check EMAIL_USER and EMAIL_PASS in .env file');
      errorMessage = 'Email configuration error. Please try again later.';
    } else if (error.code === 'ENOTFOUND') {
      console.error('Network error. Check internet connection.');
      errorMessage = 'Network error. Please check your connection and try again.';
    }
    
    res.status(500).json({ message: errorMessage });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test email configuration endpoint (only in development)
app.get('/api/test-email', async (req, res) => {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(404).json({ message: 'Not found' });
  }
  
  try {
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.verify();
    
    res.status(200).json({ 
      status: 'OK', 
      message: 'Email configuration is working correctly',
      emailUser: process.env.EMAIL_USER 
    });
  } catch (error) {
    console.error('Email test failed:', error);
    res.status(500).json({ 
      status: 'Error', 
      message: 'Email configuration failed',
      error: error.message 
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
