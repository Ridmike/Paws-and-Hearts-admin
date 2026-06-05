"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ROUTES } from "@/constants/routes";
import { PawLogoIcon } from "@/components/layout/NavIcons";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(ROUTES.dashboard);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-slate-100 px-4 py-12">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-30 lg:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552053831-7154a086a932?w=1200&q=80')",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md">
            <PawLogoIcon className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-brand-dark">Paws & Hearts</h1>
          <p className="text-sm text-slate-500">Shelter Management System</p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
          <h2 className="text-xl font-bold text-slate-800">Welcome Back, Admin</h2>
          <p className="mt-1 text-sm text-slate-500">Enter your credentials to manage the shelter</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-600">
                Email Address
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <input
                  id="email"
                  type="email"
                  defaultValue="admin@pawsandhearts.org"
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-600">
                  Password
                </label>
                <Link href="#" className="text-xs font-medium text-brand hover:text-brand-dark">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 118 0v3" />
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  defaultValue="password"
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-10 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="rounded border-slate-300 text-brand focus:ring-brand" />
              Keep me logged in
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Sign In
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 3h4v4M10 14L21 3M10 7H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            Internal System Access Only. Need an account?{" "}
            <Link href="#" className="font-medium text-brand hover:text-brand-dark">
              Contact System Admin
            </Link>
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          © 2024 Paws & Hearts Shelter System. Ver 2.4.0
        </p>
      </div>
    </div>
  );
}
