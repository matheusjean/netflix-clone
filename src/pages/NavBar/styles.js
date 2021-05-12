import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #111; */
  background: ${({ showNav }) => (showNav ? '#111' : 'transparent')};
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 1;

  /*Animations*/
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const Logo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;

export const Avatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
