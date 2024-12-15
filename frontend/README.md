# Project Name

## Overview

This is a full-stack web application with a frontend built using React and a backend built using Node.js and Express. The project is structured into two main folders: `frontend` and `backend`.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (for the database)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Configure the Environment Variables
Create a .env file in the root directory and add the following environment variables (you can get these from your database provider or generate them yourself):

plaintext
Copy code
PORT=5000
MONGO_URI=your-database-uri
JWT_SECRET=your-jwt-secret
Replace the placeholders with the actual values.

3. Install Dependencies
Backend:
Navigate to the backend folder and install the backend dependencies:
cd backend
npm install

Frontend:
Navigate to the frontend folder and install the frontend dependencies:

bash
Copy code
cd ../frontend
npm install
4. Running the Application
Backend:
To run the backend, use the following command in the backend folder:
npm run dev

Frontend:
To run the frontend, use the following command in the frontend folder:

npm run dev

5. Access the Application
The backend will run on http://localhost:5000.
The frontend will run on http://localhost:5173.
Notes
The backend will connect to MongoDB using the MONGO_URI from your .env file.
The JWT secret used for token authentication is defined in the .env file as JWT_SECRET.
