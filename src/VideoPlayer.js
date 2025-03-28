import { useState } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {!isPlaying ? (
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Thumbnail"
          className="cursor-pointer"
          onClick={() => setIsPlaying(true)}
        />
      ) : (
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
          controls
          autoPlay
          className="w-96"
        />
      )}
    </div>
  );
}
