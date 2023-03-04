import { StyleSheet } from "react-native";
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
import LocationMapScreen from "./Screens/LocationMapScreen/LocationMapScreen";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [publicationName, setPublicationName] = useState("");
  const [location, setLocation] = useState("");
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const publicationNameHandler = (text) => setPublicationName(text);
  const locationHandler = (text) => setLocation(text);

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="CreatePublication">
          <MainStack.Screen
            name="Location Map"
            component={LocationMapScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Registration"
            options={{ headerShown: false }}
            component={(props) => (
              <RegisterForm
                {...props}
                nameHandler={nameHandler}
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}
                state={(name, email, password)}
              />
            )}
          />
          <MainStack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={(props) => (
              <LoginForm
                {...props}
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}
                state={(email, password)}
              />
            )}
          />
          <MainStack.Screen
            name="My publications"
            component={HomeScreen}
            options={() => ({
              headerShown: false,
              title: "My publications",
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,

                marginLeft: "auto",
              },
            })}
          />
          <MainStack.Screen
            name="CreatePublication"
            options={{ headerShown: false }}
            component={(props) => (
              <CreatePostsScreen
                {...props}
                publicationName={publicationName}
                location={location}
              />
            )}
          />
          <MainStack.Screen
            name="Publication"
            options={{ headerShown: false }}
            component={(props) => (
              <PostScreen
                {...props}
                publicationName={publicationName}
                location={location}
                publicationNameHandler={publicationNameHandler}
                publicationlocationHandler={locationHandler}
                // onAddPublication={onAddPublication}
              />
            )}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
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
