# AuthAPI 🔐

A simple and secure Authentication API built with **Node.js**, **Express**, and **MongoDB**. This API supports user registration, login, JWT-based authentication, and protected routes.

## 🚀 Features

- User registration & login
- JSON Web Token (JWT) authentication
- Password hashing with bcrypt
- Middleware-based route protection
- Environment configuration with dotenv
- MongoDB integration using Mongoose

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## 📁 Folder Structure

```
authApi/
├── config/          # DB connection config
├── controllers/     # Route logic
├── middleware/      # Auth middleware
├── models/          # Mongoose user schema
├── routes/          # API routes
├── .env             # Environment variables
├── server.js        # Entry point
└── package.json
```

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Jaishu07/authApi.git
cd authApi
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**

Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the server**
```bash
npm run dev
```

## 🧪 API Endpoints

### 🔹 Signup User

**`POST /api/v1/signup`**

**Body:**
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456",
  "role": "admin"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 🔹 Login User

**`POST /api/v1/login`**

**Body:**
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john",
    "email": "john@example.com",
    "role": "admin"
  }
}
```

### 🔹 Protected Routes

**`GET /api/v1/test`** - Test protected route

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Welcome to protected route",
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "email": "john@example.com"
  }
}
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/authapi` |
| `JWT_SECRET` | JWT secret key | `your_super_secret_key` |

## 📝 Usage Examples

### Using cURL

**Signup:**
```bash
curl -X POST http://localhost:5000/api/v1/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "email": "john@example.com",
    "password": "123456",
    "role": "admin"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "123456"
  }'
```

**Protected Route:**
```bash
curl -X GET http://localhost:5000/api/v1/test \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🛠️ Development

### Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start
```

### Dependencies

```json
{
  "bcrypt": "^5.1.0",
  "cookie-parser": "^1.4.6",
  "dotenv": "^16.0.3",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.1.0",
  "nodemon": "^2.0.22"
}
```

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes with middleware
- Environment variables for sensitive data
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Jaishu07**
- GitHub: [@Jaishu07](https://github.com/Jaishu07)

## 🙏 Acknowledgments

- Express.js community
- MongoDB team
- Node.js community
