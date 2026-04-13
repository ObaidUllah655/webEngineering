# Task 2 — AJAX Pagination Implementation

## Objective
Create a web page that fetches data from a JSON API and implements pagination.

## Implementation

### API Used
`https://jsonplaceholder.typicode.com/posts` — returns 100 posts.

### How Pagination Works
1. All 100 posts are fetched once on page load using `fetch()`
2. Posts are stored in a `let allPosts = []` array
3. A `renderPage(page)` arrow function slices the array: `allPosts.slice(start, start + PER_PAGE)`
4. The pagination bar is rebuilt on every page change, showing a 5-button window

### ES6 Features Used
| Feature | Where |
|---------|-------|
| `const` / `let` | All variable declarations |
| Arrow functions | `fetchPosts`, `renderPage`, `renderPagination`, `.map()`, `.slice()` |
| Async/Await | `fetchPosts` for clean async AJAX |
| Template literals | Generating post cards HTML |
| Destructuring | Post object fields in `.map()` |

### Error Handling
- A visible error banner appears if the fetch fails
- `console.error()` logs the error details

## How to Run
Open `index.html` in any modern browser (requires internet for the API call).

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation |
| `README.md` | This explanation |
