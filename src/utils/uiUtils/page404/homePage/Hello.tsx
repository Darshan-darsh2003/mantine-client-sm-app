import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Hello = () => {
  return (
    <Player
      autoplay
      loop
      src="/static/infoGraphics/MobileAnimation.json"
      style={{ height: "500px", width: "500px" }}
      background="transparent"
      controls={false}
    ></Player>
  );
};

export default Hello;
