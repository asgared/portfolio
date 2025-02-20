import { useState } from "react";
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";

interface ImageGalleryProps {
  images: { thumbnail: string; url: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedVideo, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Text 
        as="h2" 
        textAlign="center" 
        color="white" 
        fontSize={{ base: "2xl", md: "4xl" }}
        font-family={'boston-semibold'}
        mt={4} 
        mb={4}
      >
        Out of Home 
      </Text>
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        maxW={{ base: "90%", md: "800px" }}
        m="auto"
        mb={{ base: 16, md: 16 }}
        marginTop={{ base: 4, md: 4 }}
        boxShadow="md"
        color="white"
      >
        {images.map((image, index) => (
          <Box key={index} cursor="pointer" onClick={() => setSelectedImage(image.url)} position="relative">
            <Image src={image.thumbnail} alt={`Video ${index + 1}`} borderRadius="md" boxShadow="md" />
          </Box>
        ))}
      </Grid>

      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedImage(null)} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton color="white" />
          <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            {selectedVideo && (
              <ReactPlayer url={selectedVideo} playing controls width="90%" height="90%" />
            )}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageGallery;
