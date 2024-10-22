import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding-top: 5rem;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    grid-column: 1 / 3;
  }
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .btn.inactive {
    background-color: white;
    border: 1px solid var(--primary-500);
    color: var(--primary-500);
  }
  btn.active {
    background-color: var(--primary-500);
    border: 1px solid var(--primary-500);
    color: white;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    .btn-wrapper {
      grid-column: 1/3;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
