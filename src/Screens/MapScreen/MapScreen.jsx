import React from "react";
import {
  MainBox,
  PublicationsBox,
  FooterBox,
  Button,
  PlusButton,
} from "./MapScreen.styled";
import MapPublicationBlock from "../../components/MapPublication/MapPublication";
import { StyleSheet } from "react-native";
import { Title, HeaderBox, Icon, HeaderButton } from "../Home/Home.styled";
import Plus from "../../assets/Union.svg";
import User from "../../assets/user.svg";
export default function MapScreen({ navigation }) {
  return (
    <MainBox>
      <HeaderBox>
        <Title>My publications</Title>
        <HeaderButton onPress={() => navigation.navigate("Registration")}>
          <Icon width={24} height={24} />
        </HeaderButton>
      </HeaderBox>
      <PublicationsBox>
        <MapPublicationBlock navigation={navigation} />
      </PublicationsBox>
      <FooterBox style={styles.borders}>
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
