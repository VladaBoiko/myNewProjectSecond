import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import * as Location from "expo-location";
import {
  Title,
  HeaderBox,
  PublicationsBox,
  FooterBox,
  PlusButton,
  IconBox,
  ButtonText,
  DeleteButton,
  PublicationLocation,
  LocationBox,
  HeaderButton,
} from "./CreatePostsScreen.styled";
import LeftArrow from "../../assets/arrow-left.svg";
import CameraIcon from "../../assets/camera.svg";
import Trash from "../../assets/trash.svg";
export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [img, setImg] = useState(null);
  const [postName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [locateData, setLocateData] = useState("");
  const nameHandler = (text) => setPostName(text);
  const locationHandler = (text) => setLocation(text);
  const takePhoto = async () => {
    const img = await camera.takePictureAsync();
    setImg(img.uri);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    const postLocation = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: postLocation.coords.latitude,
      longitude: postLocation.coords.longitude,
    };
    setLocateData(coords);
  };

  const sendPhoto = async () => {
    navigation.navigate("Profile", {
      img,
      postName,
      location,
      locateData,
    });
  };
  console.log(camera);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <HeaderBox>
            <HeaderButton onPress={() => navigation.navigate("Profile")}>
              <LeftArrow width={24} height={24} />
            </HeaderButton>
            <Title>Create publication</Title>
          </HeaderBox>
          <PublicationsBox>
            <View style={styles.form}>
              <Camera style={styles.camera} ref={setCamera}>
                {img && (
                  <View style={styles.takePhotoContainer}>
                    <Image
                      source={{ uri: img }}
                      style={{ height: 100, width: 100 }}
                    />
                  </View>
                )}
                <IconBox onPress={takePhoto}>
                  <CameraIcon width={24} height={24} />
                </IconBox>
              </Camera>

              <View style={styles.formBox}>
                <TextInput
                  value={postName}
                  onChangeText={nameHandler}
                  placeholder="Publication name"
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                />
                <LocationBox>
                  <TextInput
                    value={location}
                    onChangeText={locationHandler}
                    placeholder="Location"
                    style={styles.inputLocation}
                    placeholderTextColor={"#BDBDBD"}
                  />
                  <PublicationLocation width={24} height={24} />
                </LocationBox>

                <PlusButton onPress={sendPhoto}>
                  <ButtonText>Add publication</ButtonText>
                </PlusButton>
              </View>
            </View>
          </PublicationsBox>
          <FooterBox style={styles.borders}>
            <DeleteButton>
              <Trash width={24} height={24} />
            </DeleteButton>
          </FooterBox>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  borders: {
    borderBottomColor: "transparent",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  formBox: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  camera: {
    width: "100%",
    height: 232,
    // backgroundColor: "#e8e8e8",
    // margin: "0 auto",
    // borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
