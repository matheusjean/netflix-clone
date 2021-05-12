/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Logo, Avatar } from './styles';
import logo from '../../assets/logo.svg';
import perfil from '../../assets/perfil.jpg';

export default function NavBar() {
  const [showNav, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <Container showNav={showNav}>
      <Logo src={logo} />
      <Avatar src={perfil} />
    </Container>
  );
}
