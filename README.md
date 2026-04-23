# ERP System 💼

A complete **Employee Resource Planning (ERP)** system built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **JWT-based authentication**. It supports role-based access (Admin, Manager, Employee) and enables companies to manage employee data, tasks, salaries, and attendance efficiently.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, JWT, Bcrypt
- **Database**: MongoDB (Mongoose ODM)
- **Other Tools**: Postman, VS Code, Nodemon

---

## ✨ Features

- 🔐 Secure Login with JWT
- 👥 Role-based Access (Admin, Manager, Employee)
- 📋 Manage Employees, Tasks, and Attendance
- 💰 Salary Calculation and Management
- 🧾 Employee Joining Reports
- 📈 Dashboard Analytics
- 🔍 Search & Filter Functionality
- 🗒️ Report generation (woking on it)

---
## Screenshots
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/09b27128-ca50-4d11-bf5a-d21ac5a8d483" />
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/df8aab19-fe8c-4ee7-b075-26e1e4f9e0b8" />
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/379aa84a-9c0c-4a79-9a82-421c947fbdb3" />
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/4933961b-89a5-41ad-a6e8-7705ea59b0e4" />
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/a23a82a3-e654-4687-b819-943e53482bb5" />
  <img width="48%" alt="image" src="https://github.com/user-attachments/assets/93b65876-a47e-496a-8da6-292719efb6d6" />

</div>


## 🛠️ Installation

Make sure you have **Node.js**, **MongoDB**, and **npm** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/erp-system.git
cd erp-system
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in the `backend` folder with:

```
MONGO_URI=mongodb://localhost:27017/erp
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
erp-system/
│
├── backend/         # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── config/
│
├── frontend/        # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
│
├── screenshots/     # Project screenshots
└── README.md
```

---

---

## 🧪 API Testing

All backend APIs are tested using **Postman**. Authentication uses JWT tokens for protected routes.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, open issues, or submit pull requests.

---

## 📬 Contact

**Abhishek Yadav**  
📧 [abhishekyadavr28@gmail.com](mailto:abhishekyadavr28@gmail.com)  
🌐 [LinkedIn](https://linkedin.com/in/YOUR-LINKEDIN)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
