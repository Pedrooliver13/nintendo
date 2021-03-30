import { Container } from "../../styles/container";
import * as Styled from "./styles";

import SwitchControllImage from "../../assets/controll.png";

const SectionHero = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.TextBlock>
            <Styled.Title>Nitendo Switch</Styled.Title>

            <Styled.Description>
              Better battery, clearer screen, and even more fun.
            </Styled.Description>

            <Styled.Button>Buy now</Styled.Button>
          </Styled.TextBlock>

          <Styled.Image src={SwitchControllImage} />
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};

export default SectionHero;
