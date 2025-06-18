# Travel Site Backend – Developer Guide

Welcome to the backend for the Travel Accommodation Search Platform. This backend is built with **PostgreSQL**, **Postgraphile**, and **TypeScript (Node.js)** to serve a powerful GraphQL API.

---

## 📦 Tech Stack

* PostgreSQL
* Postgraphile (GraphQL API over DB)
* Node.js + TypeScript
* pg-pool
* GraphiQL (in-browser testing)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/travel-backend.git
cd travel-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup PostgreSQL Database

Ensure you have PostgreSQL running locally (default port 5432).

#### Create a new database:

```bash
createdb travel_db
```

### 4. Apply SQL Schema and Seed Data

Run the following commands in your terminal:

```bash
psql -U postgres -d travel -f db/schema.sql
psql -U postgres -d travel -f db/seed.sql
```

> Replace `-U postgres` if your local user/database credentials differ.

### 5. Create `.env` file

Create a `.env` file in the root with the following:

```env
DATABASE_URL=postgres://postgres:yourpassword@localhost:5432/travel
PORT=5000
```

---

## 🚀 Start the Server

```bash
npm run dev
```

Visit [http://localhost:5000/graphiql](http://localhost:5000/graphiql) to use the GraphQL Playground.

---

## 🧠 Features Overview

* GraphQL API auto-generated from DB schema
* Custom SQL function for multi-filter venue search
* WhatsApp dynamic link view
* Blog with categories, tags, comments
* Save/bookmark venue system
* Admin-friendly structure for further extension

---

## 🙋 Need Help?

If you face issues setting up, contact the backend team or raise an issue in the repository.

---

Built with 💚 by the Travel Backend Team
