import styled from "styled-components";
import { Text, View, Pressable, Image, ScrollView } from "react-native";
import Delete from "../../assets/delete.svg";
export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f1;
`;
export const PhotoDelete = styled(Delete)`
  transform: rotate(-45deg);
  position: absolute;
  left: 105px;
  bottom: 10px;
`;
export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
export const ProfileBox = styled(View)`
  width: 100%;
  height: 749px;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;
export const Photobox = styled(View)`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  position: absolute;
  top: -60px;
  background-color: transparent;
`;
export const NameTitle = styled(Text)`
  margin-bottom: auto;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: black;
  text-align: center;
`;
export const FooterBox = styled(View)`
  width: 100%;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 11px 10px;
  margin-top: auto;
  background-color: white;
  position: absolute;
  bottom: 0;
`;
export const Button = styled(Pressable)`
  margin-left: auto;
`;
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
  margin-right: auto;
`;
