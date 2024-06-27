// gridImage.tsx
import React from "react";
import CardImage from "./cardImage";

interface GridProps {
  profileId: number;
}

const GridImage: React.FC<GridProps> = ({ profileId }) => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 lg:p-6">
        <CardImage profileId={profileId} />
      </div>
    </section>
  );
};

export default GridImage;
