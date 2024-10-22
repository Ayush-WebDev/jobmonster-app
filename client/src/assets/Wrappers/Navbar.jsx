import styled from "styled-components";

const Wrapper = styled.div`
  height: var(--nav-height);
  display: flex;
  z-index: 1000;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    padding: 2rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    gap: 0.5rem;
    text-transform: capitalize;
    color: var(--heading-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
    margin-bottom: -3rem;
  }

  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .nav-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
  .img-user {
    width: 40px;
    height: 40px;
  }
  .wrap-popup-menu {
    position: relative;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 95%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
  @media (max-width: 768px) {
    .nav-center {
      padding: 0.8rem;
      width: 100%;
    }
    .nav-buttons {
      gap: 0.5rem;
    }
    .toggle-btn {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
