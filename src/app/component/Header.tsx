"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "./Logout";
import { isLoggedIn } from "../utils/isLoggedIn";

function Header() {
  const currentPathName = usePathname();
  const nonActivelinkStyle = "bg-slate-400 rounded-sm p-1 text-white";
  const activeLinkStyle = "bg-amber-300 rounded-sm p-1 text-black";
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // console.log(isLoggedIn());

  return (
    <div className="flex justify-center gap-2">
      {hydrated && (
        <>
          <Link
            className={
              currentPathName === "/" ? activeLinkStyle : nonActivelinkStyle
            }
            href="/"
          >
            Home
          </Link>

          <Link
            className={
              currentPathName === "/framermotion"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/framermotion"
          >
            FramerMotion
          </Link>
          <Link
            className={
              currentPathName === "/animateonscroll"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/animateonscroll"
          >
            AnimateOnScroll
          </Link>
          <Link
            className={
              currentPathName === "/inputform"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/inputform"
          >
            InputForm
          </Link>
          <Link
            className={
              currentPathName === "/inputformzod"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/inputformzod"
          >
            InputFormZod
          </Link>
          <Link
            className={
              currentPathName === "/debounce-throttle"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/debounce-throttle"
          >
            DebounceThrottle
          </Link>
          <Link
            className={
              currentPathName === "/reduxToolKit"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/reduxToolKit"
          >
            ReduxToolKit
          </Link>
          <Link
            className={
              currentPathName === "/posts"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/posts"
          >
            Posts
          </Link>

          {!isLoggedIn() && (
            <>
              <Link
                className={
                  currentPathName === "/register"
                    ? activeLinkStyle
                    : nonActivelinkStyle
                }
                href="/register"
              >
                Register
              </Link>

              <Link
                className={
                  currentPathName === "/login"
                    ? activeLinkStyle
                    : nonActivelinkStyle
                }
                href="/login"
                prefetch={false}
              >
                Login
              </Link>
            </>
          )}
          <Link
            className={
              currentPathName === "/server-actions"
                ? activeLinkStyle
                : nonActivelinkStyle
            }
            href="/server-actions"
          >
            Server-Actions
          </Link>
          {isLoggedIn() && <Logout />}
        </>
      )}
    </div>
  );
}

export default Header;
