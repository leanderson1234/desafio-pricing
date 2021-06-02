import styled from 'styled-components';

export const CardBodystyle = styled.div`
  background: ${(props) =>
    props.flat !== 'Professional'
      ? '#fff'
      : ` linear-gradient(180deg, ${props.theme.Colors.Primary.LinearGradient.primary},
      ${props.theme.Colors.Primary.LinearGradient.secondary})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 30px;
  color: ${(props) =>
    props.flat === 'Professional' ? '#fff' : `${props.theme.Colors.Neutral.GrayishBlue}`};
  ${(props) =>
    props.flat === 'Professional'
      ? `position:absolute;
        height: 400px;
        top: 208px;`
      : 'margin-right: 166px;margin-left: 166px;'};
  /* padding-left: 48px;
  padding-right: 48px; */
  width: 375px;
  @media (max-width: 375px) {
    width: 90%;
    ${({ flat }) =>
      flat === 'Professional'
        ? `position:inherit ;height: 400px;top: 208px;`
        : 'margin-right: 153px;margin-left: 153px;'};
  }
`;
export default CardBodystyle;
