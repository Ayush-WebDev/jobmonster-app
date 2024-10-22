import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    .small-sidebar {
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      padding: 0.8rem;
      background-color: rgba(0, 0, 0, 0.5);
      height: 100%;
      z-index: 9999;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      background-color: white;
      border-radius: 1.5rem;
      padding: 2rem;
      width: 100%;
      height: 100%;
    }
    .close-icon {
      width: 30px;
      height: 30px;
      color: var(--primary-500);
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
    .show-sidebar {
      display: flex;
    }
    .close-sidebar-small {
      display: none;
    }
  }
`;

export default Wrapper;
