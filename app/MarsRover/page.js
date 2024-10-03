"use client";

import { useEffect, useState } from "react";

export default function MarsRover() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchingMarsRover = async () => {
      try {
        const fetchData = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
        );
        const response = await fetchData.json();
        setData(response.photos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingMarsRover();
  }, []);

  if (data === null) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>Mars Rover Pic</h1>
      {data.map((photo) => (
        <div key={photo.id}>
          <p>{photo.camera.full_name}</p>
          <img
            src={photo.img_src}
            alt={photo.camera.full_name}
            width={300}
            height={200}
          />
        </div>
      ))}
    </>
  );
}
