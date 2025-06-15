---
title: Enhanced Sprint Template
description: Template for organizing sprints with relationships
tags: [template, sprint, planning, agile, relationships]
status: active
type: template
---

# Enhanced Sprint Template

## Sprint Overview

- **Sprint Number**: [e.g., 1, 2, 3]
- **Duration**: [Start Date] to [End Date]
- **Status**: [planning, active, completed, cancelled]

## Sprint Goal

_State the overall objective or theme for this sprint. What will be accomplished?_

Example: "Implement user authentication and basic order management functionality to enable customers to log in and view their order history."

## Sprint Backlog

### User Stories in Sprint

| Story ID | Title | Priority | Story Points | Status | Notes |
|----------|-------|----------|--------------|--------|-------|
| US-001 | User login functionality | High | 5 | Ready | Core authentication |
| US-002 | Order history display | Medium | 3 | Ready | Depends on US-001 |
| US-003 | User profile management | Low | 2 | Ready | Basic profile |

### Issues in Sprint

| Issue ID | Title | Type | Priority | Assignee | Status | Dependencies | User Stories |
|----------|-------|------|----------|----------|--------|--------------|--------------|
| Issue-001 | Implement user authentication | feature | high | Alice | in-progress | - | US-001 |
| Issue-002 | Create order history page | feature | medium | Bob | open | Issue-001 | US-002 |
| Issue-003 | Build user profile page | feature | low | Charlie | open | Issue-001 | US-003 |

## Team Information

### Team Members
- **Scrum Master**: [Name]
- **Product Owner**: [Name]
- **Developers**: [List team members]

### Capacity
- **Total Story Points**: [e.g., 10]
- **Available Hours**: [e.g., 80 hours]
- **Velocity**: [Based on previous sprints]

## Key Documents

Reference these documents during the sprint:
- **project-requirements/[project-name].md** - Project vision and requirements
- **database-schemas/[schema-name].md** - Database structure
- **ui-designs/[design-name].md** - UI/UX guidelines

## Sprint Planning Notes

_Document decisions made during sprint planning:_

- **Why these stories were selected**: [Reasoning]
- **Dependencies identified**: [List and mitigation plans]
- **Risks**: [Potential blockers and mitigation strategies]
- **Definition of Done**: [Specific criteria for completion]

## Daily Standup Template

### What was completed yesterday?
### What will be worked on today?
### Any blockers or impediments?

## Sprint Review & Retrospective

_Fill out after sprint completion:_

### Completed Work
- [x] User authentication system
- [x] Order history page
- [ ] User profile page (moved to next sprint)

### Metrics
- **Story Points Completed**: [e.g., 8/10]
- **Velocity**: [Actual vs. planned]
- **Burndown**: [Link to burndown chart]

### What Went Well
- [List positive outcomes]

### What Could Be Improved
- [List areas for improvement]

### Action Items for Next Sprint
- [Specific improvements to implement]

## Sprint Artifacts

### Links to Deliverables
- [Link to deployed features]
- [Link to documentation updates]
- [Link to test results]

### Code Branches
- [List of feature branches created]
- [Merge status]