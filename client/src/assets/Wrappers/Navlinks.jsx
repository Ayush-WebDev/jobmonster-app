import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 2px solid #0000;
    color: var(--heading-color);
    gap: 1.2rem;
  }
  .link > h4 {
    font-size: 1rem;
  }
  .active {
    border: 2px solid var(--primary-500);
    background: var(--primary-500);
    border-radius: 5rem;
    color: var(--white);
  }
  .text {
    font-size: 1rem;
    font-weight: 500;
    color: var(--heading-color);
    margin: 0;
  }
  .icon {
    font-size: 1.5rem;
  }
`;

export default Wrapper;
