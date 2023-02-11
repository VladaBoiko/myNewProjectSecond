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
  LikeBox,
  LikeText,
} from "./ProfilePublication.styled";
import { Pressable } from "react-native";
import React from "react";
const publications = require("../../bd/publications.json");
import CommentIcon from "../../assets/comment_profile.svg";
import LikeIcon from "../../assets/like.svg";
import LocationIcon from "../../assets/location.svg";
export default function PublicationBlock({ navigation }) {
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
            <Pressable onPress={() => navigation.navigate("Comments")}>
              <CommentBox>
                <CommentIcon width={24} height={24} />
                <CommentText>{item.comments}</CommentText>
              </CommentBox>
            </Pressable>
            <LikeBox>
              <LikeIcon width={24} height={24} />
              <LikeText>{item.likes}</LikeText>
            </LikeBox>
            <Location>
              <LocationIcon width={24} height={24} />
              <LocationText>{item.country}</LocationText>
            </Location>
          </ItemBox>
        </Item>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
