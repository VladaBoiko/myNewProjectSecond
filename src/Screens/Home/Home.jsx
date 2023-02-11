import React from "react";
import {
  MainBox,
  Title,
  HeaderBox,
  Icon,
  PublicationsBox,
  FooterBox,
  Button,
  PlusButton,
  HeaderButton,
} from "./Home.styled";
import { StyleSheet } from "react-native";
import PublicationBlock from "../../components/Publication/Publication";
import Grid from "../../assets/grid.svg";
import Plus from "../../assets/Union.svg";
import User from "../../assets/user.svg";
export default function HomeScreen({ navigation }) {
  return (
    <MainBox>
      <HeaderBox>
        <Title>Publications</Title>
        <HeaderButton onPress={() => navigation.navigate("Registration")}>
          <Icon width={24} height={24} />
        </HeaderButton>
      </HeaderBox>
      <PublicationsBox>
        <PublicationBlock navigation={navigation} />
      </PublicationsBox>
      <FooterBox style={styles.borders}>
        <Button onPress={() => navigation.navigate("Map")}>
          <Grid width={40} height={40} />
        </Button>
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
