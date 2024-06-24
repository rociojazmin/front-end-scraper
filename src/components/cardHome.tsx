import React, { useEffect, useState } from "react";
import { getLatestImageUrlByProfile, getProfiles } from "../app/utils";
import { Url, Perfil } from "@/app/modelo";

interface CardProps {
  profileId: number;
}

const CardHome: React.FC<CardProps> = ({ profileId }) => {
  const [url, setUrl] = useState<Url>();
  const [profiles, setProfile] = useState<Perfil[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = await getLatestImageUrlByProfile(profileId);
        setUrl(url);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchProfiles = async () => {
      try {
        const profiles = await getProfiles();
        setProfile(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchProfiles();
    fetchImages();
  }, [profileId]);

  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="m-4">
        {profiles.map((profile, index) => (
          <div key={index} className="m-4">
            <p className="max-w-xs">{profile.nombre}</p>
            <img src={url} className="max-w-xs" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHome;
