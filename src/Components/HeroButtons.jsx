import React from "react";

const HeroButtons = ({ shoe, setShoe }) => {
  return (
    <button
      className="bg-card p-4 rounded-xl bg-cover border-2 border-coral-red/80 "
      onClick={() => setShoe(shoe)}
    >
      <img src={shoe} alt="" width={150} height={120} />
    </button>
  );
};

export default HeroButtons;
