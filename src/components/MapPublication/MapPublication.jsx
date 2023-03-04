import {
  PublicationList,
  Item,
  Avatar,
  Name,
  Location,
  ItemBox,
  CommentBox,
  CommentText,
  LocationText,
} from "./MapPublication.styled";
import React from "react";
import { Pressable } from "react-native";
// const publications = require("../../bd/publications.json");
import Comment from "../../assets/comment.svg";
import LocationIcon from "../../assets/location.svg";
export default function MapPublicationBlock({ navigation, publications }) {
  return (
    <PublicationList
      data={publications}
      renderItem={({ item }) => (
        <Item key={item.id}>
          <Pressable onPress={() => navigation.navigate("Publication")}>
            <Avatar
              source={{
                uri: item.img,
              }}
              alt="User avatar"
            />
            <Name>{item.postName}</Name>
          </Pressable>
          <ItemBox>
            <CommentBox>
              <Comment width={24} height={24} />
              <CommentText>{item.comments}</CommentText>
            </CommentBox>
            <Location>
              <LocationIcon width={24} height={24} />
              <LocationText>{item.location}</LocationText>
            </Location>
          </ItemBox>
        </Item>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
