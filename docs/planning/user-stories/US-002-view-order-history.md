---
story_id: "002"
title: "View Order History"
priority: "medium"
status: "ready"
tags: ["user-story", "orders", "history"]
---

# User Story Template

Use this template to create individual, modular user stories for your project.

## Story Format

**As a** customer  
**I want** to view my previous orders  
**So that** I can track my purchase history and reorder items easily

## Acceptance Criteria

- [ ] Given a logged-in customer, when they navigate to order history, then they should see a list of their orders
- [ ] Given order history, when displayed, then it should show order date, items, and total
- [ ] Given an order in the list, when clicked, then detailed order information should be displayed
- [ ] Orders should be sorted by date (newest first)
- [ ] Each order should display: order number, date, status, total amount
- [ ] System should handle pagination for customers with many orders

## Technical Notes

- Requires user authentication (depends on US-001)
- Database queries should be optimized for performance
- Consider caching for frequently accessed order data
- UI should be responsive for mobile devices

## Dependencies

- User authentication system (US-001)
- Order database schema
- User interface components for order display