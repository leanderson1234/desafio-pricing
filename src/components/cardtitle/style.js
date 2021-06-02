import styled from 'styled-components';

export const CardTitlestyle = styled.h1`
  font-size: 4rem;
  color: ${(props) =>
    props.flat === 'Professional' ? '#fff' : `${props.theme.Colors.Neutral.GrayishBlue}`};
`;
export default CardTitlestyle;
