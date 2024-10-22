import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 980px) {
    display: block;
    .sidebar-container {
      height: 100vh;
      position: sticky;
      top: 0;
      z-index: 110000;
      padding: 2rem;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
      width: 250px;
      justify-content: center;
      align-items: flex-start;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
      background: var(--background-secondary-color);
      transition: margin-left 0.3s ease-in-out;
    }
    .nav-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .hide-sidebar {
      margin-left: -300px;
    }
    .logo-wrapper {
      padding: 0 0 3rem;
    }
  }
`;
export default Wrapper;
