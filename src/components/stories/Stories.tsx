import React from 'react'
import { Carousel } from "@mantine/carousel";
import classes from "./Stories.module.css";
import { Box, Image, Text } from '@mantine/core';
import StoryUser from './StoryUser';

const Stories = () => {

const data = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
];

  return (
    <Box
    // style={{ border: "1px solid #1BAAF7" }}
     h={120}>
      <Carousel
        classNames={{
          slide: classes.mantineSlide,
          container: classes.mantineSlideContainer,
        }}
        controlsOffset="0"
        dragFree
        controlSize={35}
        // withIndicators
        slideSize="100px"
        slideGap="xl"
        align="start"
        // slidesToScroll={2}
        // onNextSlide={}
        onSlideChange={(e) => console.log("Current slide", e)}
      >
       <React.Fragment>
    <Carousel.Slide  pr={0}>
    <Image
    className={classes.yourStory}
        radius="50%"
        w="95%"
        // h="100%"
        fit="contain"
        src={``}
      />
      <Text>User name</Text>
    </Carousel.Slide>
   </React.Fragment>
     
        {data?.map((item, index) => {
          console.log(`${item}`);
          return (
          <StoryUser
           index={index} image={item}/>
          );
        })}
      </Carousel>
    </Box>
  )
}

export default Stories