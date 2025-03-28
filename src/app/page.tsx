import Image from "next/image";
import currentLoggedInUser from "@/lib/currentLoggedInUser";
import SwipeCard from "@/component/swipecard";
<<<<<<< HEAD

=======
>>>>>>> 6ceefaf (basic swipe card)
export default async function Home() {
  const user = await currentLoggedInUser();
  console.log(user.attributes["sko"]);

<<<<<<< HEAD
=======

>>>>>>> 6ceefaf (basic swipe card)
  return (
    <div className="w-full h-screen">
      <SwipeCard/>
    </div>
  );
}
