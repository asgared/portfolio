import { Box, Text } from '@chakra-ui/react';
import { SocialMedia } from "@/components/home";

const TextCard = ({ title, subtitle, text, invite }: { title: string, subtitle: string, text: string, invite: string }) => {
  return (
    <Box
      id='textCard' // Identificador para verificar superposición
      bg="rgba(255, 255, 255, 0.2)" // Fondo blanco con opacidad
      p={{ base: 4, md: 6 }} // Padding responsivo
      borderRadius="md" // Bordes redondeados
      maxW={{ base: '90%', md: '80%' }} // Ancho máximo adaptativo
      m="auto" // Centrar en pantallas grandes
      mb={{ base: 8, md: 8 }} // Margen inferior responsivo
      marginTop={{ base: 28, md: 28 }} // Margen superior responsivo
      boxShadow="md" // Sombra
      color="white" // Color de texto blanco
    >
      <Text fontSize={{ base: '2xl', md: '3xl' }} fontFamily={'boston-semibold'} mb={2}>{title}</Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }} fontFamily={'boston-semibold'} mb={4}>{subtitle}</Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily={'boston-light'}>{text}</Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily={'boston-semibold'} mt={4}>{invite}</Text>
      <SocialMedia />
    </Box>
  );
};

export default TextCard;