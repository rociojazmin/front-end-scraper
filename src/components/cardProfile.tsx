import React, { useEffect, useState } from "react";
import {
  getLatestImageUrlByProfile,
  getProfile,
  borrarPerfil,
} from "../app/utils";
import { Url, ResultadoPerfil, perfilNoEncontrado } from "@/app/modelo";
import Image from "next/image"; 
import Link from "next/link"; 

interface CardProps {
  profileId: number;
}

const CardProfile: React.FC<CardProps> = ({ profileId }) => {
  const [url, setUrl] = useState<string>(); // Cambiado Url a string porque 'getLatestImageUrlByProfile' probablemente devuelve un string
  const [profile, setProfile] = useState<ResultadoPerfil>(perfilNoEncontrado);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageUrl = await getLatestImageUrlByProfile(profileId);
        setUrl(imageUrl);
        
        const fetchedProfile = await getProfile(profileId);
        setProfile(fetchedProfile);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [profileId]);

  const handleDelete = async () => {
    try {
      await borrarPerfil({ id: profileId });
      window.location.reload(); // Recargar la página después de la eliminación
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
             <Link href={`/${profileId}`}>
              <p className="max-w-xs">{profile.encontrado.nombre}</p>
              {url ? (
                <div className="relative w-48 h-48">
                  <Image
                    src={url} // Utiliza la URL obtenida y almacenada en el estado
                    layout="fill"
                    objectFit="cover"
                    alt="Profile"
                  />
                </div>
              ) : (
                <div>Cargando imagen...</div>
              )}
              </Link>
              <button
                onClick={handleDelete}
                className="absolute top-0 right-0 mt-2 mr-2"
              >
                <Image
                  src="https://www.shutterstock.com/image-vector/cross-icon-simple-design-260nw-2187745095.jpg"
                  alt="Delete"
                  width={24}
                  height={24}
                />
              </button>
            </>
          ) : (
            <div>Cargando perfil...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
