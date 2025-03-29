import { Preference } from "@/types/preference";

export default function Preferences({prefs}: {prefs:Preference}){
    console.log("prefs:",prefs)
    if (prefs == null){
        return(<h1>NULL</h1>)
    }
    const prefsList = []
    if (prefs.type) prefsList.push(prefs.type)
    if (prefs.pace) prefsList.push(prefs.pace)
    if (prefs.distance)prefsList.push(prefs.distance)
    if (prefs.city)prefsList.push(prefs.city)
    return(
        <div className="absolute bottom-0 left-0 flex flex-row p-1">
            {prefsList.length > 0 && prefsList.map((tag, index) => (
                <div className="text-center text-sm px-2 border-2 rounded-2xl bg-[#A7F3D0]"
                    key={index}
                >
                    {tag}
                </div>
            ))}
        </div>
    )
}