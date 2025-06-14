# Agentic Development Docs

Modern documentation management system using **Docusaurus** + **Netlify CMS** for agile and AI-assisted development workflows.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the development server at `http://localhost:3000/agentic-development-docs/`

### Content Management

Visit `http://localhost:3000/admin/` to access the Netlify CMS interface for editing content.

### Build

```bash
npm run build
```

Generates static files in the `build` directory.

### Serve Built Site

```bash
npm run serve
```

Serves the built site locally for testing.

## 📚 Features

- **Organized Documentation**: Clear structure for docs, guidelines, planning, and templates
- **Content Management**: Browser-based editing with Netlify CMS
- **Tag-based Organization**: Filter and discover content by tags
- **Template Browser**: Dedicated interface for finding and copying templates
- **Sprint Integration**: Built-in support for agile sprint planning
- **Status Tracking**: Active, archived, and draft content management
- **Local-first**: Works entirely offline and in Codespaces

## 🏗️ Structure

```
├── docs/
│   ├── docs/           # General documentation
│   ├── guidelines/     # Process guidelines
│   ├── planning/       # Sprint and project planning
│   └── templates/      # Reusable templates
├── src/
│   └── pages/
│       └── templates.js # Custom template browser
├── static/
│   └── admin/          # Netlify CMS configuration
├── blog/               # Blog posts and announcements
└── docusaurus.config.js # Main configuration
```

## 📝 Content Types

### Documentation
General guides, tutorials, and reference materials.

### Guidelines
Process standards, best practices, and workflows.

### Planning
Sprint planning, roadmaps, and project organization.

### Templates
Reusable formats for issues, user stories, requirements, etc.

## 🎯 Usage

### Adding Content
1. Use the CMS interface at `/admin/`
2. Or create Markdown files directly in the appropriate `docs/` subfolder
3. Include proper frontmatter with title, description, tags, and status

### Template Usage
1. Browse templates via the navigation or Template Browser page
2. Copy template content and adapt for your needs
3. Use consistent frontmatter structure

### Sprint Planning
1. Use the Sprint Template for organizing work
2. Follow Sprint Generation Guidelines
3. Reference Issue Template for well-structured issues

## 🔧 Configuration

### Docusaurus
Main configuration in `docusaurus.config.js`:
- Site metadata
- Navigation structure
- Build settings

### Netlify CMS
Configuration in `static/admin/config.yml`:
- Content collections
- Field definitions
- Editorial workflow

## 🚢 Deployment

The site can be deployed to:
- **GitHub Pages**: Built-in support
- **Netlify**: Direct integration with CMS
- **Vercel**: Simple deployment
- **Other static hosts**: Any CDN or static host

### GitHub Pages
```bash
npm run deploy
```

## 🤝 Contributing

1. Review the [Using the Documentation System](docs/docs/using-the-system.md) guide
2. Follow the established tagging and status conventions
3. Use templates for consistency
4. Keep content up to date

## 📖 Documentation

Full documentation is available in the system itself:
- [Getting Started](docs/docs/getting-started.md)
- [Using the System](docs/docs/using-the-system.md)
- [Guidelines](docs/guidelines/)
- [Templates](docs/templates/)

## 🛠️ Tech Stack

- **[Docusaurus](https://docusaurus.io/)**: Static site generator
- **[Netlify CMS](https://www.netlifycms.org/)**: Content management
- **[React](https://reactjs.org/)**: UI components
- **[Markdown](https://www.markdownguide.org/)**: Content format

## 📄 License

This project is licensed under the MIT License - see the repository for details.

## 🆘 Support

- Check the built-in documentation
- Review [Docusaurus docs](https://docusaurus.io/docs)
- Consult [Netlify CMS docs](https://www.netlifycms.org/docs/)
- Create an issue in the repository