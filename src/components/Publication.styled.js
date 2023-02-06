import styled from "styled-components";

import { View, FlatList, Text, StatusBar, Image } from "react-native";
export const PublicationList = styled(FlatList)`
  /* background-color: rgb(229, 226, 226); */
  /* margin: 50px;
  margin-left: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border: 1px solid black;
  height: 140px;
  width: 100%; */
`;

export const Item = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
`;
export const ItemBox = styled(View)`
  margin-left: 18px;
  justify-content: center;
`;

export const Avatar = styled(Image)`
  width: 106px;
  height: 60px;
  border-radius: 8px;
`;
export const Name = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  margin-bottom: 6px;
`;
export const Location = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #9b9898;
  /* width: 30px;
  height: 50px; */
`;
