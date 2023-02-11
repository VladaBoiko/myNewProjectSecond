import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const MainStack = createStackNavigator();
import RegisterForm from "./Screens/Register/RegistrationScreen";
import LoginForm from "./Screens/Login/LoginScreen";
import HomeScreen from "./Screens/Home/Home";
import MapScreen from "./Screens/MapScreen/MapScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import PostScreen from "./Screens/PostScreen/PostScreen";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
const image = {
  uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
};
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [publicationName, setPublicationName] = useState("");
  const [location, setLocation] = useState("");
  // const [publicationName, setPublicationName] = useState("");
  // const [publicationlocation, setPublicationlocation] =
  //   useState("");

  // я знаю, що для логінізації потрібно свій стейт, в якому я збережу дані. Але в даний момент мені потрібно просто їх десь втримати
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const publicationNameHandler = (text) => setPublicationName(text);
  const locationHandler = (text) => setLocation(text);
  const onRegister = () => {
    if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
      Alert.alert("Enter your register information!");
      return;
    }
    console.log(`Your data:
    name: ${name},
    email: ${email},
    password: ${password}.
    `);
    Alert.alert("Thanks for registration!");
  };
  const onLogin = () => {
    if (email.trim() === "" && password.trim() === "") {
      Alert.alert("Enter your login information!");
      return;
    }
    console.log(`Your data:
    email: ${email},
    password: ${password}.
    `);
    Alert.alert("Thanks for authorization!");
  };
  const onAddPublication = () => {
    if (publicationName.trim() === "" && location.trim() === "") {
      Alert.alert("Enter all information!");
      return;
    }
    console.log(`Your data:
    Publication name: ${publicationName}.
    Location: ${location}.
    `);
    Alert.alert("Publish!");
  };

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          {/* <MainStack.Screen
            name="Registration"
            component={
              <RegisterForm
                nameHandler={nameHandler}
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}
                onRegister={onRegister}
                state={(name, email, password)}
              />
            }
          />
          <MainStack.Screen
            name="Login"
            component={
              <LoginForm
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}
                onLogin={onLogin}
                state={(email, password)}
              />
            }
          /> */}
          <MainStack.Screen name="Home" component={HomeScreen} />
          {/* <MainStack.Screen
            name="CreatePublication"
            component={
              <CreatePostsScreen
                publicationName={publicationName}
                location={location}
                publicationNameHandler={publicationNameHandler}
                publicationlocationHandler={locationHandler}
                onAddPublication={onAddPublication}
              />
            }
          />
          <MainStack.Screen
            name="Publication"
            component={
              <PostScreen
                publicationName={publicationName}
                location={location}
                publicationNameHandler={publicationNameHandler}
                publicationlocationHandler={locationHandler}
                onAddPublication={onAddPublication}
              />
            }
          />
          <MainStack.Screen name="Map" component={<MapScreen />} />
          <MainStack.Screen name="Comments" component={<CommentsScreen />} />
          <MainStack.Screen name="Profile" component={<ProfileScreen />} /> */}
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
