import {
  PublicationList,
  Item,
  Avatar,
  Name,
  Location,
  ItemBox,
} from "./Publication.styled";
import React from "react";
const publications = require("../bd/publications.json");
export default function PublicationBlock() {
  return (
    <PublicationList
      data={publications}
      renderItem={({ item }) => (
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
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
