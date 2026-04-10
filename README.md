# 🚀 Task Manager Backend (Node.js + Express)

This is a backend project built using Node.js, Express, and MongoDB.  
It allows users to manage tasks through REST APIs.

---

## 📌 Features

- Create a task
- Get all tasks
- Update a task (coming soon)
- Delete a task (coming soon)
- REST API architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📁 Project Structure

task-manager/
│
├── controllers/
│ └── taskController.js
│
├── routes/
│ └── taskRoutes.js
│
├── models/
│ └── taskModel.js
│
├── middlewares/
│ └── authMiddleware.js
│
├── config/
│ └── db.js
│
├── index.js
├── package.json


---

## 🚀 How to Run the Project

1. Clone the repository

git clone https://github.com/rathore45-56/task-manager-backend.git


2. Navigate to project folder

cd task-manager-backend


3. Install dependencies

npm install


4. Run the server

node index.js


OR (recommended)

npx nodemon index.js


---

## 📮 API Endpoints

### ➤ Get all tasks
GET /api/tasks


---

### ➤ Create a task
POST /api/tasks


#### Request Body:
```json
{
  "title": "Learn Backend"
}
