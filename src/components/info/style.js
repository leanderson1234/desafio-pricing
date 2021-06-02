import styled from 'styled-components';

export const Infostyle = styled.span`
  /* @media (max-width: 375px) { */
  font-size: 15px;
  color: ${(props) =>
    props.flat !== 'Professional'
      ? `${props.theme.Colors.Neutral.GrayishBlue}`
      : `${props.theme.Colors.Neutral.VeryLightGrayishBlue}`};

  /* } */
`;
export default Infostyle;
