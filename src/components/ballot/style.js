import styled from 'styled-components';

export const Ballotstyle = styled.span`
  font-size: 2rem;
  color: ${(props) =>
    props.flat === 'Professional' ? '#fff' : `${props.theme.Colors.Neutral.GrayishBlue}`};
`;
export default Ballotstyle;
