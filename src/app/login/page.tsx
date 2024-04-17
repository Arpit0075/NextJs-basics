"use client";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const loginUser = async (url: string, arg: any) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg.arg),
    }).then((res) => res.json());
  };

  const { trigger, isMutating } = useSWRMutation("/api/auth/login", loginUser);
  const handleLogin = async (user: any) => {
    const result = await trigger(user);
    if (result.success) {
      router.push("/posts");
    }
    setUser({ username: "", password: "" });
  };

  return (
    <div className="mt-5">
      <h3 className="text-center">Login</h3>
      <div className="mx-auto max-w-xs flex flex-col gap-2">
        <input
          type="text"
          value={user.username}
          placeholder="Enter username"
          className="text-black"
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, username: e.target.value };
            })
          }
        />
        <input
          type="password"
          value={user.password}
          placeholder="Enter password"
          className="text-black"
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
        <button
          className="p-2 bg-slate-600 disabled:bg-slate-300"
          onClick={() => handleLogin(user)}
          disabled={isMutating}
        >
          Submit
        </button>
        <br />
      </div>
    </div>
  );
}

export default Login;
