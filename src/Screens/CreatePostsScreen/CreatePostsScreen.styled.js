import styled from "styled-components";
import { Text, View, Pressable } from "react-native";
import Location from "../../assets/location.svg";
export const LocationBox = styled(View)``;
export const PublicationLocation = styled(Location)`
  position: absolute;
  top: 25%;
`;
export const PublicationsBox = styled(View)`
  /* padding: 32px 0; */
`;
export const AddPhotobox = styled(View)`
  width: 336px;
  height: 200px;
  background-color: #e8e8e8;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const HeaderButton = styled(Pressable)`
  margin-right: auto;
`;
export const IconBox = styled(Pressable)`
  width: 60px;
  height: 60px;
  background-color: #d4d4d42b;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 10px;
`;
export const TextContent = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
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
  /* margin-left: auto; */
  margin-right: auto;
  font-weight: bold;
  font-size: 17px;
  line-height: 35px;
  color: black;
`;
export const FooterBox = styled(View)`
  width: 100%;
  border: 1px solid #e8e8e8;
  margin-top: 132px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const PlusButton = styled(Pressable)`
  width: 100%;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: orange;
  margin: 32px 0;
`;
export const ButtonText = styled(Text)`
  font-size: 16px;
  line-height: 19px;

  color: white;
`;
export const DeleteButton = styled(Pressable)`
  width: 70px;

  height: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;
