import { useState } from "react";
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";

// Definir Props para los videos
interface VideoGalleryProps {
  videos: { thumbnail: string; url: string }[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* Grid de miniaturas de videos */}
      <Grid 
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={4} mt={4}
      p={{ base: 4, md: 6 }} // Padding responsivo
      borderRadius="md" // Bordes redondeados
      maxW={{ base: '90%', md: '800px' }} // Ancho máximo adaptativo
      m="auto" // Centrar en pantallas grandes
      mb={{ base: 16, md: 16 }} // Margen inferior responsivo
      marginTop={{ base: 16, md: 16 }} // Margen superior responsivo
      boxShadow="md" // Sombra
      color="white" // Color de texto blanco
      >
      {/* <h1 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>Galería de Videos</h1> */}
        {videos.map((video, index) => (
          <Box key={index} cursor="pointer" onClick={() => setSelectedVideo(video.url)} position="relative">
            <Image src={video.thumbnail} alt={`Video ${index + 1}`} borderRadius="md" boxShadow="md" />
          </Box>
        ))}
      </Grid>

      {/* Modal para ver el video en pantalla completa */}
      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} size="full">
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

export default VideoGallery;
