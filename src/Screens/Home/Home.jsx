import React from "react";
import {
  MainBox,
  Title,
  HeaderBox,
  Icon,
  PublicationsBox,
  FooterBox,
  Button,
  PlusButton,
} from "./Home.styled";
import PublicationBlock from "../../components/Publication";
import Grid from "../../assets/grid.svg";
import Plus from "../../assets/Union.svg";
import User from "../../assets/user.svg";
export default function HomeScreen() {
  return (
    <MainBox>
      <HeaderBox>
        <Title>Publications</Title>
        <Icon width={24} height={24} />
      </HeaderBox>
      <PublicationsBox>
        <PublicationBlock />
      </PublicationsBox>
      <FooterBox>
        <Button>
          <Grid width={40} height={40} />
        </Button>
        <PlusButton>
          <Plus width={13} height={13} />
        </PlusButton>
        <Button>
          <User width={40} height={40} />
        </Button>
      </FooterBox>
    </MainBox>
  );
}
