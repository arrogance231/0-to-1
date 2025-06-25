"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const specialties = [
  "Cardiology",
  "Neurology",
  "Infectious Disease",
  "Gastroenterology",
  "Pulmonology",
  "Endocrinology",
  "Oncology",
  "Pediatrics",
  "Psychiatry",
];

function applyTheme(theme: string) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
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

export default function SettingsPage() {
  // Placeholder state for profile info
  const [name, setName] = useState("Dr. Jane Doe");
  const [specialty, setSpecialty] = useState(specialties[0]);
  const [theme, setTheme] = useState("system");
  const [notifications, setNotifications] = useState(true);
  const [editing, setEditing] = useState(false);

  // On mount, read theme from localStorage and apply
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || "system";
    setTheme(initial);
    applyTheme(initial);
    // Listen for system theme changes if "system" is selected
    const listener = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
    // eslint-disable-next-line
  }, []);

  // When theme changes, apply and persist
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className='space-y-6 pb-24'>
      <h1 className='mobile-title text-gray-900 mb-2'>Settings</h1>

      {/* Profile Section */}
      <div className='mobile-card p-4 space-y-3'>
        <div className='flex items-center gap-3'>
          <Image
            src='/icon.svg'
            alt='Profile'
            width={40}
            height={40}
            className='rounded-full'
          />
          <div>
            <div className='mobile-body font-semibold text-gray-900'>
              {name}
            </div>
            <div className='mobile-caption text-gray-600'>{specialty}</div>
          </div>
        </div>
        <button
          className='mobile-button-secondary w-full mt-2'
          onClick={() => setEditing((editing) => !editing)}
        >
          {editing ? "Cancel" : "Edit Profile"}
        </button>
        {editing && (
          <div className='space-y-2 mt-2'>
            <input
              className='mobile-input w-full'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Name'
            />
            <select
              className='mobile-input w-full'
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              {specialties.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button
              className='mobile-button w-full mt-2'
              onClick={() => setEditing(false)}
            >
              Save
            </button>
          </div>
        )}
      </div>

      {/* App Preferences */}
      <div className='mobile-card p-4 space-y-3'>
        <div className='mobile-headline text-gray-900 mb-2'>Preferences</div>
        <div className='flex items-center justify-between'>
          <span className='mobile-body'>Theme</span>
          <select
            className='mobile-input w-32'
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value='system'>System</option>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <div className='flex items-center justify-between'>
          <span className='mobile-body'>Notifications</span>
          <input
            type='checkbox'
            checked={notifications}
            onChange={() => setNotifications((n) => !n)}
            className='w-5 h-5 accent-[#007AFF]'
          />
        </div>
      </div>

      {/* Data Management */}
      <div className='mobile-card p-4 space-y-3'>
        <div className='mobile-headline text-gray-900 mb-2'>
          Data Management
        </div>
        <button
          className='mobile-button-secondary w-full'
          onClick={() => {
            localStorage.removeItem("onboardingInfo");
            localStorage.removeItem("onboardingComplete");
            window.location.reload();
          }}
        >
          Reset Onboarding
        </button>
        <button
          className='mobile-button-secondary w-full'
          onClick={() => {
            sessionStorage.clear();
            localStorage.clear();
            window.location.reload();
          }}
        >
          Clear All Data
        </button>
      </div>

      {/* About Section */}
      <div className='mobile-card p-4 space-y-2'>
        <div className='mobile-headline text-gray-900 mb-1'>About</div>
        <div className='mobile-body text-gray-700'>
          <b>PocketPatient</b> is an AI-powered medical training platform for
          healthcare professionals. Practice clinical cases, simulate diagnoses,
          and track your progress.
        </div>
        <div className='mobile-caption text-gray-500'>Version 1.0.0</div>
        <div className='mobile-caption text-gray-500'>
          Contact: support@pocketpatient.app
        </div>
      </div>
    </div>
  );
}
