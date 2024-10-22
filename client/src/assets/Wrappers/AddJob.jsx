import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 3rem;
  background-color: var(--background-color);
  border: 1px solid var(--primary-500);
  box-shadow: var(--shadow-red);
  border-radius: 3rem;
  .form-add-job {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-end;
    gap: 1rem;
  }
  @media (max-width: 1200px) {
    .form-add-job {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-end;
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    .form-add-job {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: flex-end;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
