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
  ImageBackground,
} from "react-native";
import Plus from "../../assets/add.svg";
const image = {
  uri: "https://i.pinimg.com/originals/da/63/21/da6321cb6b094e012bd57dc7adb0a4ad.jpg",
};
import {
  ProfileImage,
  PhotoDelete,
} from "../ProfileScreen/ProfileScreen.styled";
export default function LoginForm({
  emailHandler,
  passwordHandler,
  onLogin,
  state,
  navigation,
}) {
  const { email, password } = state;
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
                <ProfileImage
                  source={{
                    uri: "http://www.mukachevo.net/Content/img/news/313/p_313592_1_slidertop2.jpg",
                  }}
                  alt="User avatar"
                />
                <PhotoDelete width={25} height={25} />
                <Plus width={25} height={25} style={styles.tinyLogo} />
              </View>
              <Text style={styles.title}>Log in</Text>
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
                <Text style={styles.text}>Log in</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Registration")}
                style={styles.already}
              >
                <Text style={styles.cheatText}>
                  Don`t have an account? Sign up
                </Text>
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
  image: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  form: {
    width: 360,
    height: 749,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  photobox: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
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
    marginBottom: 205,
  },
});
