import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function IdTracker() {
  const {siteConfig} = useDocusaurusContext();
  
  // This would need to be updated manually or via a build script
  // For now, providing a simple reference for users
  const userStoryIds = ['001', '002']; // Current IDs in use
  const issueIds = ['001']; // Current IDs in use
  const sprintIds = ['1']; // Current IDs in use

  const getNextId = (existingIds) => {
    const numbers = existingIds.map(id => parseInt(id)).sort((a, b) => a - b);
    let next = 1;
    for (const num of numbers) {
      if (num === next) {
        next++;
      } else {
        break;
      }
    }
    return next.toString().padStart(3, '0');
  };

  return (
    <Layout
      title="ID Tracker"
      description="Track and find next available IDs for user stories, issues, and sprints">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
          fontSize: '20px',
        }}>
        <div style={{ maxWidth: '800px', padding: '20px' }}>
          <h1>ID Tracker & Helper</h1>
          <p>Use this page to find the next available ID when creating new documents in the CMS.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
            
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
              <h3>📝 User Stories</h3>
              <p><strong>Format:</strong> US-XXX</p>
              <p><strong>Current IDs in use:</strong></p>
              <ul>
                {userStoryIds.map(id => (
                  <li key={id}>US-{id}</li>
                ))}
              </ul>
              <div style={{ backgroundColor: '#e8f5e8', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
                <strong>✅ Next suggested ID: US-{getNextId(userStoryIds)}</strong>
              </div>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
              <h3>🐛 Issues</h3>
              <p><strong>Format:</strong> issue-XXX</p>
              <p><strong>Current IDs in use:</strong></p>
              <ul>
                {issueIds.map(id => (
                  <li key={id}>issue-{id}</li>
                ))}
              </ul>
              <div style={{ backgroundColor: '#e8f5e8', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
                <strong>✅ Next suggested ID: {getNextId(issueIds)}</strong>
              </div>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
              <h3>🏃 Sprints</h3>
              <p><strong>Format:</strong> sprint-X</p>
              <p><strong>Current IDs in use:</strong></p>
              <ul>
                {sprintIds.map(id => (
                  <li key={id}>sprint-{id}</li>
                ))}
              </ul>
              <div style={{ backgroundColor: '#e8f5e8', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
                <strong>✅ Next suggested ID: {Math.max(...sprintIds.map(id => parseInt(id))) + 1}</strong>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '40px', backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '5px' }}>
            <h3>📋 How to Use</h3>
            <ol>
              <li>Check the "Next suggested ID" for the type of document you're creating</li>
              <li>Go to the <a href="/admin" target="_blank">CMS Admin</a> to create your document</li>
              <li>Use the suggested ID in the ID field</li>
              <li>If you're creating multiple documents, increment the number (e.g., 003, 004, 005)</li>
            </ol>
            
            <p><strong>⚠️ Note:</strong> This page is manually maintained. If you see conflicts, use the next available number in sequence.</p>
            
            <div style={{ marginTop: '20px' }}>
              <h4>Quick Links:</h4>
              <ul>
                <li><a href="/admin/#/collections/user-stories/new" target="_blank">Create New User Story</a></li>
                <li><a href="/admin/#/collections/issues/new" target="_blank">Create New Issue</a></li>
                <li><a href="/admin/#/collections/sprints/new" target="_blank">Create New Sprint</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}