# Task 3 — JavaScript Form Validation

## Objective
Create a user registration form with client-side validation using ES6 features.

## Form Fields
- **Name** — required, minimum 3 characters
- **Email** — required, valid format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Password** — required, minimum 8 characters

## Validation Rules
| Field | Rules |
|-------|-------|
| Name | Required · Min 3 characters |
| Email | Required · Must match email regex pattern |
| Password | Required · Min 8 characters |

## ES6 Features Used
| Feature | How It's Used |
|---------|--------------|
| `const` / `let` | All variable declarations |
| Arrow functions | `validateName`, `validateEmail`, `validatePassword`, event handlers |
| Template literals | Success message: `` `Welcome, ${name}!...` ``, password length: `` `currently ${val.length}` `` |
| `let` re-assignment | `strength` counter incremented conditionally |

## Bonus Features
- **Live validation** as the user types (no need to click submit first)
- **Password strength meter** (4 bars: Weak / Medium / Strong)
- **Show/hide password toggle**
- **Success banner** with user's name after valid submission
- Input border turns green ✅ when valid, red ❌ when invalid

## How to Run
Open `index.html` in any modern browser. No internet required.

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation |
| `README.md` | This explanation |
