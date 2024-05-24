# Dev-Flow <img src="public/assets/images/site-logo.svg" />
#### DevFlow is a robust platform designed for developers to interact, seek help, and share knowledge. With a suite of features aimed at fostering a collaborative environment, DevFlow ensures that developers can efficiently resolve their queries and contribute to the community.

## Features

### **Question and Answer System**

- Ask Questions: Users can post questions related to development issues, seeking solutions from the community.
- Reply to Questions: Other users can provide answers to the posted questions.
- Upvote System: Users can upvote both questions and answers, helping highlight the most useful contributions.
- Question Card Details: Each question card displays the number of views, likes, and replies, giving a quick overview of its engagement.

### **User Profiles**

- Profile Page: Users can view and manage their personal profile, including their questions and answers.
- Edit Profile: Users can add and update personal information.
- Delete Answers: Users have the option to delete their answers if needed.

### **Tags**

- Tags Page: A dedicated page showcasing all tags used in the platform, helping users navigate and categorize content effectively.

### **Community Interaction**

- Community Page: A place to view other users, their activities, questions, answers, and badges.
- Badges: Users can earn badges based on their activity, such as asking questions, providing answers, and more.

### **Collections**

- Collection Page: Users can save their favorite questions to a collection for easy access and reference.

### **Sorting and Filtering**

- Sorting System: Every page includes sorting options to organize content by various criteria.
- Filtering System: A comprehensive filtering system on every page to narrow down content based on specific parameters.

### **Search Functionality**

- Global Search Bar: A universal search bar accessible from any page for quick and easy content discovery.
- Home Page Search: A specialized search bar on the home page for a more targeted search experience.

### **Popular Questions and Tags**

- Popular Questions: A sidebar displaying the most popular questions to keep users updated on trending topics.
- Popular Tags: A sidebar section showing the most used tags for quick access to popular topics.

## Technologies Used

### **Frontend**

- Next.js: A React framework for server-side rendering, static site generation, and more.
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Shadchn UI: A set of accessible and unstyled UI components.
- Tinymce: A rich text editor for managing content.
- React Hook Form: A library for managing forms in React.
- Lucide React: A collection of simple, customizable, and easy-to-use icons.

### **Backend**

- MongoDB: A NoSQL database for storing application data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Svix: A library for handling webhooks.

### **Validation and Parsing**

- Zod: A TypeScript-first schema declaration and validation library.

### **Utilities**

- Class Variance Authority: A library for managing class variance.
- Clsx: A utility for conditionally combining class names.
- Html-react-parser: A utility for converting HTML strings to React components.
- Query-string: A library for parsing and stringifying URL query strings.
- Prismjs: A syntax highlighter for code snippets.

### **Development Tools**

- TypeScript: A strongly typed programming language that builds on JavaScript.
- ESLint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- Prettier: An opinionated code formatter.
- Tailwindcss: A utility-first CSS framework.

## Running the Project Locally

### **Prerequisites**

- Node.js: Make sure you have Node.js installed. You can download it from here.
- MongoDB: Make sure you have MongoDB installed and running locally or have access to a MongoDB server.

### **Clone the repository**

``` 
git clone https://github.com/yourusername/stack-overflow-clone.git
cd stack-overflow-clone
```
### **Install dependencies**

``` 
npm install
```
### **Set up environment variables**
Create a ```.env.local``` file in the root of your project and add your environment variables (e.g., MongoDB connection string, API keys).

```
MONGODB_URI=mongodb://localhost:27017/your-database-name
NEXT_PUBLIC_API_KEY=your-api-key
```
### **Build and start for production**

```
npm run build

// To start the production server:

npm start

// To run ESLint and check for code quality issues

npm run lint
```

## Author
```
Saikat Roy Chandan
saikotroydev@gmail.com
```
