import React from "react";

const Mission = () => {
  const MissionCopy =
    "Unlike traditional projects where the roadmap is set in stone by a select few, Injective Baby Shark puts the power in the hands of its holders. Our roadmap is not a static document but a dynamic journey shaped by the collective wisdom and vision of our community. From new features to partnerships and beyond, the direction of Injective Baby Shark is decided by you, the holders.";

  return (
    <div>
      <a id="mission" />

      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Mission
      </p>

      <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight mb-24">
        {MissionCopy}
        <a className="sm:hidden" id="m-values" />
      </p>
    </div>
  );
};

export default Mission;
