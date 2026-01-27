# Modern Portfolio Website

A stunning, responsive portfolio website built with React, TypeScript, Node.js, and modern web technologies. Features smooth animations, a clean design, and a fully functional contact form.

## 🌟 Features

### Frontend
- **Modern React with TypeScript** - Type-safe, maintainable code
- **Styled Components** - CSS-in-JS with theme support
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach, works on all devices
- **Interactive Navigation** - Smooth scrolling and active states
- **Dynamic Content** - Sections for about, projects, skills, and contact
- **Performance Optimized** - Fast loading and smooth interactions

### Backend
- **Express.js API** - RESTful endpoints for portfolio data
- **Contact Form** - Email functionality with Nodemailer
- **Security Features** - Helmet, CORS, rate limiting
- **Error Handling** - Comprehensive error management
- **Environment Configuration** - Secure configuration management

### Design Features
- **Dark Theme** - Modern dark color scheme
- **Gradient Accents** - Beautiful gradient elements
- **Glass Effects** - Modern glassmorphism design
- **Smooth Animations** - Page transitions and hover effects
- **Interactive Elements** - Engaging user interactions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   
   # Email Configuration (for contact form)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the application**
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start both the frontend (port 3000) and backend (port 5000) concurrently.

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── FeaturedProjects/
│   │   │   ├── Skills/
│   │   │   └── Footer/
│   │   ├── pages/          # Page components
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   └── Contact/
│   │   ├── styles/         # Styled-components and theme
│   │   │   ├── GlobalStyles.ts
│   │   │   ├── theme.ts
│   │   │   └── styled.d.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js          # Main server file
│   ├── .env               # Environment variables
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the portfolio data in `server/server.js`:
- Personal details (name, title, bio, contact info)
- Skills and technologies
- Projects and experience
- Education background

### Theme and Styling
Modify `client/src/styles/theme.ts` to customize:
- Colors and gradients
- Typography settings
- Spacing and layout
- Breakpoints
- Animations

### Content Sections
Update the following components with your content:
- `Hero.tsx` - Main landing section
- `About.tsx` - About page content
- `Projects.tsx` - Project showcase
- `Skills.tsx` - Skills and technologies
- `Contact.tsx` - Contact information

## 🛠 Technologies Used

### Frontend
- **React 18** - Latest React features
- **TypeScript** - Type safety and better development experience
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll-based animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Rate limiting
- **dotenv** - Environment variable management

## 📧 Contact Form Setup

To enable the contact form:

1. **Gmail Setup**
   - Create an App Password in your Google Account
   - Update `.env` with your credentials

2. **Alternative Email Services**
   - Modify the transporter configuration in `server.js`
   - Supports most email providers

## 🚀 Deployment


### Frontend (Netlify)
1. Build the client:
   ```bash
   cd client
   npm run build
   ```
2. Drag and drop the `client/build` folder into the Netlify dashboard, or connect your repository and set the build command to `npm run build` and publish directory to `client/build`.

### Backend (Render/Railway/Other)
1. Deploy the `server` directory to a Node.js hosting service (e.g., Render, Railway).
2. Set environment variables in your hosting dashboard.
3. Update CORS settings in your backend for your Netlify frontend URL.

### Full-Stack
Netlify is for frontend only. Deploy your backend separately, then update your frontend API URLs to point to your backend's deployed URL.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** - Full experience with all animations
- **Tablet** - Adapted layout and touch-friendly interactions
- **Mobile** - Compact design with mobile navigation

## ⚡ Performance

- **Code Splitting** - Lazy loading of components
- **Optimized Images** - Responsive image loading
- **Minimal Dependencies** - Lightweight bundle size
- **Efficient Animations** - Hardware-accelerated animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with love and lots of coffee ☕
- Open source community for amazing tools and libraries

---

**Made with ❤️ by [Your Name]**

For questions or support, feel free to reach out!