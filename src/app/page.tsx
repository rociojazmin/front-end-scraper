// page.tsx
"use client";

import React from "react";
import GridProfile from "@/components/gridProfile";
import Form from "@/components/form";

const HomePage: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hola stalker!</h1>
        <Form />
        <GridProfile />
       
      </div>
  );
};

export default HomePage;