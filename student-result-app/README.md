# Student Result App

This is a small React app that demonstrates basic CRUD operations against a JSON Server backend. It's intentionally simple and uses only `useState` for state management and the Fetch API for network calls. Data fetching is done only on user actions (no `useEffect`).

Quick setup

1. Install dependencies

```bash
cd student-result-app
npm install
```

2. Start JSON Server (serves `db.json` on port 3001)

```bash
npm run server
```

3. In another terminal, start the React app

```bash
npm start
```

Notes

- JSON Server endpoint: `http://localhost:3001/students`
- Use the **Load Students** button to fetch the list.
- After Add/Edit/Delete, an alert will inform you and you can click **Load Students** to refresh data.
