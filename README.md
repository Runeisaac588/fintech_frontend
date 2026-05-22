# Fintech Dashboard Frontend

Modern fintech dashboard built with Next.js, TailwindCSS and modular architecture.

---

## 🚀 Tech Stack

- Next.js 15
- React
- TypeScript
- TailwindCSS
- SweetAlert2
- Axios
- Lucide Icons

---

## 📦 Features

- Authentication
- Protected routes with middleware
- Orders dashboard
- Pagination
- Filters
- Search
- Responsive design
- Order detail modal
- Summary cards
- Loading / Empty / Error states

---

## 🧱 Architecture

```bash
src/
│
├── app/
│
├── modules/
│   ├── auth/
│   └── orders/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   └── services/
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:3000
```

---

## 🔐 Environment Variables

Create:

```bash
.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## 🔑 Authentication

Authentication is handled using:

- Laravel Sanctum
- Token stored in cookies
- Next.js Middleware route protection

---

## 📱 Responsive Design

The application supports:

- Desktop
- Tablet
- Mobile

---

## 📊 Dashboard Features

### Orders Table

Includes:

- Search
- Filters
- Pagination
- Order details
- Status colors

### Summary Cards

- Total Orders
- Total Revenue
- Failed Payments

---

## 🎨 UI/UX

- Dark theme
- Responsive layouts
- Mobile sidebar
- Loading states
- Empty states
- Error states

---

## 👨‍💻 Author

Adan Isaac