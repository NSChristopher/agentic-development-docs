# Issue Generation Guidelines

These guidelines are intended for anyone (student, developer, or agent) creating issues for this project. The goal is to ensure that every issue is clear, actionable, and well-supported by our project documentation, enabling both asynchronous teamwork and effective agentic (AI-assisted) workflows.

---

## 1. Reference Core Project Documents

When generating issues, always use and reference:
- `requirements.md`
- `user-stories.md`
- `ui-wireframes.md`
- `database-schema.md`
- `api.md`

---

## 2. Scope and Structure Each Issue

- **Actionable:** Each issue should describe a complete, self-contained chunk of work—ideally covering one or more closely related user stories.
- **Balanced:** Avoid issues that are too small (single UI field) or too large (entire application).
- **Grouped when Logical:** If several user stories naturally fit together (e.g., all “Order history” flows), combine them for efficient agentic work.

---

## 3. Include All Relevant Context

- **User Stories:** List the story text from `user-stories.md` that this issue addresses.
- **Requirements:** Reference the section(s) of `requirements.md` most relevant to the work.
- **Wireframes:** Link or describe the corresponding parts of `ui-wireframes.md`.
- **Schema:** Specify the entities or fields from `database-schema.md` involved.
- **API Contracts:** Reference endpoints or data shapes in `api.md`, if applicable.

---

## 4. Address Dependencies and Async Work

- **List Dependencies:** Clearly state any other issues or features that must be completed first (e.g., “Depends on #12: User authentication”).
- **Suggest Stubs/Mocks:** Where dependencies are not ready, provide or reference mock data, fake API responses, or contract definitions that can be used to proceed asynchronously.
- **Encourage Contract-First:** Define and reference data shapes and interfaces up front to enable parallel work.

---

## 5. Define Acceptance Criteria

- Use clear checklists to describe what “done” looks like for the issue.
- Criteria should map directly to user needs, UI/UX, and data requirements.

---

## 6. Branching and PR Instructions

- Suggest a branch naming convention (e.g., `feature/issue-title`)

---

## 7. Clarity and Readability

- Be concise but specific.
- Always link to or quote sections from supporting docs, not just mention them.

---

## 8. Example Structure

```markdown
### Title
(Short, descriptive title for the feature or user stories.)

### User Stories Covered
- #3: [User story text]
- #4: [User story text]
_Refer to `user-stories.md`_

### Requirements & Supporting Docs
- See `requirements.md`, section X
- See `ui-wireframes.md`, wireframe Y
- See `database-schema.md`, entity Z

### Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2

### Dependencies
- #12: User authentication

### Stubbing & Mocks
- Use mock API response as in `api.md`

### Branch & PR Instructions
- Branch: `feature/xyz`
- PR target: `dev`
- Attach UI screenshots and test results

### Additional Notes
- (Anything else relevant)
