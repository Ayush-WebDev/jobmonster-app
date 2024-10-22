import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  .dash-nav-wrapper {
    width: 100%;
  }
  .main-content-wrapper {
    padding: 5rem;
  }
  @media (max-width: 1100px) {
    .main-content-wrapper {
      padding: 3rem;
    }
  }
  @media (max-width: 1100px) {
    .main-content-wrapper {
      padding: 1.5rem;
    }
  }
`;

export default Wrapper;
