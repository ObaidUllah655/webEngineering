# Task 5 — Dynamic To-Do List Application

## Objective
Build an interactive To-Do List using modern ES6 features.

## Features
- ✅ Add new tasks (Enter key or button)
- ✅ Mark tasks as completed (toggle)
- ✅ Delete individual tasks
- ✅ Clear all completed tasks
- ✅ Filter by: All / Pending / Completed
- ✅ Live stats counter (Total / Done / Pending)
- ✅ Pre-seeded with sample tasks

## ES6 Classes
### `Task` class
```js
class Task {
  constructor(text) {
    this.id        = Date.now();   // unique id
    this.text      = text;
    this.completed = false;
    this.createdAt = new Date().toLocaleString(...);
  }
  toggle() { this.completed = !this.completed; }
}
```

### `TaskManager` class
```js
class TaskManager {
  constructor() { this.tasks = []; }
  add(text)    { this.tasks.push(new Task(text)); }
  delete = (id) => { this.tasks = this.tasks.filter(t => t.id !== id); }
  toggle = (id) => { /* finds task and calls toggle() */ }
  getFiltered = (filter) => { /* returns filtered array */ }
}
```

## Array Methods Used
| Method | Purpose |
|--------|---------|
| `filter()` | `delete`, `clearCompleted`, `getFiltered`, stats |
| `map()` | Rendering task items as HTML strings |
| `find()` | Locating a task by ID for `toggle` |
| `forEach()` | Seeding sample tasks |

## ES6 Features Summary
| Feature | Usage |
|---------|-------|
| Classes | `Task`, `TaskManager` |
| Arrow functions | `delete =`, `toggle =`, `addTask`, `deleteTask`, event listeners |
| `const` / `let` | Variable declarations |
| Template literals | Task HTML building in `render()` |
| `filter()` · `map()` · `find()` | Core task management logic |

## How to Run
Open `index.html` in any modern browser. No internet required.

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation |
| `README.md` | This explanation |
