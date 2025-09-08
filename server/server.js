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
    name: "Madduri Chandra Hasa Reddy",
    title: "Full Stack Developer",
    tagline: "Full-Stack Developer | React • Node.js • MySQL/MongoDB | Crafting seamless web and mobile experiences",
    email: "chandrahasareddy65@gmail.com",
    phone: "+91 (800) 123-4567",
    location: "Hyderabad, India",
    bio: "Passionate full-stack developer specializing in React, Node.js, and database technologies. I craft seamless web and mobile experiences with modern technologies, focusing on clean code and innovative solutions.",
  resume: "/api/resume",
    profileImage: "/assets/profile-photo.jpg"
  },
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "MySQL", level: 90, category: "Database" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Redux", level: 85, category: "Frontend" },
    { name: "RESTful APIs", level: 92, category: "Backend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 75, category: "Tools" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Firebase", level: 80, category: "Backend" }
  ],
  projects: [
    {
      id: 1,
      title: "Full-Stack E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      image: "/assets/projects/ecommerce.jpg",
      liveUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/ChandraHasaReddy/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and group chat functionality. Built with React, Socket.io, and MySQL database with JWT authentication.",
      technologies: ["React", "Socket.io", "Node.js", "MySQL", "JWT", "Express"],
      image: "/assets/projects/chat-app.jpg",
      liveUrl: "https://chat-app-demo.example.com",
      githubUrl: "https://github.com/ChandraHasaReddy/realtime-chat",
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking. Features React frontend with Node.js API and MongoDB backend.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux"],
      image: "/assets/projects/task-management.jpg",
      liveUrl: "https://taskmanager-demo.example.com",
      githubUrl: "https://github.com/ChandraHasaReddy/task-manager",
      featured: true
    },
    {
      id: 4,
      title: "Restaurant Ordering System",
      description: "A complete restaurant ordering system with customer app, admin panel, and kitchen dashboard. Built with React Native for mobile and React for web with MySQL database.",
      technologies: ["React", "React Native", "Node.js", "MySQL", "Express", "Firebase"],
      image: "/assets/projects/restaurant-app.jpg",
      liveUrl: "https://restaurant-demo.example.com",
      githubUrl: "https://github.com/ChandraHasaReddy/restaurant-ordering",
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechSolutions Pvt Ltd",
      location: "Hyderabad, India",
      startDate: "2023-01",
      endDate: null,
      current: true,
      description: "Leading full-stack development projects using React, Node.js, and MongoDB. Developed scalable web applications and APIs, improved application performance by 40%, and mentored junior developers in modern web technologies."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "Hyderabad, India",
      startDate: "2021-06",
      endDate: "2022-12",
      current: false,
      description: "Developed responsive user interfaces using React and implemented state management with Redux. Collaborated with backend teams to integrate RESTful APIs and improved user experience across multiple web applications."
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "WebCraft Studio",
      location: "Hyderabad, India",
      startDate: "2020-01",
      endDate: "2021-05",
      current: false,
      description: "Started career building websites with HTML, CSS, JavaScript, and learned React framework. Gained hands-on experience in full-stack development and database management with MySQL and MongoDB."
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "JNTUH University",
      location: "Hyderabad, India",
      startDate: "2018-06",
      endDate: "2022-05",
      gpa: "8.2/10.0",
      description: "Specialized in software engineering, data structures, algorithms, and web technologies. Completed projects in full-stack development and database management."
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      school: "Narayana Junior College",
      location: "Hyderabad, India",
      startDate: "2016-06",
      endDate: "2018-05",
      gpa: "9.1/10.0",
      description: "Mathematics, Physics, Chemistry with focus on analytical thinking and problem-solving skills."
    }
  ]
};

// Routes
// Serve UpdatedResume.pdf from src/components
app.get('/api/resume', (req, res) => {
  const filePath = require('path').resolve(__dirname, '../client/src/components/UpdatedResume.pdf');
  res.sendFile(filePath);
});
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
