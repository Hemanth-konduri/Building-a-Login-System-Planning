"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Navbar from '../../components/layout/navbar';
import InputField from '../../components/global/input-field';
import Button from '../../components/global/button';

const SignupPage = () => {
  const [form, setForm] = useState({ 
    email: '', 
    password: '', 
    name: '', 
    role: 'student' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email || !form.password || !form.name || !form.role) {
      toast.error('All fields are required.');
      return;
    }
    
    setIsLoading(true);
  
    const loadingToast = toast.loading('Creating your account...', {
      duration: Infinity,
    });
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.dismiss(loadingToast);
        toast.error(data.error || 'Registration failed. Please try again.');
        return;
      }

      toast.dismiss(loadingToast);
      const loginToast = toast.loading('Registration successful! Logging you in...', {
        duration: Infinity,
      });

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        toast.dismiss(loginToast);
        toast.success(`Welcome ${form.name}! Redirecting to your dashboard...`);
        if (form.role === 'admin') {
          router.push('/admin-dashboard');
        } else {
          router.push('/student-dashboard');
        }
      } else {
        toast.dismiss(loginToast);
        toast.error('Registration succeeded, but automatic login failed. Please sign in manually.');
      }

    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="center-screen">
        <div className="card" style={{ maxWidth: 420 }}>
          <h2 className="title text-center">Sign Up</h2>
          
          <form onSubmit={handleSubmit} style={{ marginTop: 16 }} noValidate>
            <InputField
              label="Full Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={isLoading}
              required
            />
            
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              required
            />
            
            <InputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password (min 6 characters)"
              disabled={isLoading}
              required
            />
            
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="role" style={{ display: 'block', marginBottom: 6, color: 'var(--muted)' }}>
                Role
              </label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #e5e7eb' }}
                disabled={isLoading}
                required
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </Button>
            
            <div style={{ marginTop: 16, textAlign: 'center', fontSize: 14, color: 'var(--muted)' }}>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="btn-ghost"
                style={{ textDecoration: 'underline' }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;