# Portfolio Site

A modern, responsive portfolio website with three distinct themes and a built-in content management system.

## Features

### 🎨 Three Professional Themes
1. **Minimal Dark** - Clean, typography-focused design with subtle animations
2. **Modern Gradient** - Bold gradients with glassmorphism effects and dynamic backgrounds
3. **Professional Grid** - Card-based layout with hover animations and clean organization

### 🚀 Built With
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Vite** for fast development and building
- **Lucide React** for beautiful icons

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### ⚡ Performance Features
- Smooth page transitions
- Optimized animations
- Fast loading times
- SEO-friendly structure

## Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server
The site will be available at `http://localhost:5173/`

## Content Management

### JSON-Based Content
All content is managed through the `/src/data/portfolio.json` file. You can easily update:
- Personal information
- Projects
- Experience
- Skills

### Theme Switching
Use the theme selector in the top-right corner to switch between the three available themes in real-time.

## Customization

### Adding New Projects
Edit `/src/data/portfolio.json` and add new project objects:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Short description",
  "longDescription": "Detailed description for project pages",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://project-demo.com",
  "featured": true
}
```

### Updating Personal Information
Modify the `personalInfo` section in the JSON file:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description",
    "location": "Your Location",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

### Color Customization
Each theme uses Tailwind CSS classes. You can customize colors by:
1. Editing the theme components in `/src/themes/`
2. Updating the Tailwind config in `tailwind.config.js`

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to AWS (or other platforms)
1. Build the project with `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your server to serve the `index.html` file for all routes

### Recommended Hosting Platforms
- **AWS S3 + CloudFront**
- **Vercel** (automatic deployments from Git)
- **Netlify** (drag-and-drop deployment)
- **GitHub Pages**

## Theme Details

### Minimal Dark Theme
- Dark background with light text
- Typography-focused layout
- Subtle hover animations
- Clean, professional appearance
- Perfect for developers who prefer minimalism

### Modern Gradient Theme
- Animated gradient backgrounds
- Glassmorphism effects
- Bold, colorful design
- Smooth transitions and micro-interactions
- Eye-catching and modern aesthetic

### Professional Grid Theme
- Card-based layout
- Light theme with clean organization
- Structured grid system
- Business-appropriate design
- Great for corporate environments

## File Structure
```
src/
├── components/          # Reusable UI components
├── data/               # Content JSON files
├── hooks/              # Custom React hooks
├── pages/              # Main page components
├── themes/             # Theme-specific components
├── types/              # TypeScript type definitions
└── index.css          # Global styles and Tailwind imports
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing
1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test across all themes
5. Submit a pull request

## License
MIT License - feel free to use this portfolio template for your own projects!
