import styled from 'styled-components';

export const BgTopstyle = styled.div`
  background: url('images/bg-top.svg') no-repeat;
  width: 374px;
  height: 658px;
  position: absolute;
  right: 0px;
  top: 0;
  z-index: -1;
  @media (max-width: 375px) {
    width: 183px;
    top: -30px;
  }
`;
export default BgTopstyle;
