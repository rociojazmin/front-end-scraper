// cardHome.tsx
import React, { useEffect, useState } from "react";
import { getLatestImageUrlByProfile, getProfile } from "../app/utils";
import { Url, Perfil, ResultadoPerfil, perfilNoEncontrado } from "@/app/modelo";

interface CardProps {
  profileId: number;
}

const CardHome: React.FC<CardProps> = ({ profileId }) => {
  const [url, setUrl] = useState<Url>();
  const [profile, setProfile] = useState<ResultadoPerfil>(perfilNoEncontrado);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = await getLatestImageUrlByProfile(profileId);
        setUrl(url);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchProfile = async () => {
      try {
        const profile = await getProfile(profileId);
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
    fetchImages();
  }, [profileId]);

  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="m-4">
        <div className="m-4">
          {profile.tipo == "exito" ? (
            <>
              <p className="max-w-xs">{profile.encontrado.nombre}</p>
              <img src={url} className="max-w-xs" />
            </>
          ) : (
            "Cargando..."
          )}
        </div>
      </div>
    </div>
  );
};

export default CardHome;
