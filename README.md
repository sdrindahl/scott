# Portfolio Website

A modern, responsive portfolio website to showcase your professional experience, skills, and projects to potential employers.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Easy to Customize** - Simply update the content with your own information
- **Multiple Sections**:
  - Hero section with your name and tagline
  - About section with stats
  - Experience timeline
  - Skills showcase
  - Project portfolio
  - Contact form and information
- **Interactive Elements** - Smooth scrolling, mobile menu, scroll animations
- **SEO Friendly** - Semantic HTML structure

## 🚀 Quick Start

1. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results

2. **Customize your content**
   - Edit `index.html` to add your personal information
   - See the customization guide below

## 📝 Customization Guide

### 1. Personal Information

**Update your name and title:**
- Find the `<h1 class="hero-title">` section and replace "Scott Rindahl" with your name
- Update the `<p class="hero-subtitle">` with your professional title
- Change the hero description to match your background

**Navigation:**
- Update `<div class="nav-brand">` with your name or brand

### 2. About Section

- Replace the text in the `<section id="about">` with your own bio
- Update the statistics:
  - Years of experience
  - Number of projects
  - Number of clients
- Adjust numbers to match your actual experience

### 3. Experience Section

For each job, update:
- `.job-title` - Your job title
- `.company` - Company name
- `.job-date` - Employment dates
- `.job-description` - List of responsibilities and achievements

**To add more positions:**
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="job-title">Your Job Title</h3>
        <h4 class="company">Company Name</h4>
        <p class="job-date">Start Date - End Date</p>
        <ul class="job-description">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
        </ul>
    </div>
</div>
```

### 4. Skills Section

Update the skill tags in each category:
- Frontend Development
- Backend Development
- Tools & Technologies
- Soft Skills

**Example:**
```html
<span class="skill-tag">Your Skill</span>
```

Add or remove skills as needed. You can also add new categories by copying the `.skill-category` structure.

### 5. Projects Section

For each project, update:
- `.project-title` - Project name
- `.project-description` - Brief description
- `.project-tags` - Technologies used
- `.project-link` href attributes - Link to live demo and GitHub repository

**To add project images:**
Replace the `.project-placeholder` div with:
```html
<img src="path/to/your/image.jpg" alt="Project name">
```

### 6. Contact Information

Update your contact details:
- Email address
- Phone number
- Location
- Social media links (LinkedIn, GitHub, Twitter)

**Social Links:**
Replace `#` with your actual profile URLs:
```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
```

### 7. Contact Form

**Note:** The contact form currently shows an alert. To make it functional:

1. **Option 1: Use a form service**
   - FormSpree: https://formspree.io/
   - Netlify Forms: https://www.netlify.com/products/forms/
   - EmailJS: https://www.emailjs.com/

2. **Option 2: Connect to your backend**
   - Update the form submission handler in `script.js`
   - Send data to your server endpoint

### 8. Colors and Styling

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary color */
    --accent-color: #3b82f6;     /* Accent color */
    /* ... other colors */
}
```

## 📂 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🌐 Deployment

### Deploy to GitHub Pages:

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Deploy to Netlify:

1. Sign up at https://netlify.com
2. Drag and drop your folder
3. Your site is live!

### Deploy to Vercel:

1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 💡 Tips

- **Add your resume:** Create a PDF of your resume and link to it in the hero section
- **Use real images:** Replace placeholder project images with screenshots
- **Add your photo:** Consider adding a professional headshot in the About section
- **Keep it updated:** Regularly update with new projects and skills
- **Test on mobile:** Always check how it looks on different screen sizes
- **Add analytics:** Consider adding Google Analytics to track visitors

## 🛠️ Customization for Advanced Users

### Adding new sections:
1. Add HTML section after existing ones
2. Create corresponding CSS in `styles.css`
3. Add navigation link in the menu
4. Update JavaScript scroll spy if needed

### Adding animations:
- Use the `.fade-in` class on elements you want to animate
- Customize animation timing in `styles.css`

### Making the contact form work:
Update the form handler in `script.js` around line 105 to integrate with your backend or form service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Feel free to use this template for your personal portfolio. No attribution required!

## 🤝 Need Help?

If you need help customizing your portfolio:
1. Check the comments in the code
2. Google specific CSS/HTML/JS questions
3. Use browser DevTools to inspect and modify elements
4. Consider hiring a developer for advanced customizations

---

**Good luck with your job search! 🎯**

Remember: Your portfolio is often the first impression employers have of you. Keep it:
- Professional
- Up-to-date
- Error-free
- Fast-loading
- Easy to navigate
