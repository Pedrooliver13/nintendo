import * as Styled from './styles';

const Card = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={props.src} alt="Imagem da capa do GAME" />

      <Styled.TextBlock>
        <Styled.Title color={props.color}>{props.title}</Styled.Title>
        <Styled.Price>${props.price}</Styled.Price>
      </Styled.TextBlock>
    </Styled.Wrapper>
  )
}

export default Card
