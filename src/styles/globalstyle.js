import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0;
  font-family: 'Montserrat', sans-serif;
}
body {
 font-size: ${(props) => props.theme.Typography.Fontsize.Default};
 background: ${(props) => props.theme.Colors.Neutral.VeryLightGrayishBlue};
}

`;

export default GlobalStyle;
