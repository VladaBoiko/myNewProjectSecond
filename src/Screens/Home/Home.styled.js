import styled from "styled-components";
import { Text, View, Pressable } from "react-native";
import LogOut from "../../assets/log-out.svg";
export const MainBox = styled(View)`
  width: 100%;
  height: 100%;

  background-color: "white";
`;
export const Icon = styled(LogOut)`
  margin-left: auto;
`;
export const PublicationsBox = styled(View)`
  width: 100%;
  padding: 34px 10px;
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
  font-weight: bold;
  font-size: 17px;
  line-height: 35px;
  color: black;
`;
export const FooterBox = styled(View)`
  width: 100%;
  height: 83px;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
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
