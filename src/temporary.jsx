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
