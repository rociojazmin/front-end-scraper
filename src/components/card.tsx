import React, { useEffect, useState } from "react";
import { getImagesUrlByProfile } from "../app/utils";
import { Url } from "@/app/modelo";

interface CardProps {
  profileId: number;
}

const Card: React.FC<CardProps> = ({ profileId }) => {
  const [urls, setUrls] = useState<Url[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await getImagesUrlByProfile(profileId);
        setUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [profileId]);

  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="m-4">
      {urls.map((url, index) => (
        <div key={index} className="m-4">
          <img
            src={url}
            className="max-w-xs"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
