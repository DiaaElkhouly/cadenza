import React from "react";
import CircularGallery from "./CircularGallery";

export default function OurMembers() {
  const members = [
    "Karim Shaban",
    "Mohamed Shaban",
    "Ramadan Atef",
    "Mostafa Mohamed",
    "Ahmed Shaban ",
    "Ahmed Ali",
    "Ahmed hassan",
    "Mohamed Saber",
    "Amr Abubakr",
    "Tarek Allam",
    "Mohamed mohsen",
    "Abdulrahman Mohammed",
    "Mohamed Fathi",
    "Abdulrahman Samir ",
    "Mohamed yasser",
    "Mohamed Wael",
    "Hassan Amr",
    "Muhamed Magdy",
  ];
  return (
    <>
      <div className="min-h-screen bg-cadenzaBlack text-cloud py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-baccarat text-center mb-8 nefer-font text-green-950 ">
            OUR MEMBERS
          </h1>
          <div className="flex justify-center mb-3">
            <img className="w-40  " src="./images/Asset.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-baccarat text-center mb-4 nefer-font text-green-950 bg-green-300 rounded-2xl p-2">
            Group Team
          </h1>
          <div className="grid grid-cols-2">
            {members.map((n, index) => {
              return (
                <p key={index} className="text-gray-300 text-center mb-2">
                  - {n}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="-mt-8 mb-4" style={{ height: "20rem" }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.15}
        />
      </div>
    </>
  );
}
