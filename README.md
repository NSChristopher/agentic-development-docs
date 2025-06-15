# Agentic Development Docs

Modern documentation management system using **Docusaurus** + **Decap CMS** (formerly Netlify CMS) for agile and AI-assisted development workflows.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Verification

To verify your setup is properly configured:

```bash
./verify-setup.sh
```

This script checks all dependencies, configuration files, and scripts to ensure everything is ready to run.

### Development

#### Option 1: Full Development Environment (Recommended)
```bash
# Start both Docusaurus and CMS proxy server
./start-dev.sh
```

#### Option 2: Using npm script
```bash
# Start both services with one command
npm run start-with-cms
```

#### Option 3: Manual Setup
```bash
# Terminal 1: Start CMS proxy server
npm run cms-proxy

# Terminal 2: Start Docusaurus dev server  
npm start
```

### Access URLs
- **Main Site**: http://localhost:3000/agentic-development-docs/
- **CMS Admin**: http://localhost:3000/agentic-development-docs/admin/

## 📝 Content Management

The CMS provides browser-based editing for:
- 📚 **Documentation** - Core guides and references
- 📋 **Guidelines** - Development standards and processes  
- 📅 **Planning** - Sprint and project planning docs
- 📄 **Templates** - Reusable content templates

All content supports:
- ✅ Status tracking (active/archived/draft)
- 🏷️ Tag-based organization
- 📋 Sprint assignment
- 🔄 Version control via Git

## 🏗️ Production Build

```bash
npm run build
npm run serve
```

## 📚 Features

- **Organized Documentation**: Clear structure for docs, guidelines, planning, and templates
- **Content Management**: Browser-based editing with Decap CMS
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
│   └── admin/          # Decap CMS configuration
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

### Decap CMS
Configuration in `static/admin/config.yml`:
- Content collections
- Field definitions
- Editorial workflow

## 🚢 Deployment

### Netlify (Recommended)
The site is configured for automatic deployment on Netlify:

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18`
3. **Enable Netlify Identity** in site settings
4. **Enable Git Gateway** in Identity → Services
5. **CMS admin** will be available at `yoursite.netlify.app/admin`

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
- **[Decap CMS](https://decapcms.org/)**: Content management (formerly Netlify CMS)
- **[React](https://reactjs.org/)**: UI components
- **[Markdown](https://www.markdownguide.org/)**: Content format

## 📄 License

This project is licensed under the MIT License - see the repository for details.

## 🆘 Support

- Check the built-in documentation
- Review [Docusaurus docs](https://docusaurus.io/docs)
- Consult [Decap CMS docs](https://decapcms.org/docs/)
- Create an issue in the repository