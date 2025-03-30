import {
  CircleUser,
  House,
  LogOut,
  MessageCircleHeart,
  ArrowLeftRight,
} from "lucide-react";
import { logout } from "@/app/login/actions";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 w-full">
      <div className="flex bg-white items-center justify-center text-black p-4 gap-16">
        <Link href="/chat" className="flex flex-col items-center">
          <MessageCircleHeart className="w-8 h-8" />
          Matches
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <House className="w-8 h-8" />
          Home
        </Link>
        <Link href="/swipe" className="flex flex-col items-center">
          <ArrowLeftRight className="w-8 h-8" />
          Swipe
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <CircleUser className="w-8 h-8" />
          Profile
        </Link>
        <button
          className="flex flex-col items-center text-red-500"
          onClick={logout}
        >
          <LogOut className="w-8 h-8" />
          Logout
        </button>
      </div>
    </nav>
  );
}
