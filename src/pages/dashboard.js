import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Mock data - in a real implementation, this would come from the CMS
const mockUserStories = [
  {
    id: 'US-001',
    title: 'User login functionality',
    status: 'ready',
    priority: 'high',
    storyPoints: 5,
    sprint: 'sprint-1'
  },
  {
    id: 'US-002', 
    title: 'Order history display',
    status: 'ready',
    priority: 'medium',
    storyPoints: 3,
    sprint: 'sprint-1'
  },
  {
    id: 'US-003',
    title: 'User profile management',
    status: 'draft',
    priority: 'low',
    storyPoints: 2,
    sprint: null
  }
];

const mockIssues = [
  {
    id: 'Issue-001',
    title: 'Implement user authentication',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Alice',
    userStories: ['US-001'],
    sprint: 'sprint-1'
  },
  {
    id: 'Issue-002',
    title: 'Create order history page', 
    status: 'open',
    priority: 'medium',
    assignee: 'Bob',
    userStories: ['US-002'],
    sprint: 'sprint-1'
  }
];

const mockSprints = [
  {
    id: 'sprint-1',
    title: 'Authentication and Core Features',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-01-29',
    totalStoryPoints: 8
  }
];

export default function Dashboard() {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTab, setSelectedTab] = useState('overview');

  const getStatusColor = (status) => {
    const colors = {
      'draft': 'badge--secondary',
      'ready': 'badge--info', 
      'in-progress': 'badge--warning',
      'done': 'badge--success',
      'open': 'badge--info',
      'closed': 'badge--success',
      'active': 'badge--success',
      'planning': 'badge--secondary',
      'completed': 'badge--success'
    };
    return colors[status] || 'badge--secondary';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'critical': 'badge--danger',
      'high': 'badge--warning',
      'medium': 'badge--info',
      'low': 'badge--secondary'
    };
    return colors[priority] || 'badge--secondary';
  };

  const renderOverview = () => (
    <div className="row">
      <div className="col col--4">
        <div className="card">
          <div className="card__header">
            <h3>User Stories</h3>
          </div>
          <div className="card__body">
            <p><strong>Total:</strong> {mockUserStories.length}</p>
            <p><strong>Ready:</strong> {mockUserStories.filter(s => s.status === 'ready').length}</p>
            <p><strong>In Progress:</strong> {mockUserStories.filter(s => s.status === 'in-progress').length}</p>
            <p><strong>Done:</strong> {mockUserStories.filter(s => s.status === 'done').length}</p>
          </div>
        </div>
      </div>
      <div className="col col--4">
        <div className="card">
          <div className="card__header">
            <h3>Issues</h3>
          </div>
          <div className="card__body">
            <p><strong>Total:</strong> {mockIssues.length}</p>
            <p><strong>Open:</strong> {mockIssues.filter(i => i.status === 'open').length}</p>
            <p><strong>In Progress:</strong> {mockIssues.filter(i => i.status === 'in-progress').length}</p>
            <p><strong>Closed:</strong> {mockIssues.filter(i => i.status === 'closed').length}</p>
          </div>
        </div>
      </div>
      <div className="col col--4">
        <div className="card">
          <div className="card__header">
            <h3>Sprints</h3>
          </div>
          <div className="card__body">
            <p><strong>Total:</strong> {mockSprints.length}</p>
            <p><strong>Active:</strong> {mockSprints.filter(s => s.status === 'active').length}</p>
            <p><strong>Completed:</strong> {mockSprints.filter(s => s.status === 'completed').length}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserStories = () => (
    <div className="card">
      <div className="card__header">
        <h3>All User Stories</h3>
      </div>
      <div className="card__body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Story Points</th>
                <th>Sprint</th>
              </tr>
            </thead>
            <tbody>
              {mockUserStories.map(story => (
                <tr key={story.id}>
                  <td><strong>{story.id}</strong></td>
                  <td>{story.title}</td>
                  <td><span className={`badge ${getStatusColor(story.status)}`}>{story.status}</span></td>
                  <td><span className={`badge ${getPriorityColor(story.priority)}`}>{story.priority}</span></td>
                  <td>{story.storyPoints}</td>
                  <td>{story.sprint || 'Unassigned'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderIssues = () => (
    <div className="card">
      <div className="card__header">
        <h3>Issues with User Stories</h3>
      </div>
      <div className="card__body">
        {mockIssues.map(issue => (
          <div key={issue.id} className="card margin-bottom--md">
            <div className="card__header">
              <div className="row">
                <div className="col">
                  <h4>{issue.id}: {issue.title}</h4>
                </div>
                <div className="col--auto">
                  <span className={`badge ${getStatusColor(issue.status)}`}>{issue.status}</span>
                  <span className={`badge ${getPriorityColor(issue.priority)} margin-left--sm`}>{issue.priority}</span>
                </div>
              </div>
            </div>
            <div className="card__body">
              <p><strong>Assignee:</strong> {issue.assignee}</p>
              <p><strong>Sprint:</strong> {issue.sprint}</p>
              <p><strong>Related User Stories:</strong></p>
              <ul>
                {issue.userStories.map(storyId => {
                  const story = mockUserStories.find(s => s.id === storyId);
                  return (
                    <li key={storyId}>
                      <strong>{storyId}:</strong> {story ? story.title : 'Story not found'}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSprints = () => (
    <div className="card">
      <div className="card__header">
        <h3>Sprint Overview</h3>
      </div>
      <div className="card__body">
        {mockSprints.map(sprint => (
          <div key={sprint.id} className="card margin-bottom--md">
            <div className="card__header">
              <div className="row">
                <div className="col">
                  <h4>{sprint.title}</h4>
                </div>
                <div className="col--auto">
                  <span className={`badge ${getStatusColor(sprint.status)}`}>{sprint.status}</span>
                </div>
              </div>
            </div>
            <div className="card__body">
              <p><strong>Duration:</strong> {sprint.startDate} to {sprint.endDate}</p>
              <p><strong>Total Story Points:</strong> {sprint.totalStoryPoints}</p>
              
              <h5>User Stories in Sprint</h5>
              <ul>
                {mockUserStories
                  .filter(story => story.sprint === sprint.id)
                  .map(story => (
                    <li key={story.id}>
                      <strong>{story.id}:</strong> {story.title} 
                      <span className={`badge ${getStatusColor(story.status)} margin-left--sm`}>{story.status}</span>
                    </li>
                  ))}
              </ul>
              
              <h5>Issues in Sprint</h5>
              <ul>
                {mockIssues
                  .filter(issue => issue.sprint === sprint.id)
                  .map(issue => (
                    <li key={issue.id}>
                      <strong>{issue.id}:</strong> {issue.title} 
                      <span className={`badge ${getStatusColor(issue.status)} margin-left--sm`}>{issue.status}</span>
                      <small> (Assignee: {issue.assignee})</small>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout
      title="Project Dashboard"
      description="Project management dashboard for user stories, issues, and sprints">
      <div className="container margin-vert--lg">
        <h1>Project Management Dashboard</h1>
        <p>Monitor and manage your project's user stories, issues, and sprints.</p>

        {/* Navigation tabs */}
        <div className="tabs">
          <ul className="tabs__list" role="tablist">
            <li 
              className={`tabs__item ${selectedTab === 'overview' ? 'tabs__item--active' : ''}`}
              role="tab"
              onClick={() => setSelectedTab('overview')}
            >
              Overview
            </li>
            <li 
              className={`tabs__item ${selectedTab === 'user-stories' ? 'tabs__item--active' : ''}`}
              role="tab"
              onClick={() => setSelectedTab('user-stories')}
            >
              User Stories
            </li>
            <li 
              className={`tabs__item ${selectedTab === 'issues' ? 'tabs__item--active' : ''}`}
              role="tab"
              onClick={() => setSelectedTab('issues')}
            >
              Issues
            </li>
            <li 
              className={`tabs__item ${selectedTab === 'sprints' ? 'tabs__item--active' : ''}`}
              role="tab"
              onClick={() => setSelectedTab('sprints')}
            >
              Sprints
            </li>
          </ul>
        </div>

        {/* Tab content */}
        <div className="margin-top--lg">
          {selectedTab === 'overview' && renderOverview()}
          {selectedTab === 'user-stories' && renderUserStories()}
          {selectedTab === 'issues' && renderIssues()}
          {selectedTab === 'sprints' && renderSprints()}
        </div>

        {/* Quick actions */}
        <div className="margin-top--xl">
          <h2>Quick Actions</h2>
          <div className="button-group">
            <a href="/admin" className="button button--primary">
              Create New User Story
            </a>
            <a href="/admin" className="button button--secondary">
              Create New Issue
            </a>
            <a href="/admin" className="button button--secondary">
              Create New Sprint
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}