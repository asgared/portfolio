import { useState } from "react";
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Text } from "@chakra-ui/react";

interface VideoSectionProps {
  videoUrl: string; // URL del video de Vimeo
  sectionName: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, sectionName }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <Text 
        as="h2" 
        textAlign="center" 
        color="white" 
        fontSize={{ base: "2xl", md: "4xl" }}
        fontFamily={'boston-semibold'}
        mt={4} 
        mb={4}
      >
        {sectionName}
      </Text>

      {/* Caja para mostrar el video */}
      <Box 
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        maxW={{ base: "90%", md: "80%" }}
        m="auto"
        mb={{ base: 16, md: 16 }}
        marginTop={{ base: 4, md: 4 }}
        boxShadow="md"
      >
        <Box 
          cursor="pointer" 
          onClick={() => setSelectedVideo(videoUrl)} 
          position="relative"
          borderRadius="md"
          boxShadow="md"
        >
          {/* Reemplaza el video de Vimeo con el iframe */}
          <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1058819206?h=02c8d401c4&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="SUMMER TO THE FULLEST IG ST"
            ></iframe>
          </div>
        </Box>
      </Box>

      {/* Modal para mostrar el video en tamaño completo */}
      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton color="white" />
          <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                width="90%"
                height="90%"
              ></iframe>
            )}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoSection;
