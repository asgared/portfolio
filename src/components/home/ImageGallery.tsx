import { useState } from "react";
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

interface ImageGalleryProps {
  images: { thumbnail: string; url: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        {/* Carrusel con Swiper */}
        <Box 
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        maxW={{ base: "90%", md: "80%" }}
        m="auto"
        mb={{ base: 16, md: 16 }}
        marginTop={{ base: 4, md: 4 }}
        boxShadow="md"
        >
            <Swiper
                spaceBetween={10} // Espacio entre las imágenes
                slidesPerView={1} // En móvil, ver solo una imagen
                
                breakpoints={{
                768: {
                    slidesPerView: 3, // En desktop, ver tres imágenes
                },
                }}
                onSlideChange={() => console.log("slide changed")}
                
            >
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Box cursor="pointer" onClick={() => setSelectedImage(image.url)} position="relative">
                    <Image src={image.thumbnail} alt={`Image ${index + 1}`} borderRadius="md" boxShadow="md" />
                    </Box>
                </SwiperSlide>
                ))}
            </Swiper>
        </Box>

      {/* Modal para mostrar la imagen */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton color="white" />
          <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            {selectedImage && (
              <Image src={selectedImage} alt="Selected Image" maxHeight="90%" maxWidth="90%" objectFit="contain" />
            )}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageGallery;
