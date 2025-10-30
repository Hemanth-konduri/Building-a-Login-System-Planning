"use client";
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Dashboard from './dashboard';

const StudentDashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user?.role !== "student") {
      router.replace("/login");
    }
  }, [session, status, router]);

  console.log(session?.user); // Submission requirement

  if (status === "loading" || !session || session.user?.role !== "student") {
    return <div className="text-center mt-10 text-black">Loading...</div>;
  }

  return <Dashboard role="student" user={session.user} />;
};

export default StudentDashboardPage;