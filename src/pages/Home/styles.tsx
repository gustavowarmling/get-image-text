import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1320px;
  max-height: 600px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 100%;
  width: 100%;
  margin-top: 5rem;

  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  max-width: 36rem;
  width: 100%;

  @media(max-width: 1000px) {
    display: none;
  }
`;

export const ActionsWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;

  textarea {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 500px;
    resize: none;
    padding: 1rem;
    margin-top: 1rem;

    &:disabled {
      background-color: var(--white);
    }
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 500px;
`;