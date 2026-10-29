# Chat Management System

A web-based chat management application built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

## Features

- View all chat records stored in MongoDB.
- Create new chat records.
- Edit existing chat records.
- Delete chat records.
- Store chat details such as sender, receiver, message, and timestamp.
- Render dynamic pages using EJS templates.
- Handle application requests using Express.js routes.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS
- **Other Packages:** method-override

## Project Structure

```text
chat-management-system/
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Node.js and npm
- MongoDB installed and running locally

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Indushree-000/chat-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Make sure your local MongoDB server is running.

5. Start the application using the start command configured in `package.json`. If no start script is configured, run:

   ```bash
   node index.js
   ```

6. Open the local URL displayed in your terminal.

## Learning Outcomes

- Implementing CRUD operations with Express.js.
- Connecting Node.js applications to MongoDB using Mongoose.
- Using EJS for server-side rendering.
- Handling HTTP requests and form submissions.
- Organizing an Express application into models, routes, and views.

## Author

Indushree