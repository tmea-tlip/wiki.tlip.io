---
sidebar_position: 1
---

# Overview

## Prerequisites and Dependencies

Before starting the setup, ensure you have the following prerequisites and dependencies installed on your system.

### Prerequisites

- **Node.js**: Ensure you have Node.js v20.5.1 installed. You can download it from [nodejs.org](https://nodejs.org).
- **npm (Node Package Manager)**: npm is installed with Node.js. 
- **Git**: Git is essential for version control. You can download it from [git-scm.com](https://git-scm.com).

### Dependencies

- **TWIN Dependencies**: TWIN has its own dependencies listed in the `package.json` file. Install these dependencies in the project directory.

## Setting Up the Development Environment

You can set up your development environment in two ways: locally or using Docker.

### Local Development Setup

1. **Clone the Repository**: Clone the repository and navigate to the project directory.
2. **Install Dependencies**: Install the project dependencies.
3. **Environment Configuration**: Create a `.env.serve` file in the root directory of your project and copy environment variables from `.env.local`.
4. **Run the Application**:
   - **Backend**: Start the backend application.
   - **Frontend**: Start the frontend application.

### Using Docker for Development

Using Docker simplifies the setup by creating a containerized environment for your application.

1. **Install Docker**: Download and install Docker from [docker.com](https://www.docker.com).
2. **Run Docker Image**: Start the application using Docker.

## Setting Up the Database Environment

TWIN gives you the freedom to choose a database that suits your needs.

### DynamoDB (Localstack)

1. **Pull the LocalStack Docker Image**.
2. **Run LocalStack**: Start LocalStack in a Docker container.
3. **Environment Variables**: In the `.env.serve`, set the entity storage to DynamoDB.

### MySQL (Workbench)

1. **Download and Install MySQL Workbench**.
2. **Open MySQL Workbench**: Create a new connection.
3. **Setup New Connection**: Enter the connection details.
4. **Test the Connection**: Ensure the connection is successful.
5. **Save the Connection**.
6. **Set Environment Variables**: Configure MySQL settings in the `.env.serve`.

### MySQL (Docker)

1. **Pull the MySQL Docker Image**.
2. **Start a MySQL Server Instance**.
3. **Set Environment Variables**: Configure MySQL settings in the `.env.serve`.

## Caveats

If you are using Windows, the `nx` package may fail to compile if your project path contains spaces. Therefore, avoid saving the project in a folder name with spaces. For example, a bad folder name would be `twin project`, while a good folder name would be `twinproject` or `twin-project`.
