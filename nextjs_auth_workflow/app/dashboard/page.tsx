"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {
  console.log("Session:", session);
}, [session]);
  
  useEffect(() => {
    if (status === "loading") return; 
    if (!session?.user) {
      router.push("/");
    }
  }, [session, status, router]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const user = session?.user?.name;
  
  return (
    <div className="center-screen">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Dashboard</h1>
          <button onClick={handleSignOut} className="btn btn-danger">Logout</button>
        </div>

        <div className="text-center">
          <h2 className="title">Welcome to the Dashboard!</h2>
          <p className="subtitle">You are logged in.</p>
          <div className="user-info">User name: {user}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
