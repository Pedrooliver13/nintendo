import Card from "../Card";

import { Container } from "../../styles/container";
import * as Styled from "./styles";

const SectionBuy = (props) => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Title>Featured Games</Styled.Title>

          <Styled.WrapperCards>
            <Card
              src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LuigisMansion3_image1600w.jpg"
              title="Luigi´s Mansion 3"
              price="59.99"
            />
            <Card
              src="https://tremdohype.com.br/wp-content/uploads/2019/03/sword-1551277205701.jpg"
              title="Pokémon"
              price="159.99"
            />
            <Card
              src="https://store.nintendo.com.br/media/catalog/product/cache/1aff59ff6f21b2058ac5563c018426d7/z/e/zeldabow_hero_2.jpg"
              title="Zelda Breath of the Wild"
              price="39.99"
              color="pink"
            />
          </Styled.WrapperCards>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};

export default SectionBuy;
