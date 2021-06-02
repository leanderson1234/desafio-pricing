import styled from 'styled-components';

export const CardHeaderstyle = styled.span`
  margin-top: 30px;
  margin-bottom: 20px;
  /* color: ${(props) =>
    props.bgColor === 'Default'
      ? `${props.theme.Colors.Neutral.GrayishBlue}`
      : `${props.theme.Colors.Neutral.VeryLightGrayishBlue}`}; */
  color: ${(props) =>
    props.flat === 'Professional' ? '#fff' : `${props.theme.Colors.Neutral.GrayishBlue}`};
`;
export default CardHeaderstyle;
