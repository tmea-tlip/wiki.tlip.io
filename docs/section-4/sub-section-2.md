---
sidebar_position: 2
---

# Setting Up the Development Environment
You can set up your development environment in two ways: locally or using Docker.

## Local Development Setup
Setting up a local development environment involves configuring your system to run the Node.js application directly.
1. Clone the Repository:
```bash
    git clone git@github.com:iotaledger/gtsc.git
    cd gtsc
```
2. Install Dependencies:
```bash
    npm install
```

3. Environment Configuration:
- Create a `.env.serve` file in the root directory of your project.
- Copy environment variables from `.env.local`. For example:
```bash
    cp .env.local .env.serve
```

4. Run the Application:
a. Backend
```bash
    npm run rest-server:serve
```
  Your backend should now be running on [http://localhost:3000](http://localhost:3000/).
b. Frontend
```bash
    npm run tlip:serve
```
Your backend should now be running on [http://localhost:4200](http://localhost:4200/).

## Using Docker for Development
Using Docker simplifies the setup by creating a containerised environment for your application.
1. Install Docker:
Download and install Docker from [docker.com](https://www.docker.com/).
2. Run docker image
```bash
    docker-compose up --build
```
Your application should now be running in a Docker container on http://localhost:3000 for the backend and
http://localhost:4200 for the frontend.