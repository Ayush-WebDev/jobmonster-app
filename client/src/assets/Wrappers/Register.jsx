import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  overflow: hidden;
  display: grid;
  align-items: center;
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    height: 100%;
    max-width: none;
    width: 100%;
  }
  .form-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  .logo-wrapper {
    max-width: 15rem;
    margin: 1rem 0 4rem 0;
  }
  .col.col-left {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
    padding: 2rem;
    justify-content: flex-start;
    align-items: top;
  }
  .col img {
    width: 100%;
    object-fit: contain;
    height: 50%;
  }
  .col.col-right {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    background-color: var(--primary-500);
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: var(--border-radius);
    gap: 1rem;
    border-top: 5px solid var(--primary-500);
  }
  .form-field-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: left;
    align-items: top;
  }
  .form-field-container.row-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  @media (max-width: 1100px) {
    .form-field-container.row-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Wrapper;
