export default function Matches() {
    const matches = [
      {
        id: 1,
        name: "Kristian",
        lastMessage: "Hei kjekken!",
        profilePic: "https://ca.slack-edge.com/TCWTZ3R2T-U05TD38QEKS-a6ac57fd31a2-512",
      },
      {
        id: 2,
        name: "Ole",
        lastMessage: "Løpe hjem til meg?",
        profilePic: "https://ca.slack-edge.com/TCWTZ3R2T-U02DX3G43P1-2154ab4f42d5-512",
      },
      {
        id: 3,
        name: "Nikolaus",
        lastMessage: "Løp over meg?",
        profilePic: "https://ca.slack-edge.com/TCWTZ3R2T-U02ECAC8XRU-fb9a508c3273-192",
      },
    ];
  
    return (
      <main className="p-6 min-h-screen bg-gray-500">
        <h1 className="text-3xl font-bold mb-6 text-amber-300">Dine Matcher</h1>
  
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-6">
          {matches.map((match) => (
            <div key={match.id} className="flex flex-col items-center">
              <img
                src={match.profilePic}
                alt={match.name}
                className="w-32 h-32 rounded-3xl border-2 border-amber-300 shadow"
              />
              <span className="text-white text-sm mt-1">{match.name}</span>
            </div>
          ))}
        </div>
  
        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-amber-300">{match.name}</h2>
                  <p className="text-black">{match.lastMessage}</p>
                </div>
                <button className="text-orange-300 font-medium hover:underline">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  