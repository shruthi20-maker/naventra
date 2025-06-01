# Naventra Contact Manager

A full-stack contact management application built with MERN stack (MongoDB, Express.js, React, Node.js).


## Features

- Create, read, update, and delete contacts
- Search functionality to filter contacts
- Responsive design for desktop, tablet, and mobile
- Modern UI with Tailwind CSS
- Toast notifications for user feedback
- Pagination for handling large contact lists

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

### Frontend
- React.js
- Tailwind CSS
- Axios for API requests
- React Router for navigation

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation or MongoDB Atlas account)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/shruthi20-maker/naventra.git
cd naventra
```

### 2. Set up the backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create a .env file in the server directory with the following content:
# MONGO_URL=mongodb://localhost:27017/contactsdb
echo "MONGO_URL=mongodb://localhost:27017/contactsdb" > .env

# Start the server in development mode
npm run dev
```

The server will be running on http://localhost:8080

### 3. Set up the frontend

```bash
# Open a new terminal window/tab
# Navigate to client directory from the project root
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The client application will be running on http://localhost:5173

## API Endpoints

The API base URL is: `http://localhost:8080/api/v1/user`

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/get-contacts` | Get all contacts with pagination |
| GET | `/get-contact/:id` | Get a specific contact by ID |
| POST | `/add-contact` | Create a new contact |
| PUT | `/update-contact/:id` | Update a contact by ID |
| DELETE | `/delete-contact/:id` | Delete a contact by ID |

## API Request & Response Examples

### GET /api/v1/user/get-contacts

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "name": "John Doe",
      "email": "john@example.com",
      "phoneNumber": 1234567890,
      "createdAt": "2023-06-22T19:08:20.894Z",
      "updatedAt": "2023-06-22T19:08:20.894Z"
    },
    
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalContacts": 50,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### POST /api/v1/user/add-contact

Request:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phoneNumber": 9876543210
}
```

Response:
```json
{
  "success": true,
  "message": "Contact created successfully",
  "data": {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phoneNumber": 9876543210,
    "createdAt": "2023-06-22T19:10:25.123Z",
    "updatedAt": "2023-06-22T19:10:25.123Z"
  }
}
```

## Data Model

### Contact Schema

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
}
```

## Folder Structure

```
naventra/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   └── src/                 # React source files
│       ├── assets/          # Images and other assets
│       ├── components/      # Reusable components
│       ├── pages/           # Page components
│       └── services/        # API services
├── server/                  # Backend Node.js application
│   ├── config/              # Configuration files
│   ├── controller/          # Request controllers
│   ├── models/              # Database models
│   └── router/              # API routes
└── README.md                # Project documentation
```

## Development

### Backend Port
The backend server runs on port 8080 by default: http://localhost:8080

### Frontend Port
The frontend development server runs on port 5173 by default: http://localhost:5173

## Deployment

### Backend
1. Ensure environment variables are properly set
2. Build and deploy to your hosting provider
   ```bash
   cd server
   npm start
   ```

### Frontend
1. Create a production build
   ```bash
   cd client
   npm run build
   ```
2. Deploy the contents of the `dist` folder to your web server or static hosting service

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/shruthi20-maker/naventra.git](https://github.com/shruthi20-maker/naventra.git)
