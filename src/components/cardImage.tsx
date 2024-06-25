import React, { useEffect, useState } from "react";
import { getImagesUrlByProfile } from "../app/utils";
import { Url } from "@/app/modelo";
import Image from "next/image";

export interface CardProps {
  profileId: number;
}

const CardImage: React.FC<CardProps> = ({ profileId }) => {
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
    <div className="m-4">
      {urls.map((url, index) => (
        <div key={index} className="m-4">
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="max-w-xs"
          />
        </div>
      ))}
    </div>
  );
};

export default CardImage;
