import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
} from "react-native";
import {
  MainBox,
  Title,
  HeaderBox,
  PublicationsBox,
  FooterBox,
  Button,
  PlusButton,
  AddPhotobox,
  IconBox,
  TextContent,
} from "./CreatePostsScreen.styled";

import LeftArrow from "../../assets/arrow-left.svg";
import Camera from "../../assets/camera.svg";
export default function CreatePostsScreen({
  publicationName,
  location,
  publicationNameHandler,
  publicationlocationHandler,
  onAddPublication,
}) {
  return (
    <MainBox>
      <HeaderBox>
        <LeftArrow width={24} height={24} />
        <Title>Create publication</Title>
      </HeaderBox>
      <PublicationsBox>
        <AddPhotobox>
          <IconBox>
            <Camera width={24} height={24} />
          </IconBox>
        </AddPhotobox>
        <TextContent>Add your photo</TextContent>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View>
              <TextInput
                value={publicationName}
                onChangeText={publicationNameHandler}
                placeholder="Publication name"
              />
              <TextInput
                value={location}
                onChangeText={publicationlocationHandler}
                placeholder="Location"
              />
              <Pressable onPress={onAddPublication}>
                <Text>Add publication</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </PublicationsBox>
      <FooterBox style={styles.borders}>
        {/* <Button>
          <Grid width={40} height={40} />
        </Button>
        <PlusButton>
          <Plus width={13} height={13} />
        </PlusButton>
        <Button>
          <User width={40} height={40} />
        </Button> */}
      </FooterBox>
    </MainBox>
  );
}
const styles = StyleSheet.create({
  borders: {
    borderBottomColor: "transparent",
  },
});
