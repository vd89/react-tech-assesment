# react-tech-assesment

---------------------------
REACT TECHNICAL ASSIGNMENT
=

Based on the attached screens and API endpoints, you will need to create a list of posts for a specific user. There are five core requirements for this assignment as per below:-

1) Display a list of posts from all users.

Assuming you are login with user id = 1;
2) User will be able to create new post.
3) User will be able to edit / make changes to an existing post.
4) Users will be able to give comments to an existing post.
5) User will be able to delete post / comments that belongs to them.

API resources
=

API base endpoint: https://606312790133350017fd282e.mockapi.io/api/v1

User Posts
-
GET    - /posts  (Get all posts)
POST   - /posts  (Create new post)
PUT    - /posts/:id (Update existing post)
DELETE - /posts/:id (Delete a post)

User Comments
-

GET    - /posts/:id/comments  (Get all comments for a post)
POST   - /posts/:id/comments  (Write a comment for a post)
DELETE - /posts/:id/comments/:id (Delete a comment from a post)



Product Requirements
=

- The listing page for posts will be sorted from to the latest to the oldest posts.
- The "Edit" and "Delete" link for each post will only be visible if the post belongs to the current user (Eg: user id = 1).
- When user click on "Edit" post link, page will scroll to top and data will be populated on form fields for editing.
- When user click on "Delete" post link, user should be prompted a confirmation for post deletion, and if they confirm, the particular post will be deleted.
- The {{n comments}} link located at the bottom left of each post card will be visible for all users and its purpose is to display count of comments for each post.
- When clicking on the title, image or {{n comments}} links of a post, user will be redirected to the post detail page with a list of comments (if any).
- Comments will be sorted from oldest to the most recent.

Technical Requirements
=

- The site will need to cater for mobile responsive.
- React CRA(Create React App) can be used as the base of the project and may include other frameworks to cover different aspects of the application such as:

1) Application Routing
2) UI Library
3) State Management
4) Component Styling Library

- The assignment should demonstrate usage of functional components as well as react features such as react hooks and context.
- Adding of code linting and writing of unit tests will be a plus.

This assignment will be assess in several aspects such as fulfillment of requirements(both product and technical), code quality, reusability, project structure, folder organization as well as code standardization and linting.
