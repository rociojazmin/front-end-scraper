// page.tsx dentro de [profileId]
"use client";

import GridImage from "@/components/gridImage"; 
import React from "react";

const ProfilePage: React.FC<{ params: { profileId: string } }> = ({ params }) => {
  const profileId = parseInt(params.profileId, 10);
  return <GridImage profileId={profileId} />;
};

export default ProfilePage;
