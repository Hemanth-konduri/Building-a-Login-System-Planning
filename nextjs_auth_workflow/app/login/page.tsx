'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [postInputs, setPostInputs] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        ...postInputs,
        callbackUrl: "/dashboard", 
      });
      console.log(res);
      if (res?.error) {
        setError("Invalid credentials");
        setIsLoading(false);
        return;
      }
      if (res?.ok && res.url) {
        router.push(res.url);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="center-screen">
      <div className="card" style={{ maxWidth: 420 }}>
        <h2 className="title text-center">Login</h2>
        {error && (
          <div style={{ color: 'var(--danger)', marginTop: 8, textAlign: 'center' }} role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: 16 }} noValidate>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 6, color: 'var(--muted)' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={postInputs.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #e5e7eb' }}
              required
              autoComplete="email"
              disabled={isLoading}
            />
          </div>

          <div style={{ marginBottom: 18 }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: 6, color: 'var(--muted)' }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={postInputs.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #e5e7eb' }}
              required
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
