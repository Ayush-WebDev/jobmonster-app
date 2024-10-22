import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 0 5rem;
  .form-filter {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-end;
    gap: 1rem;
  }
  @media (max-width: 1200px) {
    .form-filter {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-end;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    .form-filter {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: flex-end;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
