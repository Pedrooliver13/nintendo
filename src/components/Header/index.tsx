import { MdMenu } from "react-icons/md";

import { Container } from "../../styles/container";
import * as Styled from "./styles";

import LogoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Logo src={LogoImage} alt="Logo marca escrito Nintendo" />

          <Styled.Nav>
            <li>
              <a href="#">NINTENDO SWITCH</a>
            </li>
            <li>
              <a href="#">GAME STORE</a>
            </li>
            <li>
              <a href="#">MY NINTENDO</a>
            </li>
          </Styled.Nav>

          <Styled.Hamburger>{<MdMenu size={24} />}</Styled.Hamburger>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};

export default Header;
