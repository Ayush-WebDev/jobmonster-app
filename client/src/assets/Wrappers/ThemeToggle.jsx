import styled from "styled-components";

export const Wrapper = styled.div`
  .theme-toggle {
    width: 1.2rem;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin-right: 1rem;
    cursor: pointer;
  }
  .icon {
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    .theme-toggle {
      margin-right: 0rem;
    }
  }
`;
