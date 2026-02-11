export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  video?: string;
  tags?: string[];
  link?: string;
  type: 'project' | 'learning' | 'achievement' | 'article' | 'resource';
}

/**
 * Add your daily work, learnings, and projects here!
 * 
 * Types:
 * - 'project': Things you're building
 * - 'learning': New skills or concepts you learned
 * - 'achievement': Milestones or accomplishments
 * - 'article': Technical articles or tutorials you wrote
 * - 'resource': Useful resources you discovered
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Kizuna Verse - Home Page',
    excerpt: 'An interactive 3D experience with dynamic weather system and day/night cycle. Built with Three.js engine as a gift during my learning phase, showcasing advanced environmental effects.',
    category: 'Project',
    type: 'project',
    date: '2026-01-21',
    readTime: '3 min read',
    tags: ['Three.js', 'Engine', '3D', 'Web Development'],
    video: '/videos/home-page-1.mp4'
  },
  {
    id: 2,
    title: 'Kizuna Verse - Home Page (Different Model)',
    excerpt: 'Alternative 3D model with dynamic weather system and day/night cycle. Exploring different artistic directions while maintaining immersive environmental effects.',
    category: 'Project',
    type: 'project',
    date: '2026-01-28',
    readTime: '3 min read',
    tags: ['Three.js', 'Engine', '3D', '3D Models'],
    video: '/videos/home-page-2.mp4'
  },
  {
    id: 3,
    title: 'Building Bengaluru',
    excerpt: 'An immersive 3D visualization of Bengaluru space with advanced weather system and complete day/night cycle. Features dynamic environmental changes and realistic lighting.',
    category: 'Project',
    type: 'project',
    date: '2026-02-04',
    readTime: '4 min read',
    tags: ['Three.js', 'Engine', '3D', 'Architecture'],
    video: '/videos/our-space.mp4'
  },
  {
    id: 4,
    title: 'Study Space - Home Design',
    excerpt: 'A comprehensive 3D home design showcasing both interior and exterior views. Built with Three.js and custom engine to create a fully immersive architectural experience.',
    category: 'Project',
    type: 'project',
    date: '2026-02-11',
    readTime: '4 min read',
    tags: ['Three.js', 'Engine', '3D', 'Interior Design', 'Architecture'],
    video: '/videos/study-space.mp4'
  },

  // ✨ Add your work here! Copy the template below and add your content:
  
  // TEMPLATE - Copy this structure for each entry:
  // {
  //   id: 2,  // Increment for each new entry
  //   title: 'Your Project/Work Title',
  //   excerpt: 'Brief description of what you built, learned, or achieved',
  //   category: 'Project',  // Project, Learning, Achievement, Work, etc.
  //   type: 'project',  // project, learning, achievement, article, resource
  //   date: '2024-02-11',  // YYYY-MM-DD format
  //   readTime: '5 min read',
  //   tags: ['React', 'Node.js', 'MongoDB'],  // Your tech stack/topics
  //   image: '/path/to/your/image.png',  // Put images in client/public/images/ folder
  //   video: '/videos/your-video.mp4',  // For video posts
  //   link: 'https://github.com/yourusername/project'  // Optional: project link
  // },

  // 📸 To add images:
  // 1. Create a folder: client/public/images/
  // 2. Add your images there
  // 3. Reference them as: image: '/images/your-image.png'
  
  // 🎥 To add videos:
  // 1. Place videos in: client/public/videos/
  // 2. Reference them as: video: '/videos/your-video.mp4'
  
];

// Helper function to get posts by type
export const getPostsByType = (type: BlogPost['type']) => {
  return blogPosts.filter(post => post.type === type);
};

// Helper function to get recent posts
export const getRecentPosts = (limit: number = 6) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
