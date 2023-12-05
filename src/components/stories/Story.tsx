import { Carousel } from "@mantine/carousel";
import { Image, Modal, rem } from "@mantine/core";
import React from "react";

type Story={
  image?:string;
  video?:string;
  username?:string;
  time:any;
}

interface StroryProps{
  openStory:boolean;
  setOpenStory:any;
  stories:Story[];
}


const Story = ({openStory,stories,setOpenStory}:StroryProps) => {
  return (
    <Modal opened={openStory} onClose={()=>setOpenStory(!openStory)}>
     <Carousel>
       {/* {stories.map((story:Story)=>(
        <Image src={story.image}/>
       ))} */}
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt="Cat"
              style={{ width: rem(300), height: rem(200), objectFit: 'cover' }}
            />
          </Carousel.Slide>
     </Carousel>
    </Modal>
  );
};

export default Story;
