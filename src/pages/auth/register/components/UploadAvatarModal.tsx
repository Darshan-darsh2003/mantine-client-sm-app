import { Carousel } from "@mantine/carousel";
import { Box, Button, Grid, Group, Image, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import classes from "../Register.module.css";

interface UploadAwatarProps {
  fileUploadModal: boolean;
  setFileUploadModal: any;
}

const UploadAvatarModal = ({
  fileUploadModal,
  setFileUploadModal,
}: UploadAwatarProps) => {
  const [selectedAvatar, setSelectedAwatar] = useState("");

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
    <Modal
      size="lg"
      opened={fileUploadModal}
      title="Select Awatar"
      onClose={() => setFileUploadModal(!fileUploadModal)}
    >
      {/* <Group>
  <Text >Use Default Awatars</Text>
   <Grid>
    {data.map((awatar:any,index:any)=>(
      <Grid.Col span={3}>
        <Image h={70} w={70} src={awatar}/>
      </Grid.Col>
    ))}
   </Grid>
  </Group> */}
      <Group
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Use Default Awatars
        </Text>
        <Carousel
          controlSize={40}
          align="center"
          slideSize="100%"
          height={220}
          w={358}
          loop
          slideGap="md"
          slidesToScroll={1}
        >
          {data.map((awatar: any, index: any) => (
            <Carousel.Slide
              className={classes.awatarSlide}
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image radius={5} h={180} w={180} src={awatar} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Box>
          <Button variant="default">Submit</Button>
        </Box>
      </Group>
      <Group mt={50}>
        <Text
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Select Image from Device
        </Text>
      </Group>
    </Modal>
  );
};

export default UploadAvatarModal;
