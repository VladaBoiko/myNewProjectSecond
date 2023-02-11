import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Title,
  HeaderBox,
  PublicationsBox,
  FooterBox,
  PlusButton,
  AddPhotobox,
  IconBox,
  TextContent,
  ButtonText,
  DeleteButton,
  PublicationLocation,
  LocationBox,
  HeaderButton,
} from "./CreatePostsScreen.styled";

import LeftArrow from "../../assets/arrow-left.svg";
import Camera from "../../assets/camera.svg";
import Trash from "../../assets/trash.svg";
export default function CreatePostsScreen({
  publicationName,
  location,
  publicationNameHandler,
  publicationlocationHandler,
  onAddPublication,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <HeaderBox>
        <HeaderButton onPress={() => navigation.navigate("Profile")}>
          <LeftArrow width={24} height={24} />
        </HeaderButton>
        <Title>Create publication</Title>
      </HeaderBox>
      <PublicationsBox>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <AddPhotobox>
                <IconBox>
                  <Camera width={24} height={24} />
                </IconBox>
                <TextContent>Add your photo</TextContent>
              </AddPhotobox>
              <View style={styles.formBox}>
                <TextInput
                  value={publicationName}
                  onChangeText={publicationNameHandler}
                  placeholder="Publication name"
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                />
                <LocationBox>
                  <TextInput
                    value={location}
                    onChangeText={publicationlocationHandler}
                    placeholder="Location"
                    style={styles.inputLocation}
                    placeholderTextColor={"#BDBDBD"}
                  />
                  <PublicationLocation width={24} height={24} />
                </LocationBox>

                <PlusButton>
                  <ButtonText>Add publication</ButtonText>
                </PlusButton>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </PublicationsBox>
      <FooterBox style={styles.borders}>
        <DeleteButton>
          <Trash width={24} height={24} />
        </DeleteButton>
      </FooterBox>
    </View>
  );
}

const styles = StyleSheet.create({
  borders: {
    borderBottomColor: "transparent",
  },
  formBox: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  form: {
    width: 360,
    // height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  input: {
    padding: 0,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    color: "#212121",
  },
  inputLocation: {
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    color: "#212121",
  },
});
