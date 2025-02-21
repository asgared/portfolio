import { useState, useRef } from "react";
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// No es necesario importar el CSS de Swiper si no usamos su paginación
// import "swiper/swiper-bundle.min.css";

interface ImageGalleryProps {
  images: { thumbnail: string; url: string }[];
  sectionName: string;
  numberItems: number;
  descriptionGallery: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, sectionName, descriptionGallery, numberItems }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Estado para el índice activo

  // Referencia a Swiper para poder controlar el carrusel
  const swiperRef = useRef<any>(null);

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index); // Actualiza el índice activo
    swiperRef.current.swiper.slideTo(index); // Cambia la imagen en el carrusel al índice seleccionado
  };

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
          <Text my={2} fontSize={{ base: 'md', md: 'lg' }} fontFamily={'boston-light'}>{descriptionGallery}</Text>
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
          ref={swiperRef} // Usamos la referencia a Swiper
          spaceBetween={10} // Espacio entre las imágenes
          slidesPerView={1} // En móvil, ver solo una imagen
          breakpoints={{
            768: {
              slidesPerView: 3, // En desktop, ver tres imágenes
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Actualizamos el índice activo
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box cursor="pointer" onClick={() => setSelectedImage(image.url)} position="relative">
                <Image src={image.thumbnail} alt={`Image ${index + 1}`} borderRadius="md" boxShadow="md" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Indicadores de paginación manual */}
        <Box textAlign="center" mb={4} mt={4}>
            {images.map((_, index) => (
            <Box 
                as="span" 
                key={index} 
                onClick={() => handlePaginationClick(index)} // Al hacer clic, cambia la imagen
                // display="inline-block" 
                width="10px" 
                height="10px" 
                borderRadius="full" 
                backgroundColor={activeIndex === index ? "white" : "gray.500"} 
                m="4px" 
                cursor="pointer"
                // Ocultamos los puntos en dispositivos de escritorio
                display={{ base: "inline-block", md: index > numberItems ? "none" : "inline-block" }}
            />
            ))}
        </Box>
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
