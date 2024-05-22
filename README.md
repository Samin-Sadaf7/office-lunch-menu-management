# Office Lunch Menu Management System

## Technologies Used

- Backend: Node.js, Express.js
- Frontend: React.js
- Database: PostgreSQL

## Features

- **Admin Interface**:
  - Add Daily Menu Options
  - View Employee Choices
- **Employee Interface**:
  - View Daily Menu
  - Select Lunch Choice

## Database Schema

- **Menu**:
  - `id`: Integer, Primary Key
  - `date`: Date
  - `name`: String
  - `description`: String
- **Employee**:
  - `id`: Integer, Primary Key
  - `name`: String
- **LunchChoice**:
  - `id`: Integer, Primary Key
  - `menuId`: Integer, Foreign Key
  - `employeeId`: Integer, Foreign Key

## Setup Instructions

### Backend

1. Install dependencies: `npm install`
2. Run migrations: `npx sequelize-cli db:migrate`
3. Start the server: `npm run start`

### Frontend

1. Install dependencies: `npm install`
2. Start the development server: `npm start`

## Instructions to Run the Project

1. Ensure PostgreSQL is running and the database is set up.
2. Start the backend server.
3. Start the frontend server.
4. Open `http://localhost:3000` in your browser.
