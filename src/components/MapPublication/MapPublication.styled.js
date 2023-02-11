import styled from "styled-components";

import { View, FlatList, Text, StatusBar, Image } from "react-native";
export const PublicationList = styled(FlatList)`
  padding-top: 30px;
`;

export const Item = styled(View)`
  margin-bottom: 32px;
`;
export const ItemBox = styled(View)`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 336px;
`;
export const CommentBox = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 8px;
`;
export const Name = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  margin-bottom: 10px;
`;
export const Location = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LocationText = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-left: 6px;
  color: #6e6e6e;
  text-decoration: underline;
`;
export const CommentText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
  margin-left: 6px;
`;
