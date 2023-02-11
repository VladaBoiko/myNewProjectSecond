import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import {
  TextBox,
  AddPhotobox,
  AddPhotoboxImage,
  HeaderBox,
  Title,
  LocationTitle,
  ContentText,
  ContentTextTitle,
  LocationText,
  CommentText,
  Comment,
  ContentTextBox,
  FooterBox,
  DeleteButton,
  EditButton,
  EditButtonText,
  PublicationsBox,
  HeaderButton,
} from "./PostScreen.styled";

import LeftArrow from "../../assets/arrow-left.svg";
import RightArrow from "../../assets/arrow-right.svg";
import Trash from "../../assets/trash.svg";
import Location from "../../assets/location.svg";

export default function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBox>
        <HeaderButton onPress={() => navigation.navigate("My publications")}>
          <LeftArrow width={24} height={24} />
        </HeaderButton>
        <Title>Your publication</Title>
      </HeaderBox>
      <PublicationsBox>
        <AddPhotobox>
          <AddPhotoboxImage
            source={{
              uri: "https://www.rbc.ua/static/img/k/a/karpati_oseniyu_kuda_poehat_3_480x270.jpg",
            }}
          ></AddPhotoboxImage>
        </AddPhotobox>
        <TextBox>
          <LocationText>
            <Location width={24} height={24} />
            <LocationTitle>Ivano-Frankivs'k Region, Ukraine</LocationTitle>
          </LocationText>
          <ContentTextBox style={styles.bordersTitleContent}>
            <ContentTextTitle>Karpathian forest</ContentTextTitle>
          </ContentTextBox>
          <ContentTextBox style={styles.bordersContent}>
            <ContentText>The place where dreams become true</ContentText>
          </ContentTextBox>
          <Pressable onPress={() => navigation.navigate("Comments")}>
            <Comment style={styles.bordersContent}>
              <CommentText>Read comments</CommentText>
              <RightArrow width={24} height={24} />
            </Comment>
          </Pressable>
        </TextBox>
      </PublicationsBox>
      <FooterBox style={styles.bordersFooter}>
        <EditButton>
          <EditButtonText>Edit</EditButtonText>
        </EditButton>
        <DeleteButton>
          <Trash width={24} height={24} />
        </DeleteButton>
      </FooterBox>
    </View>
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
});
