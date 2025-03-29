
"use server";

import currentLoggedInUser from "@/lib/currentLoggedInUser";
import { updateUserInfo } from "@/lib/updateUserInfo";
import { User } from "@/types/user";
import { redirect } from "next/navigation";

export default async function updateUser(formData: FormData) {
    console.log("formData", formData);

    const user = await currentLoggedInUser();
    if (!user) {
        console.log("not allowed to update user");
    }

    const name = formData.get("name") as string ?? user?.attributes.name;
    const sko = formData.get("sko") as string ?? user?.attributes.sko;
    const fart = formData.get("fart") as string ?? user?.attributes.fart;
    const bio = formData.get("bio") as string ?? user?.attributes.bio;

    const uptUsr = {
        id: user?.id,
        email: user?.email,
        attributes: {
            name: name,
            sko: sko,
            fart: fart,
            bio: bio,
            image: user?.attributes.image,
        },
        username: user?.username,
        avatar_url: user?.avatar_url,
    }
    
    updateUserInfo(uptUsr as User);

    redirect("/profile/" + uptUsr.username);
    


}