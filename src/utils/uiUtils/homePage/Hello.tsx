import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Hello = ({height,width}:any) => {
  return (
    <Player
      autoplay
      loop
      src="/static/infoGraphics/MobileAnimation.json"
      style={{ height: height, width: width }}
      background="transparent"
      controls={false}
    ></Player>
  );
};

export default Hello;
