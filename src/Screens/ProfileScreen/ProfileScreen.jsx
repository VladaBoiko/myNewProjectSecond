import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import {
  Container,
  Photobox,
  NameTitle,
  FooterBox,
  Button,
  PlusButton,
  ProfileImage,
  ProfileBox,
  PhotoDelete,
} from "./ProfileScreen.styled";
import Grid from "../../assets/grid.svg";
import Plus from "../../assets/Union.svg";
import User from "../../assets/user.svg";
const image = {
  uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
};
import PublicationBlock from "./../../components/ProfilePublication/ProfilePublication";
export default function ProfileScreen({ navigation }) {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <Container>
        <ProfileBox style={styles.form}>
          <Photobox>
            <ProfileImage
              source={{
                uri: "http://www.mukachevo.net/Content/img/news/313/p_313592_1_slidertop2.jpg",
              }}
              alt="User avatar"
            />
            <PhotoDelete width={25} height={25} />
          </Photobox>
          <ScrollView style={styles.color}>
            <NameTitle>Lynx Carnivora</NameTitle>
            <PublicationBlock navigation={navigation} />
          </ScrollView>
        </ProfileBox>
        <FooterBox style={styles.bordersFooter}>
          <Button onPress={() => navigation.navigate("Map")}>
            <Grid width={40} height={40} />
          </Button>

          <PlusButton onPress={() => navigation.navigate("CreatePublication")}>
            <Plus width={13} height={13} />
          </PlusButton>
        </FooterBox>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    width: "100%",
    height: 889,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingTop: 90,
  },
  bordersFooter: {
    borderBottomColor: "transparent",
  },
});
