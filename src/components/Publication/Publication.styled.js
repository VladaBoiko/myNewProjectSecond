import styled from "styled-components";

import { View, FlatList, Text, StatusBar, Image } from "react-native";
export const PublicationList = styled(FlatList)``;

export const Item = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 22px;
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
  color: #9b9898;
`;
