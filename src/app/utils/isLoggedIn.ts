"use client";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const isLoggedIn = () => {
  let token = Cookies.get("token");
  if (!token) return false;
  if (token) {
    const decoded = jwtDecode(token);
    let currentTime = new Date().getTime() / 1000; //in seconds
    if (currentTime > decoded?.exp!!) {
      Cookies.remove("token");
      return false;
    } else {
      return true;
    }
  }
  return false;
};
