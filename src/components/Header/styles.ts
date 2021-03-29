import styled from "styled-components";
import * as C from "../../styles/contants";

export const Wrapper = styled.header`
  background-color: ${C.NintentdoWhite};
  box-shadow: 2px 2px 2px 2px ${C.NintentdoGray};
`;

export const Content = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 8px 16px;
`;

export const Logo = styled.img`
  max-width: 120px;
  width: 100%;
  height: auto;

  object-fit: contain;
`;

export const Nav = styled.ul`
  max-width: 400px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  font-weight: 600;
  color: ${C.NintendoText};

  li,
  a {
    color: inherit;
    text-decoration: none;
  }

  li + li {
    margin-left: 2.5rem;
  }
`;

export const Hamburger = styled.div`
  max-width: 120px;
  width: 100%;
`;
