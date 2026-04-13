# 🚀 Task Manager Backend (Node.js + Express)

This is a backend project built using Node.js, Express, and MongoDB.  
It allows users to manage tasks through REST APIs.
This project now supports full CRUD operations.

---

## 📌 Features

- Create a task (stored in MongoDB)
- Get all tasks from database
- Update a task
- Delete a task
- Mark task as completed 
- REST API architecture  

---

## 🔄 Current Progress

- ✅ Project setup completed
- ✅ Folder structure implemented
- ✅ Express server created
- ✅ MongoDB connected
- ✅ Create & Get APIs working
- ✅ Update & Delete APIs implemented
- ✅ Task completion feature added

---

## 🗄️ Database

- MongoDB Atlas used for cloud database
- Mongoose used for schema and data modeling

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

### 1. Clone the repository

git clone https://github.com/rathore45-56/task-manager-backend.git


### 2. Navigate to project folder

cd task-manager-backend


### 3. Install dependencies

npm install


### 4. Run the server

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

```
--- 

➤ Update a task
PUT /api/tasks/:id

#### Request Body:
```json
{
  "title": "Updated Task"
}

```
---

➤ Delete a task
DELETE /api/tasks/:id

---

➤ Mark task as completed
PATCH /api/tasks/:id/complete
