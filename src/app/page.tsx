// page.tsx
"use client";

import React from "react";
import RootLayout from "./layout";
import CardImage from "../components/cardImage"; // Asegúrate de que la ruta sea correcta
import GridProfile from "@/components/gridProfile";
import Form from "@/components/form";

const Grid: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hola stalker!</h1>
        <Form />
        <GridProfile />
        <p className="mt-4 text-xl">
          Get started by editing <code>src/app/page.tsx</code>
        </p>
      </div>
  );
};

export default Grid;
