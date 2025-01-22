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

## ScreenShots from Render

Sign in page

![signInPage](https://github.com/user-attachments/assets/1d3b6d47-53c9-4a17-ab14-234fbcbc0ab4)

Sign up page

![signUpPage](https://github.com/user-attachments/assets/9c3d143b-36d3-4107-952f-5643afc8df35)

Main UI

![mainUI](https://github.com/user-attachments/assets/2933972b-e893-4886-8db5-b194dd9541f3)

Real-Time-Messaging

![realTimeMessaging1](https://github.com/user-attachments/assets/c5453c7d-3c91-4a13-8e5f-eadb5dd6fdc3)
![RealtimeTest2](https://github.com/user-attachments/assets/7a93fd59-3114-4c5a-b0cf-a8558cb30768)

Profile Page

![Profilepage](https://github.com/user-attachments/assets/a003e745-9744-46fa-b9b9-42b10a62c59e)

Profile Image Editing

![editProfileImage](https://github.com/user-attachments/assets/8d8b3edc-96ac-4e66-96a3-7ca815a9eed1)

Theme Page and Theme Editing

![ThemePage](https://github.com/user-attachments/assets/cb4f1b3a-3a03-4478-aaa9-9ba7365094ce)
![Theme1](https://github.com/user-attachments/assets/fbf0fff1-e64e-4d30-a49a-2e9c365cc621)
![Theme2](https://github.com/user-attachments/assets/6b86edfe-65fa-4fb4-b582-2b17e50cee42)
![Theme3](https://github.com/user-attachments/assets/37e2ec94-0295-4841-bbd5-e78ae859b866)


