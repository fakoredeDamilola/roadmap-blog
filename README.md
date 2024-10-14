# Blog Site: Rapid Development with EJS, Express, and MongoDB

Welcome to my **Blog Site**, a project quickly whipped up to explore the world of web development with **EJS**, **Express**, and **MongoDB**. It's a simple, yet functional site for sharing thoughts, articles, and comments. I built this in a short time, so while it may lack some polish, it serves as a great showcase for rapid prototyping and backend integration.

## 🌟 Features
- **User Authentication**: Register, log in, and manage your posts.
- **CRUD Functionality**: Create, read, update, and delete blog posts.
- **Comment System**: Users can comment on blog posts.
- **Responsive UI**: A clean and minimalistic UI built with **EJS** templating.
- **MongoDB Integration**: All data (users, articles, comments) is stored in MongoDB.

## 🛠️ Tech Stack
- **Express**: Backend framework for handling routes and logic.
- **EJS**: Embedded JavaScript templating for rendering the frontend.
- **MongoDB**: NoSQL database to store blog posts and user data.
- **Mongoose**: ODM for MongoDB, making it easy to interact with the database.

## 🚀 Getting Started

### Prerequisites
To run this project locally, you’ll need the following:
- **Node.js**: To run the application.
- **MongoDB**: A local or cloud MongoDB instance.

### Installation

1. **Clone the repo**:
    ```bash
    git clone [https://github.com/fakoredeDamilola/roadmap-blog](https://github.com/fakoredeDamilola/roadmap-blog)
    cd roadmap-blog
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following:
    ```
    MONGO_URI=your-mongodb-uri
    GOOGLE_CLIENT_ID=google-client-id
    GOOGLE_CLIENT_SECRET=google-client-secret
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

5. **Access the site**:
   Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 📝 Project Structure

```bash
.
├── models          # MongoDB schemas (Article, Comment, User)
├── routes          # Express routes (articles, comments, auth)
├── service          # Express service (articles, comments, auth)
├── views           # EJS templates for pages
├── public          # Static assets (CSS, images)
├── app.js          # Main entry point for the app
└── .env.example    # Example environment variable file
```

## 📚 Things to Improve
This project was built quickly as a proof of concept. There are many features I'd love to add in the future, such as:
- **Improved error handling**.
- **Rich text editor** for blog posts.
- **User roles** (Admin, Editor, etc.).
- **Search functionality** to find articles by tags or keywords.

## 🤔 Why This Project?
I built this project to quickly get a feel for **EJS** and **Express** with **MongoDB** and to have something tangible to demonstrate full-stack development. It’s a simple blog platform, but it's special to me because it shows what can be achieved in a short time.

## 🌱 Future Plans
- Transition to a more modern frontend (React or Vue).
- Add testing with Jest and Supertest for more robust API handling.
- Deploy to **Heroku** or **Vercel** with a **MongoDB Atlas** connection.

## 👋 Personal Note
This project might not be perfect, but I had a lot of fun building it! Whether you're checking out the code, giving feedback, or just browsing, I hope you find something useful here. If you have any suggestions or want to collaborate, feel free to reach out! 😊

## 💻 Contributing
Feel free to fork this project and submit pull requests if you'd like to help improve it. All contributions are welcome!

## 📧 Contact Me
If you want to chat about code, tech, or just life in general, hit me up at **dammy.fakorede@gmail.com**.

---

**Thank you** for checking out my Blog Site! 🙌
