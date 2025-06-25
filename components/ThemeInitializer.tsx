"use client";
import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      const root = document.documentElement;
      if (stored === "dark") {
        root.classList.add("dark");
      } else if (stored === "light") {
        root.classList.remove("dark");
      } else {
        // System
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    }
  }, []);
  return null;
}
