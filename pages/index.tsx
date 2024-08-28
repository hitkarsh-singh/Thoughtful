import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          router.push('/categories');
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error(error);
        alert('Login failed, please try again');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          alert('User registered successfully');
          setIsRegistering(false);
        } else {
          alert('User registration failed');
        }
      } catch (error) {
        console.error(error);
        alert('User registration failed, please try again');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white overflow-x-hidden font-['Epilogue','Noto_Sans',sans-serif]">
      <Head>
        <title>Thoughtful - Your Private Journal</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
      </Head>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/sdxl10/cf73d06f-e0e9-4169-82ce-c499e59fbf06.png')",
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Welcome to Thoughtful
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Join a private journal with your friend on Thoughtful, where you&apos;ll each write for 30 days before the other can read. Share love, care, and honesty in this space for your thoughts.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="mt-8">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1 relative">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">Password</p>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                                        style={{
                                        marginTop: '15px'
                                    }}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#111418] cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword
                                            ? (<FontAwesomeIcon icon={faEyeSlash}/>)
                                            : (<FontAwesomeIcon icon={faEye}/>)}
                                    </span>
                </label>
              </div>
              <div className="flex px-4 py-3">
                {isRegistering ? (
                  <button
                    type="submit"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">Register</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">Log in to Thoughtful</span>
                  </button>
                )}
              </div>
              <div className="flex flex-col items-center mt-4">
                {isRegistering ? (
                  <button
                  type="button"
                  onClick={() => setIsRegistering(false)}
                  className="text-sm text-[#1980e6] font-medium"
                >
                  Already have an account? Log in
                </button>
                ) : (
                  <button
                  type="button"
                  onClick={() => setIsRegistering(true)}
                  className="text-sm text-[#1980e6] font-medium"
                >
                  Don&apos;t have an account? Register
                </button>
                  
                  
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
