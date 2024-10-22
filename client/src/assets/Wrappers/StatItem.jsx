import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.2rem;
  padding: 2rem;
  border-color: ${(prop) => {
    return prop.color;
  }};
  border-width: 0 0 5px 0;
  border-style: solid;
  background-color: var(--white);
  border-radius: 1rem;
  .wrapper-stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .stat-num {
    font-size: 2.2rem;
    color: ${(prop) => {
      return prop.color;
    }};
  }
  .stat-title {
    font-size: 1.6rem;
    margin-top: 2rem;
    color: ${(prop) => {
      return prop.color;
    }};
  }
  .stat-icon {
    font-size: 1.8rem;
    color: var(--white);
    background-color: ${(prop) => prop.bcg};
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
  }
`;

export default Wrapper;
