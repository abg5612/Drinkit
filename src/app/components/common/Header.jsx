"use client";
import { useState } from "react";
import "flowbite";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-7" alt="Flowbite Logo" />
          </a> */}
          <h1 className="text-6xl md:text-6xl font-black tracking-wider">
            Drink<span className="text-[#D4AF37]">it</span>
          </h1>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div
            className="hidden w-full background-red md:block md:w-auto z-[35]"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  href={"/"}
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                 href={'/About'}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li> */}
              <li>
                <Link
                  href={"/Product"}
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li> */}
              <li>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-brand text-black rounded-md cursor-pointer"
                >
                  Login / Register
                </button>
              </li>
              <li>
                {/* drawer init and toggle */}
                <div className="text-left pt-4 pl-2 md:text-center">
                  <button
                    className="inline-flex items-center text-[25px] justify-center text-black bg-brand box-border border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm"
                    type="button"
                    data-drawer-target="drawer-right-example"
                    data-drawer-show="drawer-right-example"
                    data-drawer-placement="right"
                    aria-controls="drawer-right-example"
                  >
                    &#x1F6D2;
                  </button>
                </div>
                {/* drawer component */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md bg-white rounded-lg shadow-[0_0_20px_#000] p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-semibold">
                {isLogin ? "Login" : "Register"}
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form className="mt-5 space-y-4">
              {/* Name + Contact (Register only) */}
              {!isLogin && (
                <>
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 rounded-md mt-1"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Contact</label>
                    <input
                      type="tel"
                      className="w-full border px-3 py-2 rounded-md mt-1"
                      placeholder="Enter contact number"
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                  placeholder="Enter email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                  placeholder="Enter password"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                {isLogin ? "Login" : "Register"}
              </button>

              {/* Toggle */}
              <p className="text-center text-sm">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-blue-600 hover:underline"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
