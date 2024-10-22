import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  .btns-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }
  .btn {
    background-color: var(--white);
    color: var(--primary-500);
  }
  .btn.active {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .page-btn.dots {
    font-size: 1.5rem;
    color: var(--primary-500);
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Wrapper;
