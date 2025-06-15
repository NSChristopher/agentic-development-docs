import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';

const templates = [
  {
    id: 'issue-template',
    title: 'Issue Template',
    description: 'Template for creating well-structured issues',
    tags: ['template', 'issue', 'agile'],
    path: '/docs/templates/issue-template'
  },
  {
    id: 'enhanced-issue-template',
    title: 'Enhanced Issue Template',
    description: 'Advanced template with user story relationships',
    tags: ['template', 'issue', 'agile', 'relationships'],
    path: '/docs/templates/enhanced-issue-template'
  },
  {
    id: 'user-stories-template',
    title: 'User Stories Template',
    description: 'Template for writing clear, actionable user stories',
    tags: ['template', 'user-stories', 'agile'],
    path: '/docs/templates/user-stories-template'
  },
  {
    id: 'user-story-template',
    title: 'Individual User Story Template',
    description: 'Template for creating modular, individual user stories',
    tags: ['template', 'user-story', 'agile', 'modular'],
    path: '/docs/templates/user-story-template'
  },
  {
    id: 'sprint-0-template',
    title: 'Sprint Template',
    description: 'Template for organizing sprint planning and tracking',
    tags: ['template', 'sprint', 'planning', 'agile'],
    path: '/docs/templates/sprint-0-template'
  },
  {
    id: 'enhanced-sprint-template',
    title: 'Enhanced Sprint Template',
    description: 'Advanced sprint template with relationships and tracking',
    tags: ['template', 'sprint', 'planning', 'agile', 'relationships'],
    path: '/docs/templates/enhanced-sprint-template'
  },
  {
    id: 'project-requirements-template',
    title: 'Project Requirements Template',
    description: 'Template for defining project requirements and scope',
    tags: ['template', 'requirements', 'project'],
    path: '/docs/templates/project-requirements-template'
  },
  {
    id: 'database-schema-template',
    title: 'Database Schema Template',
    description: 'Template for defining database entities and relationships',
    tags: ['template', 'database', 'schema'],
    path: '/docs/templates/database-schema-template'
  },
  {
    id: 'ui-wireframes-template',
    title: 'UI Wireframes Template',
    description: 'Template for documenting user interface wireframes and flows',
    tags: ['template', 'ui', 'wireframes', 'design'],
    path: '/docs/templates/ui-wireframes-template'
  }
];

export default function TemplateBrowser() {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique tags
  const allTags = [...new Set(templates.flatMap(t => t.tags))];

  // Filter templates based on search and tags
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => template.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const copyToClipboard = async (templateId) => {
    try {
      // In a real implementation, you'd fetch the template content
      // For now, we'll just copy the template path
      const template = templates.find(t => t.id === templateId);
      await navigator.clipboard.writeText(`Copy from: ${template.path}`);
      alert('Template path copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Layout
      title="Template Browser"
      description="Browse and copy templates for your project">
      <div className="container margin-vert--lg">
        <h1>Template Browser</h1>
        <p>Discover and copy reusable templates for your development workflow.</p>
        
        {/* Search and filters */}
        <div className="row margin-bottom--lg">
          <div className="col col--6">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="col col--6">
            <div>
              <strong>Filter by tags:</strong>
              <div style={{ marginTop: '8px' }}>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`button button--sm margin-right--sm margin-bottom--sm ${
                      selectedTags.includes(tag) ? 'button--primary' : 'button--secondary'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Template grid */}
        <div className="row">
          {filteredTemplates.map(template => (
            <div key={template.id} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>{template.title}</h3>
                </div>
                <div className="card__body">
                  <p>{template.description}</p>
                  <div>
                    {template.tags.map(tag => (
                      <span key={tag} className="badge badge--secondary margin-right--sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card__footer">
                  <div className="button-group">
                    <a
                      href={template.path}
                      className="button button--primary button--sm"
                    >
                      View Template
                    </a>
                    <button
                      onClick={() => copyToClipboard(template.id)}
                      className="button button--secondary button--sm"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text--center margin-vert--xl">
            <p>No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}