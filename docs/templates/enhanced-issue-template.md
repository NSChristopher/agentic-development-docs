---
title: Enhanced Issue Template
description: Template for creating issues with user story relationships
tags: [template, issue, agile, relationships]
status: active
type: template
---

# Enhanced Issue Template

## Issue Information

- **Issue ID**: [3-digit number, e.g., 001]
- **Title**: [Short, descriptive title]
- **Type**: [feature, bug, enhancement, task]
- **Priority**: [critical, high, medium, low]
- **Status**: [open, in-progress, review, closed]

## Description

_Describe the feature, bug, or task in detail. Include context and business value._

### Example Narrative
Jane is a frequent customer who often forgets what she ordered last time. When she logs in, she should see a list of her previous orders, each with details and a "Reorder" button. This will help her quickly repeat past purchases, improving her experience and increasing sales.

## Related User Stories

List the user stories this issue addresses:

- **US-001**: As a customer, I want to see my past orders so I can remember what I bought
- **US-005**: As a customer, I want to view the details of a specific order

_Reference the actual user story documents using their IDs._

## Requirements & Supporting Documents

- **project-requirements.md**, section [relevant section]
- **database-schemas/[schema-name].md**, entities: [Entity1, Entity2]
- **ui-designs/[design-name].md**, screens: [Screen1, Screen2]

## Acceptance Criteria

- [ ] All referenced user stories are fully implemented and testable
- [ ] UI matches approved designs
- [ ] Data integrates correctly with database schema
- [ ] Handles loading, error, and empty states gracefully
- [ ] [Add specific criteria for this issue]

## Dependencies

- **Depends on**: 
  - Issue-008: User authentication system
  - Issue-010: Order API backend
- **Blocks**: 
  - Issue-015: Order recommendations

## Technical Notes

### Stubbing & Mocks
If dependencies are not ready, use these mocks:
- Mock user data as defined in user-stories
- Mock API responses from database schema contracts

### Branch & PR Instructions
- **Branch**: `feature/issue-[ID]-[short-description]`
- **PR Target**: `dev` or `main`
- **Testing**: Include unit tests and integration tests

## Additional Information

_Any other relevant details, links, or context._