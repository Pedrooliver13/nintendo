import styled from 'styled-components';
import * as C from '../../styles/contants';

export const Wrapper = styled.section`
`;

export const Content = styled.div`
  padding: 8px 16px;
`;

export const Title = styled.h3`
  border-radius: 2px;
  border-left: 4px solid #fc5148; 
  padding: 4px 16px;
  margin-bottom: 1rem;

  color: ${C.NintendoBlack};
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const WrapperCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
