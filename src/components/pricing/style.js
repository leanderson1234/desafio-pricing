import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 375px) {
    padding-bottom: 60px;
  }
`;

// export const ImageBack = styled.div`
//   @media (max-width: 375px) {
//     background: url(./images/bg-top.svg) no-repeat;
//     background-size: cover;
//     position: absolute;
//     height: 69vh;
//     width: 143px;
//     flex-direction: column;
//     right: 7px;
//     top: -31px;
//     position: absolute;
//     z-index: 1;
//   }
// `;
export const Prices = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 60px;
  @media (max-width: 375px) {
    padding-bottom: 0px;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`;

export const SwitchInfoRigth = styled.div`
  margin-right: 10px;
`;

export const SwitchInfoLeft = styled.div`
  margin-left: 10px;
`;

export const Checkbox = styled.input`
  width: 59px;
`;
export default Container;
