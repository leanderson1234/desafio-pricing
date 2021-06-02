import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* width: 50%; */
  /* position: relative; */

  @media (max-width: 375px) {
    padding-bottom: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

export default Container;
