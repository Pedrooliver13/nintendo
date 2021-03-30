import styled from "styled-components";

import * as C from "../../styles/contants";

export const Wrapper = styled.section`
  max-width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${C.NintentdoGray};
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 500px;
  padding: 32px 16px;
  
  z-index: 1;
`;

export const TextBlock = styled.div`
  padding: 1rem;
  line-height: 1.5;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${C.NintendoBlack};
`;

export const Description = styled.p`
  font-size: 1.3rem;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  background-color: #fc5148;
  box-shadow: 4px 4px 0px 0px ${C.NintendoBlack};
  color: ${C.NintentdoWhite};

  width: 150px;
  height: 50px;

  cursor: pointer;

  font-weight: 600;
  font-size: 1rem;

  margin-top: 60px;
  padding: 12px 24px;
  border-radius: 5px; 

  transition: all ease 0.5s;

  :hover {
    transform: translateX(5%);
  }
`

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  width: 600px;

  top: -100px;
  right: -85px;

  z-index: 99;
`;
