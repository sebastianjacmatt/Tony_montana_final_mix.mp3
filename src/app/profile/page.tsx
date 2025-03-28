"use client";

import Image from "next/image";

function getProfile() {
  return {
    username: "Anonymous",
    avatar_url: "/profile.jpg",
    bio: "No bio available",
    shoes: "N/A",
    weight: "N/A",
    pace: "N/A",
    longest_run: "N/A",
    freakiest_run: "N/A",
  };
}

export default function Profile() {
  const profile = getProfile();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full object-cover"
          src={profile.avatar_url || "/profile.jpg"}
          alt="Profile picture"
          width={160}
          height={160}
          priority
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">{profile.username}</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mt-2 max-w-md">
            {profile.bio}
          </p>
        </div>
        <ul className="text-sm text-left text-gray-700 dark:text-gray-200 space-y-1">
          <li><strong>Running Shoes:</strong> {profile.shoes}</li>
          <li><strong>Weight:</strong> {profile.weight} kg</li>
          <li><strong>Average Pace:</strong> {profile.pace}</li>
          <li><strong>Longest Run:</strong> {profile.longest_run}</li>
          <li><strong>Freakiest Run:</strong> {profile.freakiest_run}</li>
        </ul>
      </main>
      <footer className="row-start-3 text-sm text-gray-400 dark:text-gray-600">
        © 2025 RunFreak Inc.
      </footer>
    </div>
  );
}
