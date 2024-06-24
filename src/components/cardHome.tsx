import React, { useEffect, useState } from "react";
import {
  getLatestImageUrlByProfile,
  getProfile,
  borrarPerfil,
} from "../app/utils";
import { Url, ResultadoPerfil, perfilNoEncontrado } from "@/app/modelo";

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

  const handleDelete = async () => {
    try {
      await borrarPerfil({ id: profileId });
      window.location.reload(); // Refresh the page after deletion
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="m-4 relative">
        <div className="m-4">
          {profile.tipo === "exito" ? (
            <>
              <p className="max-w-xs">{profile.encontrado.nombre}</p>
              <img src={url} className="max-w-xs" alt="Profile" />
              <button
                onClick={handleDelete}
                className="absolute top-0 right-0 mt-2 mr-2"
              >
                <img
                  src="https://www.shutterstock.com/image-vector/cross-icon-simple-design-260nw-2187745095.jpg"
                  alt="Delete"
                  className="w-6 h-6"
                />
              </button>
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
