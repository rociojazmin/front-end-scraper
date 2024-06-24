"use client"

import React from "react";
import RootLayout from "./layout";
import Card from "../components/card"; // Asegúrate de que la ruta sea correcta


const Grid: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to Next.js!
        </h1>
        <Card profileId={1} /> {/* Mostrar imágenes del perfil con ID 1 */}
        <p className="mt-4 text-xl">
          Get started by editing <code>src/app/page.tsx</code>
        </p>
      </div>
    </RootLayout>
  );
};

export default Grid;
