# Next.js Authentication System

A complete login system built with Next.js, NextAuth.js, MongoDB, and Tailwind CSS.

## Features

- **User Authentication**: Login and signup functionality
- **Role-based Access**: Admin, Student, and Consumer dashboards
- **Database Integration**: MongoDB with Mongoose ODM
- **Session Management**: NextAuth.js for secure authentication
- **Password Security**: bcryptjs for password hashing
- **Responsive UI**: Tailwind CSS styling
- **Toast Notifications**: React Hot Toast for user feedback

## Project Structure

```
app/
├── api/
│   ├── register/          # User registration endpoint
│   └── clear-users/       # Admin utility to clear users
├── login/                 # Login page and form
├── signup/                # User registration page
├── dashboard/             # General user dashboard
├── admin-dashboard/       # Admin-specific dashboard
├── student-dashboard/     # Student-specific dashboard
├── consumer/              # Consumer dashboard
└── models/                # MongoDB user model

components/
├── global/                # Reusable UI components
├── layout/                # Layout components
└── pages/                 # Page-specific components

lib/
└── authOptions.ts         # NextAuth configuration

utils/
├── mongodb.js             # Database connection
└── provider.js            # Authentication provider
```

## Environment Setup

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **Security**: bcryptjs for password hashing
- **Notifications**: React Hot Toast

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
