import styled from "styled-components";

const Wrapper = styled.div`
  .popup-menu {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: 1.25rem;
    padding: 2rem;
    width: 12rem;
    position: absolute;
    top: 3rem;
    right: 0;
    font-size: 1.1rem;
    color: var(--heading-color);
    box-shadow: 0 2px 5px 0 var(--primary-50);
    border: 1px solid var(--primary-500);
  }
  .link {
    display: flex;
    gap: 1rem;
  }
  .icon {
    font-size: 1.2rem;
  }
  .hide-menu {
    display: none;
  }
`;

export default Wrapper;
