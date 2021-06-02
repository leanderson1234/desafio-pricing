import styled from 'styled-components';

export const Containerstyle = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 375px) {
    flex-direction: column;
    z-index: 2;
    position: relative;
  }
`;
export default Containerstyle;
