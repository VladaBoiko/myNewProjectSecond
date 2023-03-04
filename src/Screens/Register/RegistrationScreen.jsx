import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import Plus from "../../assets/add.svg";
const image = {
  uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
};

export default function RegisterForm({
  nameHandler,
  emailHandler,
  passwordHandler,
  state,
  navigation,
}) {
  const { name, email, password } = state;
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View style={styles.photobox}>
                <Plus width={25} height={25} style={styles.tinyLogo} />
              </View>
              <Text style={styles.title}>Register</Text>
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="name"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="email"
                style={styles.input}
              />
              <View>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="password"
                  style={styles.input}
                />
                <Pressable /* onPress={onRegister} */ style={styles.cheat}>
                  <Text style={styles.cheatText}>Show</Text>
                </Pressable>
              </View>
              <Pressable
                onPress={() => navigation.navigate("Profile")}
                style={styles.button}
              >
                <Text style={styles.text}>Register</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={styles.already}
              >
                <Text style={styles.cheatText}>Have an account? Log in</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
  form: {
    width: 360,
    height: 749,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 90,
  },
  photobox: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    backgroundColor: "#F6F6F6",
  },

  tinyLogo: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 105,
    bottom: 10,
  },
  title: {
    marginBottom: 32,
    letterSpacing: 3,
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    color: "black",
  },
  input: {
    width: 343,
    padding: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginBottom: 16,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  text: {
    color: "#FFFFFF",
  },
  cheatText: { color: "#1B4371" },
  cheat: { position: "absolute", right: 20, bottom: 32 },
  already: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 295,
  },
});
