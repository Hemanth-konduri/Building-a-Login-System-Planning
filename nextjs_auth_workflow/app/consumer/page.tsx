'use client';

import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

interface ExtendedSession {
  user?: ExtendedUser;
}

export default function ConsumerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const extendedSession = session as ExtendedSession;

  useEffect(() => {
    console.log('Session:', session);
    if (status === 'loading') return;
    if (!session || extendedSession.user?.role !== 'consumer') {
      router.replace('/login');
    }
  }, [session, status, router, extendedSession]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  if (status === 'loading' || !session || extendedSession.user?.role !== 'consumer') {
    return <div className="center-screen">Loading...</div>;
  }

  return (
    <div className="center-screen">
      <div className="card text-center">
        <h1 className="title">Welcome, Consumer!</h1>
        <p className="subtitle">You are logged in as a consumer.</p>
        <div style={{ marginTop: 18 }}>
          <button onClick={handleSignOut} className="btn btn-ghost">Logout</button>
        </div>
      </div>
    </div>
  );
}