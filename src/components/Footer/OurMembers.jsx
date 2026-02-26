import React from "react";
import CircularGallery from "./CircularGallery";

export default function OurMembers() {
  const members = [
    "Karim Shaban",
    "Mohamed Shaban",
    "Ramadan Atef",
    "Mostafa Mohamed",
    "Ahmed Shaban",
    "Ahmed Ali",
    "Ahmed hassan",
    "Mohamed Saber",
    "Amr Abubakr",
    "Tarek Allam",
    "Mohamed mohsen",
    "Abdulrahman Mohammed",
    "Mohamed Fathi",
    "Abdulrahman Samir",
    "Mohamed yasser",
    "Mohamed Wael",
    "Hassan Amr",
    "Muhamed Magdy",
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 to-emerald-900 text-emerald-100 pt-20 pb-8 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-emerald-400 text-center mb-8">
            OUR MEMBERS
          </h1>
          <div className="flex justify-center mb-3">
            <img className="w-40" src="./images/Asset.png" alt="CADENZA" />
          </div>
          <h1 className="text-2xl font-bold text-emerald-400 text-center mb-4 bg-emerald-800 rounded-2xl p-2">
            Group Team
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((name, index) => (
              <p
                key={index}
                className="text-emerald-200 text-center bg-emerald-800/50 rounded-lg p-3 hover:bg-emerald-700/50 transition-colors"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 -mt-4" style={{ height: "20rem" }}>
        <CircularGallery
          bend={1}
          textColor="#34d399"
          borderRadius={0.05}
          scrollEase={0.15}
        />
      </div>
    </>
  );
}
