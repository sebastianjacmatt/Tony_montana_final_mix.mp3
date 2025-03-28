import Image from "next/image";
import currentLoggedInUser from "@/lib/currentLoggedInUser";
import SwipeCard from "@/component/swipecard";

export default async function Home() {
  const user = await currentLoggedInUser();
  console.log(user.attributes["sko"]);

  return (
    <div className="w-full h-screen">
      <SwipeCard/>
    </div>
  );
}
