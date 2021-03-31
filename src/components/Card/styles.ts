import styled from "styled-components";
import * as C from "../../styles/contants";

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 180px;

  border-radius: 15px;
  object-fit: cover;
  overflow: hidden;
`;

export const TextBlock = styled.div`
  line-height: 1.5;
`;

export const Title = styled.h3`
  font-weight: 600;
  color: ${({ color }) =>
    color === "pink" ? C.NintendoPink : C.NintendoGreen};
`;

export const Price = styled.p`
  font-weight: 600;
`;
