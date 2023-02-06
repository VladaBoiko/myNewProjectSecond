import styled from "styled-components";
import { Text, View, Pressable } from "react-native";
import LogOut from "../../assets/log-out.svg";
export const MainBox = styled(View)`
  width: 100%;
  height: 100%;

  background-color: "white";
`;

export const PublicationsBox = styled(View)`
  width: 100%;
  height: 100%;
  padding: 32px 0;
`;
export const AddPhotobox = styled(View)`
  width: 343px;
  height: 240px;
  background-color: #e8e8e8;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconBox = styled(View)`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextContent = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
  margin-left: 16px;
  margin-top: 10px;
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
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 17px;
  line-height: 35px;
  color: black;
`;
export const FooterBox = styled(View)`
  width: 100%;
  height: 83px;
  position: absolute;
  bottom: 0;
  border: 1px solid #e8e8e8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 11px 10px;
`;
export const Button = styled(Pressable)``;
export const PlusButton = styled(Pressable)`
  width: 70px;
  height: 40px;
  border-radius: 20px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 10px;
  background-color: #ff6c00;
  margin: 0 31px;
`;

{
  /* текст */
}
{
  /* текст */
}
{
  /* іконка текст */
}
{
  /* кнопка */
}
