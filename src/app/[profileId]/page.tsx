"use client";

import CardImage from "@/components/cardImage";
import React from "react";

const PaginaProfile: React.FC = ({ params }:any) => {



  return <CardImage profileId={params.profileId}/>

  
};

export default PaginaProfile;
