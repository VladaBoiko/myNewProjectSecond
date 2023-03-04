import React, { useState, useEffect } from "react";
import {
  MainBox,
  PublicationsBox,
  FooterBox,
  Button,
  PlusButton,
  ActiveButton,
} from "./MapScreen.styled";
import MapPublicationBlock from "../../components/MapPublication/MapPublication";
import { StyleSheet } from "react-native";
import { Title, HeaderBox, Icon, HeaderButton } from "../Home/Home.styled";
import Plus from "../../assets/Union.svg";
import User from "../../assets/user.svg";
import Grid from "../../assets/grid.svg";
export default function MapScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  // console.log(posts);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [route.params, ...publications]);
    }
  }, [route.params]);
  return (
    <MainBox>
      <HeaderBox>
        <Title>My publications</Title>
        <HeaderButton onPress={() => navigation.navigate("Registration")}>
          <Icon width={24} height={24} />
        </HeaderButton>
      </HeaderBox>
      <PublicationsBox>
        <MapPublicationBlock navigation={navigation} publications={posts} />
      </PublicationsBox>
      <FooterBox style={styles.borders}>
        <ActiveButton>
          <Grid width={40} height={40} />
        </ActiveButton>
        <PlusButton onPress={() => navigation.navigate("CreatePublication")}>
          <Plus width={13} height={13} />
        </PlusButton>
        <Button onPress={() => navigation.navigate("Profile")}>
          <User width={40} height={40} />
        </Button>
      </FooterBox>
    </MainBox>
  );
}
const styles = StyleSheet.create({
  borders: {
    borderBottomColor: "transparent",
  },
});
