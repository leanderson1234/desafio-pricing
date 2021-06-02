import styled from 'styled-components';

export const BgTopstyle = styled.div`
  background: url('images/bg-bottom.svg') no-repeat;
  width: 374px;
  height: 300px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  @media (max-width: 375px) {
    display: none;
  }
`;
export default BgTopstyle;
