# Hashpass

A beginner-friendly full-stack authentication project using:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- SQLite

This project demonstrates basic frontend-backend communication and CRUD operations using a simple login and registration system.

---

# Features

- User Registration
- User Login
- SQLite Database Storage
- REST API using Express
- Simple Frontend UI
- Beginner Friendly Structure

---

# Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Frontend Structure |
| CSS | Styling |
| JavaScript | Frontend Logic |
| Node.js | Backend Runtime |
| Express.js | Server Framework |
| SQLite | Database |

---

# Project Description

This project is a simple authentication system where users can:

1. Register using a username and password
2. Login using the same credentials
3. Store user data inside a SQLite database

The frontend communicates with the backend using the Fetch API.

The backend handles:
- HTTP requests
- Database operations
- User authentication logic

SQLite is used as a lightweight local database.

> Note:
> Passwords are stored as plain text for learning purposes only.
> Do NOT use this approach in production applications.

---

# Project Architecture

```txt
                ┌──────────────────┐
                │     Frontend     │
                │ HTML/CSS/JS UI   │
                └────────┬─────────┘
                         │
                  Fetch API Requests
                         │
                         ▼
                ┌──────────────────┐
                │     Express      │
                │    Node Server   │
                └────────┬─────────┘
                         │
                SQLite Queries
                         │
                         ▼
                ┌──────────────────┐
                │     SQLite DB    │
                │    users.db      │
                └──────────────────┘
