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
export default function LoginForm({
  emailHandler,
  passwordHandler,
  onLogin,
  state,
}) {
  const { email, password } = state;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <View style={styles.photobox}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/add.png")}
            />
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

          <Pressable onPress={onLogin} style={styles.button}>
            <Text style={styles.text}>Log in</Text>
          </Pressable>
          <Pressable /* onPress={} */ style={styles.already}>
            <Text style={styles.cheatText}>Don`t have an account? Log in</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    width: 360,
    height: 610,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 75,
  },
});
