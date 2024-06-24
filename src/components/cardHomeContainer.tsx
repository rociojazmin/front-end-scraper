// cardHomeContainer.tsx
import React, { useEffect, useState } from "react";
import { getProfiles } from "../app/utils";
import { Perfil } from "@/app/modelo";
import CardHome from "./cardHome";

const CardHomeContainer: React.FC = () => {
  const [profiles, setProfiles] = useState<Perfil[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profiles = await getProfiles();
        setProfiles(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {profiles.map((profile) => (
        <CardHome key={profile.id} profileId={profile.id} />
      ))}
    </div>
  );
};

export default CardHomeContainer;
