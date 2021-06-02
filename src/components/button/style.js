import styled from 'styled-components';

export const Buttonstyle = styled.button`
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
  border-radius: 5px;
  color: ${(props) =>
    props.flat !== 'Professional'
      ? 'hsl(240, 78%, 98%)'
      : `${props.theme.Colors.Primary.LinearGradient.secondary}`};
  background: ${(props) =>
    props.flat !== 'Professional'
      ? `linear-gradient(45deg, ${props.theme.Colors.Primary.LinearGradient.primary}, ${props.theme.Colors.Primary.LinearGradient.secondary})`
      : '#fff'};

  &:hover {
    ${(props) =>
      props.flat === 'Professional'
        ? ` border: 1px white solid; color: white;`
        : ` border: 1px black solid;color: hsl(237, 63%, 64%);`};
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

// background: linear-gradient(45deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
export default Buttonstyle;
