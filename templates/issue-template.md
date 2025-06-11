# Issue Template

## Title
_What is the short, descriptive title for this issue or feature?_

---

## User Stories Covered
_Which user stories does this issue address? List by number and copy their text from user-stories-template.md._

- As a customer, I want to see my past orders so I can remember what I bought.  
- As a customer, I want to view the details of a specific order.  
  <small>(Examples only. Replace with your actual user stories.)</small>

_See `user-stories-template.md`, stories #3 and #4._

---

## Requirements & Supporting Documents
_Which documents or sections support this issue?_
- project-requirements.md, section [relevant section or heading]
- ui-wireframes.md, wireframes [1 & 2] for layouts and flow
- database-schema.md, entities: Order, User
- api.md, endpoints: `/orders`, `/orders/{id}`
  <small>(Examples only. Replace with your actual user stories.)</small>
---

## Acceptance Criteria
_What must be true for this issue to be considered complete?_
- [ ] All user stories listed above are fully implemented and testable.
- [ ] UI matches provided wireframes.
- [ ] Data is loaded from the backend, using schema and API contracts as specified.
- [ ] Handles loading, error, and empty states gracefully.
- [ ] (Add any additional, specific criteria relevant to this feature.)
  <small>(Examples only. Replace with your actual user stories.)</small>
---

## Dependencies
_What other issues or features must be completed first?_
- Depends on:
  - #10: User authentication
  - #12: Order API backend available  
    <small>(Example only. Replace as needed.)</small>

---

## Stubbing & Mocks
_If dependencies are not ready, what stubs or mock data can be used to proceed?_
