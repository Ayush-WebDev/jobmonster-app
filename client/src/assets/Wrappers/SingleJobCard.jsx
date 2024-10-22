import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid var(--primary-500);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 1rem;
  box-shadow: var(--shadow-red);
  position: relative;
  overflow: hidden;
  .start-letter {
    border-radius: 1rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    background-color: var(--primary-500);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }
  .tag {
    background-color: black;
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
    position: absolute;
    right: 1rem;
    top: 1.2rem;
    color: white;
    text-transform: capitalize;
    font-size: 0.7rem;
  }
  .header-card {
    background: white;
    width: 100%;
    padding: 2.5rem 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: var(--primary-500);
  }
  .footer-card {
    padding: 3rem 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2.5rem 2rem;
    align-items: center;
    .row-details-job {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1rem;
      align-items: center;
    }

    span {
      font-size: 1rem;
      text-transform: capitalize;
      font-weight: 600;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    color: black;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 400;
    font-size: 1rem;
    color: var(--grey-600);
  }
  .float-box {
    padding: 1rem;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: white;
    border: 1px solid var(--primary-500);
    height: 150px;
    transform: translateX(100%);
    transition: transform 0.4s ease-out;
  }
  .footer-card:hover .float-box {
    transform: translateX(0%);
  }

  .icon-job {
    font-size: 1.2rem;
    color: var(--primary-500);
    cursor: pointer;
  }
`;

export default Wrapper;
