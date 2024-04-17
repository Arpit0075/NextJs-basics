"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function fetcher<T>(...args: [RequestInfo, RequestInit?]): Promise<T> {
  return fetch(...args).then((res) => res.json());
}

function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [shouldFetch, setShouldFetch] = useState(false); //conditional logout call
  const { data: logoutData, isLoading: logoutLoading } = useSWR<any>(
    shouldFetch ? "/api/auth/logout" : null,
    fetcher
  );

  const handleLogout = () => {
    setShouldFetch(true);

    if (!logoutLoading && logoutData?.success) {
      console.log(logoutData);
      setShouldFetch(false);
      router.push("/login");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
