import styled from 'styled-components';

export const Container = styled.div`
  background-color: #111;
  color: white;
  padding-left: 20px;
`;

export const Row = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  margin-left: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  > img {
    object-fit: contain;
    width: 100%;
    max-height: 200px;
    margin-right: 10px;
    transition: transform 450ms;

    :hover {
      transform: scale(1.08);
    }
  }
`;
