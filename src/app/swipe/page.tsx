import SwipeCard from "@/component/swipecard";
import currentLoggedInUser from "@/lib/currentLoggedInUser";

export default async function Matches() {
    const user = await currentLoggedInUser();
    if (!user) {
        return <div>Loading...</div>; // Handle the case when user is not logged in
    }
    return (
        <div className="w-full h-screen">
            <SwipeCard user = {user}/>
        </div>
    )
}
