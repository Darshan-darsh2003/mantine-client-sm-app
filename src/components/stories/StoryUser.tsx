import { Carousel } from '@mantine/carousel'
import { Image, Text } from '@mantine/core';
import React from 'react'
import classes from "./Stories.module.css";
import { useMantineColorScheme } from '@mantine/core';

interface StoryUserProps{
index:number;
image:string;

}

const StoryUser = ({index,image}:StoryUserProps) => {
    const {colorScheme}=useMantineColorScheme()
    return (
    <React.Fragment key={index}>
    <Carousel.Slide  key={index} pr={0}>
    <Image
    className={classes.slideImage}
        radius="xl"
        // w="100%"
        // h="100%"
        fit="contain"
        src={`${image}`}
      />
      <Text c={colorScheme==='dark'?'#fff':'#000'}>User name</Text>
    </Carousel.Slide>
   </React.Fragment>
  )
}

export default StoryUser