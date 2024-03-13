import React, { useState, useEffect } from 'react';
import { Box, Container, Link } from '@chakra-ui/react';

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(true);

  const checkFooterPosition = () => {
    // Calcula si el contenido de la página es más largo que la ventana visible
    const isContentLongerThanViewport = document.body.offsetHeight > window.innerHeight;
    // Verifica si el usuario ha hecho scroll hasta el final de la página
    const isScrolledToBottom = window.scrollY + window.innerHeight >= document.body.offsetHeight;

    setIsAtBottom(!isContentLongerThanViewport || isScrolledToBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkFooterPosition);
    window.addEventListener('resize', checkFooterPosition);

    // Verificar la posición inicial al cargar
    checkFooterPosition();

    return () => {
      window.removeEventListener('scroll', checkFooterPosition);
      window.removeEventListener('resize', checkFooterPosition);
    };
  }, []);

  const handleClick = (eventCategory: string, eventAction: string) => {
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'author',
        event_category: eventCategory,
        event_action: eventAction,
      });
    }
  };

  return (
    <Box
      as="footer"
      width="full"
      position={isAtBottom ? "fixed" : "relative"} // Cambia la posición basado en isAtBottom
      bottom="0"
      py="2"
      bg="rgba(255, 255, 255, 0.1)"
    >
      <Container maxWidth="container.xl" centerContent>
        <Box textAlign="center" fontSize="xs" fontFamily="boston-light" textColor={'#ffffff80'}>
          Created by{' '}
          <Link
            href="https://www.instagram.com/asgaredmc/"
            isExternal
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            onClick={() => handleClick('Instagram', 'Click')}
          >
            Alejandro Mendiola
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;