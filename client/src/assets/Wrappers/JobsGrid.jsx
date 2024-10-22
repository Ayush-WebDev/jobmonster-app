import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 2rem;
  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Wrapper;
