export default function Matches(){
    const matches = [
        { id: 1, name: "Sebastian", lastMessage: "Hei kjekken!" },
        { id: 2, name: "Sander", lastMessage: "Løpe hjem til meg?" },
        { id: 3, name: "Erik", lastMessage: "Løp over meg?" },
      ];
    
      return (
        <main className="p-6 min-h-screen bg-gray-500">
          <h1 className="text-3xl font-bold mb-6 text-amber-300">Dine Matcher</h1>
          <div className="space-y-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="bg-p p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
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