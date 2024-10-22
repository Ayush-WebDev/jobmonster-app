import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  .stats-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .charts-container {
    padding: 4rem 0;
  }
  @media (max-width: 1100px) {
    .stats-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .stats-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
