### GitHub User API Backend

This is the backend service for the GitHub User App. It fetches GitHub user details, repositories, and mutual friends, providing a RESTful API for frontend applications.

# Features

- Fetch GitHub user information using the GitHub API.
- Retrieve a list of public repositories for a user.
- Determine mutual friends between GitHub users.
- Manage user data with MongoDB.

# Technologies

-Node.js: Backend runtime.
-Express.js: Framework for building RESTful APIs.
-MongoDB: Database for storing user data.
-Mongoose: ORM for MongoDB.
-Axios: HTTP client for making GitHub API requests.

# Endpoints

1. GET /api/users/:username
   Fetch GitHub user details.

2. GET /api/users/:username/repos
   Retrieve public repositories for a user.

3. GET /api/users/:username/mutual-friends/:otherUsername
   Find mutual friends between two users.
