# ALX Listing App

---

## About the Project

The ALX Listing App is an initial scaffold for a modern **Airbnb clone**, focusing on establishing a robust and scalable codebase. This project leverages **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint** to create a well-organized foundation. The primary goal of this phase is to set up a clean folder structure, develop reusable components, and adhere to best practices, providing a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

## Project Structure

This project adopts a clear and organized folder structure to ensure maintainability and scalability:

* **`components/`**: This directory houses all reusable UI components, such as `Card` and `Button`. Grouping components here promotes modularity and makes it easier to manage the user interface.
* **`interfaces/`**: Here, you'll find all the **TypeScript** interfaces for the project. These interfaces define the shapes of objects and props, ensuring type safety and consistency across the codebase. For example, `CardProps` and `ButtonProps` are defined here.
* **`constants/`**: This folder stores any reusable data or strings, like API URLs, configuration settings, or common UI text. Centralizing these values helps in easy modification and reduces the chances of errors.
* **`public/assets/`**: This directory is dedicated to static assets such as images and SVGs. Organizing assets here ensures they are easily accessible and managed for use throughout the application.

---

## How to Run Locally

To get the ALX Listing App up and running on your local machine, follow these simple steps:

1.  **Clone the Repository**:
    First, clone this repository to your local machine:

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    ```

    Replace `[YOUR_REPOSITORY_URL]` with the actual URL of your GitHub repository.

2.  **Navigate to the Project Directory**:
    Change into the newly cloned project directory:

    ```bash
    cd alx-listing-app
    ```

3.  **Install Dependencies**:
    Install all the necessary project dependencies using npm:

    ```bash
    npm install
    ```

4.  **Run the Development Server**:
    Start the Next.js development server:

    ```bash
    npm run dev
    ```

5.  **View in Browser**:
    Once the server is running, open your web browser and go to `http://localhost:3000`. You should see the ALX Listing App running without any errors.