import styled from 'styled-components';

export const LoginPage = styled.section`
  background-color: var(--base-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* margin-bottom: -90px; */

  img {
    height: auto;
    width: 100vw;
  }
  @media (min-width: 1000px){
    img {
      display: none;
    }
  }
`;

export const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: -3.12rem;

  input {
    border: none;
    border-radius: var(--spacing-scale-1x);
    height: 40px;
    margin: var(--spacing-scale-2x);
    margin-top: 0;
    width: 17.5rem;
  }

  @media (min-width: 1000px){
    input {
      margin: var(--spacing-scale-2x);
    }
    }

  span {
    align-self: flex-start;
    color: white;
    font-family: bebas , sans-serif;
    font-size: 1.4rem;
    margin-left: 2.5rem;
  }

  button {
    align-self: flex-start;
    color: var(--base-color);
    border: none;
    border-radius: var(--spacing-scale-1x);
    font-family: bebas , sans-serif;
    font-size: 1.25rem;
    margin-left: 2.5rem;
    padding: var(--spacing-scale-2x) var(--spacing-scale-4x);
  }
`;
