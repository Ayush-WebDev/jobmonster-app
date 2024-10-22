import styled from "styled-components";

const PopupWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  .popup-inner {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 450px;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: var(--white);
    margin: 0 auto;
    border-radius: 1rem;
    gap: 2rem;
    h2 {
      font-size: 1.6rem;
      line-height: 1.1em;
      text-align: center;
      text-transform: unset;
    }
    .btn-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .btn.cancel {
      background-color: var(--black);
      border-color: var(--black);
    }
  }
`;

export default PopupWrapper;
