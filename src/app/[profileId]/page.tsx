"use client";

import Card from "@/components/card";
import React from "react";

const PaginaProfile: React.FC = ({ params }:any) => {



  return <Card profileId={params.profileId}/>

  
};

export default PaginaProfile;
