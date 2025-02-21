import { Box, Flex, Image } from '@chakra-ui/react';

const AvatarCard = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight={{ base: '200px', sm: '280px' }}
      background={`url('/images/background.jpg')`}
      backgroundSize={{ base: 'cover', sm: 'cover' }}
      backgroundPosition="center"
      position="relative"
    >
      <Box
        bg="white"
        p={{ base: '4', md: '6' }}
        borderRadius={{ base: 'none', md: 'md' }}
        boxShadow={{ base: 'none', md: 'lg' }}
        zIndex="1"
        maxW={{ base: '90%', sm: '80%', md: '600px' }}
      >
        <Image
            src="/images/ceci_02.jpg"
            alt="Cecilia Garnica"
            borderRadius="full"
            boxShadow="md"
            w={{ base: '300px', sm: '350px' }} // Ancho
            h={{ base: 'auto', sm: 'auto' }} // Altura
            transform="translateY(-50%) translate(-50%, -50%)"
            position="absolute"
            top={{ base: '290px', sm: '360px' }}
            left="50%"
        />
      </Box>
    </Flex>
  );
};

export default AvatarCard;