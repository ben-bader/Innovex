import React, { useState } from "react";
import ChangeInfos from "./ChangeInfos/ChangeInfos";
import Favorites from "./Favorites/Favorites";
import Payments from "./Payments/Payments";

const Profile: React.FC = () => {
  const [toggle, setToggle] = useState("edit");

  return (
    <>
      <nav className="flex items-center gap-4 max-sm:gap-2">
        <button
          onClick={() => setToggle("edit")}
          className={`px-6 py-2 cursor-pointer 
          ${
            toggle === "edit" &&
            "bg-white/5 backdrop-blur-3xl  rounded-full border border-white/50"
          }`}
        >
         Edit 
        </button>
        <button
          onClick={() => setToggle("favs")}
          className={`px-4 py-2 cursor-pointer ${
            toggle === "favs" &&
            "bg-white/5 backdrop-blur-3xl  rounded-full border border-white/50"
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setToggle("pays")}
          className={`px-4 py-2 cursor-pointer ${
            toggle === "pays" &&
            "bg-white/5 backdrop-blur-3xl  rounded-full border border-white/50"
          }`}
        >
          Payments
        </button>
      </nav>
      {}
      {toggle === "edit" ? (
        <ChangeInfos />
      ) : toggle === "favs" ? (
        <Favorites />
      ) : toggle === "pays" ? (
        <Payments />
      ) : null}
    </>
  );
};

export default Profile;
