import { useState } from "react";
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";

// Definir Props para los videos
interface VideoGalleryProps {
  videos: { thumbnail: string; url: string }[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* Título centrado */}
      <Text 
        as="h2" 
        textAlign="center" 
        color="white" 
        fontSize={{ base: "2xl", md: "4xl" }}
        font-family={'boston-semibold'}
        mt={4} 
        mb={4}
      >
        Video
      </Text>

      {/* Grid de miniaturas de videos */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        maxW={{ base: "90%", md: "80%" }}
        m="auto"
        mb={{ base: 16, md: 16 }}
        marginTop={{ base: 4, md: 4 }}
        boxShadow="md"
        color="white"
      >
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
