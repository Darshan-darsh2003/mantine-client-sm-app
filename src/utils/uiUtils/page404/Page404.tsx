import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import image from "./image.svg";
import classes from "./Page404.module.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../reduxModules/auth/hook/authHook";

export function Page404() {
  const navigate = useNavigate();
  const {isLoggedIn}=useLogin()

  return (
    <Container className={classes.root}>
      <SimpleGrid
        h={900}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={{ base: 40, sm: 80 }}
        cols={{ base: 1, sm: 2 }}
      >
        <Image w={480} src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => {
              if(isLoggedIn){
                navigate('/app')
              }else{
                navigate('/')
              }
            }}
          >
            Get back to home page
          </Button>
        </div>
        {/* <Image src={image} className={classes.desktopImage} /> */}
      </SimpleGrid>
    </Container>
  );
}
