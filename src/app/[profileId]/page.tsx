"use client";

import GridImage from "@/components/gridImage";
import React, { useEffect, useState } from "react";
import { Perfil, ResultadoPerfil } from "@/app/modelo";
import { getProfile } from "../utils";

const ProfilePage: React.FC<{ params: { profileId: string } }> = ({
  params,
}) => {
  const profileId = parseInt(params.profileId, 10);

  const [nombrePerfil, setNombrePerfil] = useState<string>("");

  useEffect(() => {
    const fetchProfileName = async () => {
      try {
        const resultadoPerfil: ResultadoPerfil = await getProfile(profileId);
        if (resultadoPerfil.tipo === "exito") {
          setNombrePerfil(resultadoPerfil.encontrado.nombre);
        } else {
          console.error("Perfil no encontrado");
        }
      } catch (error) {
        console.error("Error fetching profile name:", error);
      }
    };

    fetchProfileName();
  }, [profileId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-16 mb-8 sm:mt-12 sm:mb-6 md:mt-20 md:mb-10">
        Últimos posteos de {nombrePerfil}
      </h1>
      <div className="max-w-full mt-4">
        <GridImage profileId={profileId} />
      </div>
    </div>
  );
};

export default ProfilePage;
