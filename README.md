# Real-Time Chat App

This is a real-time chat app that allows users to sign up, sign in, and chat with others. It also includes features like profile photo editing and a theme toggle between light, dark and other modes.

---

## Features

- Sign Up/Sign In: Users can create accounts and log in securely.
- Profile Photo Editing: Users can upload and change their profile picture.
- Theme Toggle: Switch between light and dark themes for a personalized experience.
- Real-Time Messaging: Chat with others instantly with socket-based communication.
---

## Tech Stack

### Frontend:

- **React**: Core library for building the user interface.
- **Daisy-UI**: For styling and prebuilt components.
- **Zustand**: For state management.
- **Axios**: To handle API calls.
- **Vite**: For development and building the frontend.

### Backend:

- **Express**: For building the server and handling API requests.
- **MongoDB**: As the database to store posts.
- **Mongoose**: To interact with MongoDB.
- **Socket.io**: For real-time communication between client and server.
- **Cloudinary**: For storage of profile photo that can potentially become large.

---

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- MongoDB (installed locally or accessible remotely)
- Cloudinary (Create free account online) 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following:

```env
MONGODB_URI=yourURI
PORT=5001
JWT_SECRET=yoursecretkey
CLOUDINARY_CLOUD_NAME=yourCloudName
CLOUDINARY_API_KEY=youAPIKey
CLOUDINARY_SECRET=yourCredentials
MODE_ENV=development
```

---

## Running the Application

### Backend:

Start the backend server:

```bash
cd backend
npm run start
```

### Frontend:

Start the frontend development server:

```bash
cd frontend
npm run start
```

Open your browser and navigate to:

```
http://localhost:5173
```

---

## Contributing

Feel free to fork the repository, make your changes, and create a pull request. Contributions are welcome!

---

## License

This project does not currently have a license.

---

## Visit the website
https://chat-app-3qzx.onrender.com/
