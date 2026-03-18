# todo-app-server
# Todo App Client

This is the frontend for the Todo App. It's a simple, single-page application built with HTML, CSS, and JavaScript that communicates with the backend server.

## Features

- Add and view tasks in a clean interface.
- Tasks are fetched from and saved to the backend.
- Responsive design using Bootstrap.

## Tech Stack

- **Frontend**: HTML, CSS (Bootstrap), JavaScript (Fetch API)

## Prerequisites

- A modern web browser.
- The [Todo App Server](https://github.com/anasaemd25/todo-app-server) must be running.

## Installation and Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anasaemd25/todo-app-client.git
    cd todo-app-client
    ```

2.  **Open `index.html`:**
    Open the `index.html` file in your web browser. You can do this by double-clicking the file or using a live server extension in your code editor.

3.  **API Configuration:**
    Make sure the `app.js` file is configured to connect to your running server (by default `http://localhost:3001`).

    ```javascript
    // Example from js/app.js
    const API_URL = 'http://localhost:3001/api/tasks';
    ```

## Contact

anas.aemd@gmail.com
