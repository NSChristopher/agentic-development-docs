---
title: Using the Documentation System
description: Guide for contributors on how to use Docusaurus + Decap CMS
tags: [docs, guide, cms, docusaurus]
status: active
type: documentation
---

# Using the Documentation System

This documentation system combines **Docusaurus** for site generation with **Decap CMS** (formerly Netlify CMS) for easy content management. Here's how to use it effectively.

## Overview

### What is Docusaurus?
Docusaurus generates the static website you're viewing now from Markdown files. It provides:
- Fast, searchable documentation
- Automatic sidebar navigation
- Built-in blog functionality
- Tag-based organization

### What is Decap CMS?
Decap CMS (formerly Netlify CMS) provides a user-friendly interface for editing content without touching code directly. It offers:
- Browser-based editing
- Markdown preview
- Metadata management
- Editorial workflow

## Getting Started

### For Developers

1. **Local Development**:
   ```bash
   npm install
   npm start
   ```
   Visit `http://localhost:3000` to see the site.

2. **Content Management**:
   Visit `http://localhost:3000/admin` to access the CMS interface.

3. **Building**:
   ```bash
   npm run build
   npm run serve
   ```

### For Content Editors

1. **Access the CMS**: Navigate to `/admin` on the site
2. **Edit Content**: Choose from:
   - **Documentation**: General docs and guides
   - **Guidelines**: Process and standard documents
   - **Planning**: Sprint and project planning materials
   - **Templates**: Reusable templates and boilerplates

3. **Content Fields**: Each piece of content has:
   - **Title**: Display name
   - **Description**: Brief summary
   - **Tags**: For filtering and organization
   - **Status**: Active, archived, or draft
   - **Type**: Content categorization
   - **Sprint**: Optional sprint assignment
   - **Body**: The main content in Markdown

## Content Organization

### Folder Structure
```
docs/
├── docs/           # General documentation
├── guidelines/     # Process guidelines
├── planning/       # Sprint and project planning
└── templates/      # Reusable templates
```

### Tagging Strategy
Use consistent tags for better organization:
- **Content Type**: `docs`, `guidelines`, `planning`, `template`
- **Process**: `agile`, `sprint`, `issue`
- **Technology**: `database`, `ui`, `api`
- **Status**: Use the status field instead of tags

### Status Management
- **active**: Currently relevant content
- **archived**: Outdated but preserved content
- **draft**: Work in progress

## Writing Content

### Markdown Support
The system supports full Markdown including:
- Headers, lists, links
- Code blocks with syntax highlighting
- Tables and blockquotes
- Mermaid diagrams (for flowcharts, etc.)

### Cross-References
Link between documents using relative paths:
```markdown
[Issue Template](../templates/issue-template)
[Sprint Guidelines](../guidelines/sprint-generation-guidelines)
```

### Frontmatter Template
Always include proper frontmatter:
```yaml
---
title: Your Document Title
description: Brief description
tags: [relevant, tags, here]
status: active
type: documentation
sprint: sprint-1  # optional
---
```

## Template Usage

### Finding Templates
1. Browse the **Templates** section in navigation
2. Use the **Template Browser** page for filtering
3. Search by tags or content

### Using Templates
1. Copy the template content
2. Create a new document in the appropriate section
3. Modify the template for your needs
4. Update the frontmatter appropriately

## Best Practices

### For Documentation
- Use clear, descriptive titles
- Include comprehensive descriptions
- Tag appropriately for discovery
- Link to related documents
- Keep content up to date

### For Planning
- Follow sprint naming conventions
- Reference user stories and requirements
- Use templates for consistency
- Update status as work progresses

### For Templates
- Make templates generic and reusable
- Include example content with `<small>` tags
- Document template usage in the description
- Keep templates focused on specific use cases

## Maintenance

### Regular Tasks
1. **Review Status**: Update outdated content to "archived"
2. **Tag Cleanup**: Ensure consistent tagging
3. **Link Checking**: Verify internal links work
4. **Template Updates**: Keep templates current with best practices

### Troubleshooting
- **Build Errors**: Check for broken links or invalid Markdown
- **CMS Issues**: Verify frontmatter format
- **Missing Content**: Check file paths and naming conventions

## Advanced Features

### Custom Components
The system supports custom React components for special features like the Template Browser.

### Blog Integration
Use the blog section for announcements, retrospectives, or development updates.

### Search
Built-in search helps users find content across all sections.

### Deployment
The system can be deployed to various hosting platforms including GitHub Pages, Netlify, or Vercel.

## Getting Help

- Check existing documentation in this system
- Review Docusaurus documentation at [docusaurus.io](https://docusaurus.io)
- Consult Decap CMS docs at [decapcms.org](https://decapcms.org/docs/)
- Create an issue in the repository for system-specific problems