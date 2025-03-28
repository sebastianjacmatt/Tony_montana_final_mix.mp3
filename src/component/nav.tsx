import { CircleUser, Heart, House, Wallet } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex bg-white items-center justify-center text-black p-4 gap-16">
      <a href="/matches" className="flex flex-col items-center">
        <Heart className="w-8 h-8" />
        Matches
      </a>
      <a href="/" className="flex flex-col items-center">
        <House className="w-8 h-8" />
        Home
      </a>
      <a href="/swipe" className="flex flex-col items-center">
        <Wallet className="w-8 h-8" />
        Swipe
      </a>
      <a href="/profile" className="flex flex-col items-center">
        <CircleUser className="w-8 h-8" />
        Profile
      </a>
    </nav>
  );
}
