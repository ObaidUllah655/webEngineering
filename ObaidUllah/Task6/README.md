# Task 6 — Local Storage Notes Application

## Objective
Create a persistent Notes app using the browser's Local Storage API with ES6 features.

## Features
- ✅ Add new notes (title + body + category tag)
- ✅ View all saved notes (grid layout)
- ✅ Delete notes with fade-out animation
- ✅ Search notes (filters by title or body content)
- ✅ Sort: Newest First / Oldest First / A→Z
- ✅ Notes **persist after page refresh** (Local Storage)
- ✅ Live storage size indicator (bytes used)
- ✅ Character counter for note body
- ✅ Toast notification on save
- ✅ Pre-seeded with 3 sample notes on first run

## ES6 Classes

### `Note` class
```js
class Note {
  constructor(title, body, tag) {
    this.id        = Date.now().toString();  // unique ID
    this.title     = title.trim() || 'Untitled';
    this.body      = body.trim();
    this.tag       = tag;
    this.createdAt = new Date().toISOString();
  }
}
```

### `NotesManager` class
```js
class NotesManager {
  constructor(storageKey) { ... }
  load  = () => JSON.parse(localStorage.getItem(key));  // reads Local Storage
  save  = () => localStorage.setItem(key, JSON.stringify(this.notes));  // writes
  add   = (title, body, tag) => { this.notes.unshift(new Note(...)); this.save(); }
  delete = (id) => { this.notes = this.notes.filter(n => n.id !== id); this.save(); }
  search = (q) => this.notes.filter(n => n.title.includes(q) || n.body.includes(q));
  getAll = () => this.notes.map(n => ({ ...n }));
}
```

## Local Storage API Usage
| Operation | Code |
|-----------|------|
| Save | `localStorage.setItem(key, JSON.stringify(data))` |
| Load | `JSON.parse(localStorage.getItem(key))` |
| Size check | `new Blob([raw]).size` |

## ES6 Features Summary
| Feature | Usage |
|---------|-------|
| Classes | `Note`, `NotesManager` |
| Arrow functions | All methods as class fields, event handlers, sort comparators |
| `const` / `let` | All variable declarations |
| Template literals | Card HTML building with destructuring |
| Destructuring | `({ id, title, body, tag, createdAt }) =>` in `map()` |
| `filter()` | `delete`, `search` |
| `map()` | Card rendering, `getAll()` |
| Spread (`...`) | `{ ...n }` shallow copy in `getAll()` |
| `sort()` with arrow | Three sort modes |

## How to Run
Open `index.html` in any modern browser. No internet required. Notes are saved automatically.

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation |
| `README.md` | This explanation |
