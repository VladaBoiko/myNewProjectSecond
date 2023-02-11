import styled from "styled-components";
import { Text, View, Pressable, Image } from "react-native";

export const AddPhotobox = styled(View)`
  width: 100%;
  height: 200px;
  /* padding: 0 10px; */
  margin-bottom: 32px;
`;
export const ImagePost = styled(Image)`
  width: 100%;
  height: 200px;
  /* border-radius: 8px; */
`;
export const Avatar = styled(View)`
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const IconBox = styled(View)`
  width: 35px;
  height: 35px;
  background-color: #e8e8e8;
  border-radius: 50px;
  border: 1px solid #185792;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderButton = styled(Pressable)`
  margin-right: auto;
`;
export const Title = styled(Text)`
  /* margin-left: auto; */
  margin-right: auto;
  font-weight: bold;
  font-size: 17px;
  line-height: 35px;
  color: black;
`;

export const CommentTextOther = styled(Text)`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #212121;

  /* background-color: #212121; */
`;
export const CommentTextOtherBox = styled(View)`
  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  width: 260px;

  margin-left: 16px;
`;
export const CommentDateOther = styled(Text)`
  /* position: absolute;
  right: 20%;
  bottom: 0; */
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  margin-top: 8px;
  color: #bdbdbd;
`;
export const CommentTextAuthor = styled(Text)`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #212121;
  /* max-width: 260px;
  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  margin-right: 16px; */
`;
export const CommentTextAuthorBox = styled(View)`
  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  width: 260px;

  margin-right: 16px;
`;
export const CommentDateAuthor = styled(Text)`
  /* position: absolute;
  right: 20%;
  bottom: 0; */
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: left;
  margin-top: 8px;
  color: #bdbdbd;
`;
export const CommentsBox = styled(View)`
  /* margin-top: 34px; */
  width: 100%;
  padding: 0 10px;
  /* height: 200px; */
  display: flex;
  /* flex-direction: row; */

  /* background-color: red; */
  /* padding: 32px 10px; */
  /* flex: 1; */
`;
export const CommentBoxOther = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
`;
export const CommentBoxAuthor = styled(View)`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 26px;
`;
export const LocationBox = styled(View)`
  width: 100%;
  padding: 0 10px;
`;

export const PlusButton = styled(Pressable)`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
  background: #ff6c00;
  /* margin: 32px 0 90px 0; */
  position: absolute;
  right: 26px;
  top: 6px;
`;
export const ButtonText = styled(Text)`
  font-size: 16px;
  line-height: 19px;

  color: #bdbdbd;
`;
