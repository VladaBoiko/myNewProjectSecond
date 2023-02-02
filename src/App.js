import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import React, { useState } from "react";
import RegisterForm from "./Screens/RegistrationScreen";
import LoginForm from "./Screens/LoginScreen";
const image = {
  uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
};
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // я знаю, що для логінізації потрібно свій стейт, в якому я збережу дані. Але в даний момент мені потрібно просто їх десь втримати
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
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

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.container}>
        <RegisterForm
          nameHandler={nameHandler}
          emailHandler={emailHandler}
          passwordHandler={passwordHandler}
          onRegister={onRegister}
          state={(name, email, password)}
        />
        {/* <LoginForm
          emailHandler={emailHandler}
          passwordHandler={passwordHandler}
          onLogin={onLogin}
          state={(email, password)}
        /> */}
      </View>
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
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
