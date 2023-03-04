import {
  PublicationList,
  Item,
  Avatar,
  Name,
  Location,
  ItemBox,
} from "./Publication.styled";
import React from "react";
import { Pressable } from "react-native";
// const publications = require("../../bd/publications.json");
export default function PublicationBlock({ navigation, publications }) {
  return (
    <PublicationList
      data={publications}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate("Publication")}>
          <Item key={item.id}>
            <Avatar
              source={{
                uri: item.img,
              }}
              alt="User avatar"
              width="48"
            />
            <ItemBox>
              <Name>{item.postName}</Name>
              <Location>{item.location}</Location>
            </ItemBox>
          </Item>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
