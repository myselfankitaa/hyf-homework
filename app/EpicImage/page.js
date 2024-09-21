"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function NASAEpicImage() {
  const searchParam = useSearchParams();

  const date = searchParam.get("date");

  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (date) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setImageData(data[0]);
        } catch (error) {
          console.error("Error fetching EPIC image:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!imageData) {
    return <div>No image found for this date.</div>;
  }

  const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${date.replace(
    /-/g,
    "/"
  )}/png/${imageData.image}.png?api_key=DEMO_KEY`;

  return (
    <div>
      <h1>EPIC Image for Date: {date}</h1>
      <img src={imageUrl} alt="EPIC" width={600} height={600} />
      <p>
        <strong>{imageData.caption}</strong>
      </p>
    </div>
  );
}

{
  /* <h1>
          Welcome to Epic ImageList, Please provide date query string:
          YYYY_MM_DD
        </h1> */
}
