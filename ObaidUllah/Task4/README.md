# Task 4 — Fetch API Data Display

## Objective
Retrieve and display data from a public API using modern JavaScript.

## Data Sources (switchable UI buttons)
| Source | Endpoint | Displayed Fields |
|--------|----------|-----------------|
| Users | `/users` | Name, Email, Phone, Website, City, Company |
| Posts | `/posts` | ID, User, Title, Body |
| Todos | `/todos` | ID, User, Title, Status (Done / Pending) |

## Implementation Details

### Fetch API Usage
```js
const res = await fetch(url);
if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
const data = await res.json();
```

### ES6 Features Used
| Feature | Example |
|---------|---------|
| Arrow functions | `const fetchData = async (url) => { ... }` |
| Destructuring | `({ id, name, email, phone }) => ...` from API objects |
| Template literals | `` `HTTP Error: ${res.status} ${res.statusText}` `` |
| `const` / `let` | All variable declarations |
| Async/Await | Clean async flow for all fetches |
| Array `.map()` | Building table rows from data arrays |
| Array `.filter()` | Counting completed todos |

### Error Handling
- If `res.ok` is false → throws an HTTP error
- `try/catch` wraps the entire fetch
- Error message is displayed in a visible red banner

## How to Run
Open `index.html` in any modern browser (requires internet connection).

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation |
| `README.md` | This explanation |
