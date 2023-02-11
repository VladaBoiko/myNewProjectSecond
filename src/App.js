// import { StyleSheet, View, Alert, ImageBackground } from "react-native";
// import React, { useState } from "react";
// import RegisterForm from "./Screens/Register/RegistrationScreen";
// import LoginForm from "./Screens/Login/LoginScreen";
// import HomeScreen from "./Screens/Home/Home";
// import MapScreen from "./Screens/MapScreen/MapScreen";
// import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
// import PostScreen from "./Screens/PostScreen/PostScreen";
// import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
// import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
// const image = {
//   uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
// };
// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [publicationName, setPublicationName] = useState("");
//   const [location, setLocation] = useState("");
//   // const [publicationName, setPublicationName] = useState("");
//   // const [publicationlocation, setPublicationlocation] =
//   //   useState("");

//   // я знаю, що для логінізації потрібно свій стейт, в якому я збережу дані. Але в даний момент мені потрібно просто їх десь втримати
//   const nameHandler = (text) => setName(text);
//   const emailHandler = (text) => setEmail(text);
//   const passwordHandler = (text) => setPassword(text);
//   const publicationNameHandler = (text) => setPublicationName(text);
//   const locationHandler = (text) => setLocation(text);
//   const onRegister = () => {
//     if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
//       Alert.alert("Enter your register information!");
//       return;
//     }
//     console.log(`Your data:
//     name: ${name},
//     email: ${email},
//     password: ${password}.
//     `);
//     Alert.alert("Thanks for registration!");
//   };
//   const onLogin = () => {
//     if (email.trim() === "" && password.trim() === "") {
//       Alert.alert("Enter your login information!");
//       return;
//     }
//     console.log(`Your data:
//     email: ${email},
//     password: ${password}.
//     `);
//     Alert.alert("Thanks for authorization!");
//   };
//   const onAddPublication = () => {
//     if (publicationName.trim() === "" && location.trim() === "") {
//       Alert.alert("Enter all information!");
//       return;
//     }
//     console.log(`Your data:
//     Publication name: ${publicationName}.
//     Location: ${location}.
//     `);
//     Alert.alert("Publish!");
//   };

//   return (
//     <>
//       <ImageBackground source={image} resizeMode="cover" style={styles.image} />

//       <HomeScreen />
//       {/* <RegisterForm
//         nameHandler={nameHandler}
//         emailHandler={emailHandler}
//         passwordHandler={passwordHandler}
//         onRegister={onRegister}
//         state={(name, email, password)}
//       /> */}
//       {/* <LoginForm
//         emailHandler={emailHandler}
//         passwordHandler={passwordHandler}
//         onLogin={onLogin}
//         state={(email, password)}
//       /> */}
//       {/* <CreatePostsScreen
//         publicationName={publicationName}
//         location={location}
//         publicationNameHandler={publicationNameHandler}
//         publicationlocationHandler={locationHandler}
//         onAddPublication={onAddPublication}
//       /> */}
//       {/* <PostScreen
//         publicationName={publicationName}
//         location={location}
//         publicationNameHandler={publicationNameHandler}
//         publicationlocationHandler={locationHandler}
//         onAddPublication={onAddPublication}
//       /> */}
//       {/* <MapScreen /> */}
//       {/* <CommentsScreen /> */}
//       {/* <ProfileScreen /> */}
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   image: {
//     // width: "100%",
//     // height: "100%",
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0",
//   },
// });
import { StyleSheet, View, Alert, ImageBackground, Button } from "react-native";
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
import LogOut from "./assets/log-out.svg";
import { PlusButton } from "./App.styled";
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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="My publications">
          <MainStack.Screen
            name="Registration"
            options={{ headerShown: false }}
            component={(props) => (
              <RegisterForm
                {...props}
                nameHandler={nameHandler}
                emailHandler={emailHandler}
                passwordHandler={passwordHandler}
                onRegister={onRegister}
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
                onLogin={onLogin}
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
                publicationNameHandler={publicationNameHandler}
                publicationlocationHandler={locationHandler}
                onAddPublication={onAddPublication}
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
                onAddPublication={onAddPublication}
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
