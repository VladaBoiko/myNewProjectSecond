import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  AddPhotobox,
  HeaderBox,
  Title,
  CommentTextOther,
  ImagePost,
  Avatar,
  CommentsBox,
  IconBox,
  CommentBoxOther,
  CommentBoxAuthor,
  CommentTextAuthor,
  CommentDateOther,
  CommentTextOtherBox,
  CommentTextAuthorBox,
  CommentDateAuthor,
  LocationBox,
  PlusButton,
  ButtonText,
  HeaderButton,
} from "./CommentsScreen.styled";

import LeftArrow from "../../assets/arrow-left.svg";
import Camera from "../../assets/camera_black.svg";
import TopArrow from "../../assets/top-arrow.svg";

export default function CommentsScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <ScrollView>
              <HeaderBox>
                <HeaderButton onPress={() => navigation.navigate("Profile")}>
                  <LeftArrow width={24} height={24} />
                </HeaderButton>
                <Title>Comments</Title>
              </HeaderBox>
              <AddPhotobox>
                <ImagePost
                  source={{
                    uri: "https://tamtour.com.ua/local/image/257/014/karpaty-osin.jpg",
                  }}
                  alt="User avatar"
                />
              </AddPhotobox>
              <CommentsBox>
                <CommentBoxOther>
                  <Avatar>
                    <IconBox>
                      <Camera width={24} height={24} />
                    </IconBox>
                  </Avatar>
                  <CommentTextOtherBox>
                    <CommentTextOther>
                      Really love your most recent photo. I’ve been trying to
                      capture the same thing for a few months and would love
                      some tips!
                    </CommentTextOther>
                    <CommentDateOther>09 июня, 2020 | 08:40</CommentDateOther>
                  </CommentTextOtherBox>
                </CommentBoxOther>
                <CommentBoxAuthor>
                  <Avatar>
                    <IconBox>
                      <Camera width={24} height={24} />
                    </IconBox>
                  </Avatar>
                  <CommentTextAuthorBox>
                    <CommentTextAuthor>
                      A fast 50mm like f1.8 would help with the bokeh. I’ve been
                      using primes as they tend to get a bit sharper images.
                    </CommentTextAuthor>
                    <CommentDateAuthor>09 июня, 2020 | 08:40</CommentDateAuthor>
                  </CommentTextAuthorBox>
                </CommentBoxAuthor>
                <CommentBoxOther>
                  <Avatar>
                    <IconBox>
                      <Camera width={24} height={24} />
                    </IconBox>
                  </Avatar>
                  <CommentTextOtherBox>
                    <CommentTextOther>
                      Thank you! That was very helpful!
                    </CommentTextOther>
                    <CommentDateOther>09 июня, 2020 | 08:40</CommentDateOther>
                  </CommentTextOtherBox>
                </CommentBoxOther>
              </CommentsBox>
            </ScrollView>

            <View style={styles.form}>
              <LocationBox>
                <TextInput
                  multiline={true}
                  // value={location}
                  // onChangeText={publicationlocationHandler}
                  placeholder="Add comment"
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                />
                <PlusButton>
                  <TopArrow width={15} height={20} />
                </PlusButton>
              </LocationBox>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bordersFooter: {
    borderBottomColor: "transparent",
  },
  bordersContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginTop: 16,
  },
  bordersTitleContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginTop: 30,
  },
  container: {
    height: "100%",
  },
  form: {
    width: "100%",
    backgroundColor: "white",
    placeholderColor: "red",
    paddingTop: 10,
    paddingBottom: 250,
  },
  input: {
    width: "100%",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 60,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    color: "#212121",
    borderRadius: 100,
  },
});
