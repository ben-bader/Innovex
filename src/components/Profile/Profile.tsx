import React, { useState } from "react";
import ChangeInfos from "./ChangeInfos/ChangeInfos";
import Favorites from "./Favorites/Favorites";

const Profile = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav className="flex gap-4">
        <button
          onClick={() => setToggle(true)}
          className={`px-4 py-2 cursor-pointer 
          ${
            toggle &&
            "bg-white/5 backdrop-blur-3xl  rounded-full border border-white/50"
          }`}
        >
          Change infos
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`px-4 py-2 cursor-pointer ${
            !toggle &&
            "bg-white/5 backdrop-blur-3xl  rounded-full border border-white/50"
          }`}
        >
          Favorites
        </button>
      </nav>
      {toggle ? <ChangeInfos /> : <Favorites />}
    </>
  );
};

export default Profile;
