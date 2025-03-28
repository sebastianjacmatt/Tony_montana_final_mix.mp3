import Image from "next/image";
import currentLoggedInUser from "@/lib/currentLoggedInUser";

export default async function Home() {
  const user = await currentLoggedInUser();
  console.log(user.attributes["sko"]);

  return (
    <div className="w-full h-screen">
    </div>
  );
}
