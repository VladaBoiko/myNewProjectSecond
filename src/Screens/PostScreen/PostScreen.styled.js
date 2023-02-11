import styled from "styled-components";
import { Text, View, Pressable, Image } from "react-native";
export const PublicationsBox = styled(View)`
  padding: 32px 0;
`;
export const TextBox = styled(View)`
  padding: 0 16px;
`;
export const AddPhotobox = styled(View)`
  width: 286px;
  height: 200px;
  background-color: #e8e8e8;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const AddPhotoboxImage = styled(Image)`
  width: 336px;
  height: 200px;
  border-radius: 8px;
`;
export const HeaderButton = styled(Pressable)`
  margin-right: auto;
`;
export const HeaderBox = styled(View)`
  width: 100%;
  height: 88px;
  padding-bottom: 11px;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 11px 10px;
`;
export const Title = styled(Text)`
  /* margin-left: auto; */
  margin-right: auto;
  font-weight: bold;
  font-size: 17px;
  line-height: 35px;
  color: black;
`;
export const LocationTitle = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  margin-left: 11px;
`;
export const ContentText = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;
export const ContentTextTitle = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
`;
export const LocationText = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-right: auto;
  color: #212121;
`;
export const Comment = styled(View)`
  width: 167px;
  padding: 16px 0;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContentTextBox = styled(View)`
  display: flex;
  padding: 16px 0;
  width: 100%;
`;
export const FooterBox = styled(View)`
  width: 100%;
  border: 1px solid #e8e8e8;
  margin-top: 100px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;
export const DeleteButton = styled(Pressable)`
  padding: 12px 65px;
  border: 1px solid #d0d0d0;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;
export const EditButton = styled(Pressable)`
  padding: 16px 65px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ff6c00;
`;
export const EditButtonText = styled(Text)`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
`;
