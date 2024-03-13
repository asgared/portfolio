import { Box, Text } from '@chakra-ui/react';
import { SocialMedia } from "@/components/home"

const TextCard = ({ title, subtitle, text, invite }: { title: string, subtitle: string, text: string, invite: string }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.2)" // Fondo blanco con opacidad
      p={{ base: 4, md: 6 }} // Padding responsivo
      borderRadius="md" // Bordes redondeados
      maxW={{ base: '90%', md: '800px' }} // Ancho máximo adaptativo
      m="auto" // Centrar en pantallas grandes
      marginTop={{ base: 28, md: 28 }} // Margen superior responsivo
      boxShadow="md" // Sombra
      color="white" // Color de texto blanco
    >
      <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={2}>{title}</Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="bold" mb={4}>{subtitle}</Text>
      <Text fontSize={{ base: 'md', md: 'lg' }}>{text}</Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mt={2}>{invite}</Text>
      <SocialMedia />
    </Box>
  );
};

export default TextCard;