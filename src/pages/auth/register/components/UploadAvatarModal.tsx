import { Carousel,useAnimationOffsetEffect } from "@mantine/carousel";
import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Modal,
  Text,
  rem,
} from "@mantine/core";
import React, {  useState } from "react";
import classes from "../Register.module.css";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";

interface UploadAwatarProps {
  fileUploadModal: boolean;
  setFileUploadModal: any;
}

const UploadAvatarModal = ({
  fileUploadModal,
  setFileUploadModal,
}: UploadAwatarProps) => {
  const [selectedAvatar, setSelectedAwatar] = useState(0);
  const TRANSITION_DURATION = 200;
  const [embla, setEmbla] = useState<any>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

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
        size="xl"
        opened={fileUploadModal}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton
        onClose={() => setFileUploadModal(false)}
      >
           <Card
        withBorder  
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems:'center'
        }}
      >
      <Text
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Select Default Avatar
        </Text>
        <Carousel onSlideChange={(index)=>setSelectedAwatar(index)} controlSize={43} controlsOffset={-1} align="center" loop getEmblaApi={setEmbla} maw={300}>
             {data.map((awatar: any, index: any) => (
            <Carousel.Slide
              className={index===selectedAvatar?classes.awatarSlide:''}
              key={index}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <Box  style={{ width: rem(300), height: rem(200),display:'flex',justifyContent:'center'}}>
              <Image radius={5} 
              style={{ width: rem(200), height: rem(200), objectFit: 'cover' }}
              src={awatar} />
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      <Box mt={15}>
          <Button variant="default">Submit</Button>
        </Box>
      </Card>
      <Card withBorder bg="transparent" mt={10}>
        <Text
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Select Image from Device
        </Text>
        <Group
          style={{ display: "flex",flexDirection:'column', justifyContent: "center", width: "100%" }}
        >
          <Dropzone
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            // {...props}
          >
            <Group
              justify="center"
              gap="xl"
              mih={220}
              style={{ pointerEvents: "none" }}
            >
              <Dropzone.Accept>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-blue-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-red-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-dimmed)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          <Button variant="default">Submit</Button>
        </Group>
      </Card>
      </Modal>
      );
};

export default UploadAvatarModal;
