import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

export const FileInput = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 100px;
  height: 100%;
  padding: 1rem;
  position: relative;
  text-align: center;
  border: 2px solid var(--main);
  border-radius: 16px;
  color: var(--main);
  font-weight: 500;

  cursor: pointer;

  transition: all .2s ease-in;

  &:hover{
    background-color: var(--main);
    color: var(--white);
  }

  input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    cursor: pointer;
  }
`;

export const FileName = styled.div`
  font-size: 1.2rem;
  margin-left: 1.2rem;
`