import { useMemo, useState } from 'react'
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VisuallyHidden,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { TriangleRightIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { CATEGORIES, ReelCategory, ReelItem } from './data'
import { NextImage } from '../ui/NextImage'
import VideoPlayer from '../media/VideoPlayer'
import PlaceholderThumb from '../media/PlaceholderThumb'

type CategoryReelsProps = {
  categories?: ReelCategory[]
}

const gradientAlpha = (color: string) => `${color}CC`

const CategoryChip = ({
  category,
  onSelect,
  isActive,
}: {
  category: ReelCategory
  onSelect: (category: ReelCategory) => void
  isActive: boolean
}) => {
  const gradient = `linear(to-r, ${gradientAlpha(category.colorFrom)}, ${gradientAlpha(category.colorTo)})`

  return (
    <Box
      as="button"
      type="button"
      role="button"
      onClick={() => onSelect(category)}
      aria-label={`Abrir categoría ${category.name} (${category.items.length} videos)`}
      aria-pressed={isActive}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      px={6}
      py={5}
      minW={{ base: '220px', md: 'auto' }}
      textAlign="left"
      rounded="2xl"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      bgGradient={gradient}
      bgClip="padding-box"
      backdropFilter="blur(8px)"
      boxShadow="0 12px 30px rgba(15, 23, 42, 0.25)"
      transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
      _hover={{ transform: 'translateY(-4px) scale(1.01)', boxShadow: '0 16px 36px rgba(15, 23, 42, 0.3)' }}
      _focusVisible={{ outline: 'none', boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.4)', borderColor: 'whiteAlpha.500' }}
      color="whiteAlpha.900"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" inset={0} bg="blackAlpha.300" opacity={0.35} pointerEvents="none" />
      <Stack spacing={1} position="relative">
        {category.description && (
          <Text fontSize="sm" textTransform="uppercase" letterSpacing="wider" color="whiteAlpha.700">
            {category.description}
          </Text>
        )}
        <Heading as="h3" fontSize="xl" fontFamily="var(--font-boston, inherit)" lineHeight="1.2">
          {category.name}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.800">
          {category.items.length} {category.items.length === 1 ? 'video' : 'videos'}
        </Text>
      </Stack>
    </Box>
  )
}

export const CategoryReels = ({ categories }: CategoryReelsProps) => {
  const availableCategories = useMemo(() => categories ?? CATEGORIES, [categories])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCategory, setSelectedCategory] = useState<ReelCategory | null>(null)
  const [playingItemId, setPlayingItemId] = useState<string | null>(null)
  const isMobile = useBreakpointValue({ base: true, md: false })
  const modalSize = useBreakpointValue({ base: 'full', lg: '5xl' })
  const slides = selectedCategory?.items
  const hasValidSlides = Array.isArray(slides)

  if (selectedCategory && !hasValidSlides) {
    console.error('CategoryReels: invalid slides provided', slides)
  }

  const handleSelectCategory = (category: ReelCategory) => {
    setSelectedCategory(category)
    setPlayingItemId(null)
    onOpen()
  }

  const handleClose = () => {
    setPlayingItemId(null)
    onClose()
  }

  return (
    <Box as="section" py={{ base: 12, md: 20 }} position="relative">
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial( circle at top right, rgba(99, 102, 241, 0.2), transparent 55% )"
        pointerEvents="none"
      />
      <Stack spacing={6} position="relative">
        <Stack spacing={3} maxW="3xl">
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white" fontFamily="var(--font-boston, inherit)">
            Featured Reels
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.800">
            Explora nuestras categorías destacadas y descubre colecciones de videos curados para tu próxima campaña.
          </Text>
        </Stack>

        <Box display={{ base: 'block', md: 'none' }} overflowX="auto" pb={2} css={{ scrollbarWidth: 'thin' }}>
          <HStack spacing={4} align="stretch" minW="max-content">
            {availableCategories.map((category) => (
              <CategoryChip
                key={category.id}
                category={category}
                onSelect={handleSelectCategory}
                isActive={isOpen && selectedCategory?.id === category.id}
              />
            ))}
          </HStack>
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Stack spacing={6}>
            <Box
              display="grid"
              gridTemplateColumns={{ md: 'repeat(3, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }}
              gap={6}
            >
              {availableCategories.map((category) => (
                <CategoryChip
                  key={category.id}
                  category={category}
                  onSelect={handleSelectCategory}
                  isActive={isOpen && selectedCategory?.id === category.id}
                />
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered={!isMobile} size={modalSize} motionPreset="scale">
        <ModalOverlay backdropFilter="blur(12px)" bg="blackAlpha.700" />
        <ModalContent
          bg="gray.900"
          color="white"
          rounded={{ base: 'none', md: '2xl' }}
          minH={{ base: '100vh', md: 'auto' }}
          maxH={{ base: '100vh', md: '90vh' }}
          overflow="hidden"
        >
          <ModalHeader borderBottomWidth={{ base: '0', md: '1px' }} borderColor="whiteAlpha.200">
            <Stack spacing={1}>
              <Text fontSize="sm" textTransform="uppercase" color="whiteAlpha.600">
                Reel category
              </Text>
              <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="var(--font-boston, inherit)">
                {selectedCategory?.name}
              </Heading>
            </Stack>
          </ModalHeader>
          <ModalCloseButton top={{ base: 4, md: 6 }} right={{ base: 4, md: 6 }} size="lg" />
          <ModalBody px={{ base: 0, md: 10 }} py={{ base: 6, md: 10 }}>
            {selectedCategory && hasValidSlides && (
              <Stack spacing={6} h="full">
                <VisuallyHidden as="h4">{`Carrusel de videos para ${selectedCategory.name}`}</VisuallyHidden>
                <Swiper
                  modules={[Navigation, Pagination, Keyboard]}
                  navigation
                  pagination={{ clickable: true }}
                  keyboard={{ enabled: true }}
                  spaceBetween={16}
                  slidesPerView={1}
                  style={{ paddingBottom: '2rem' }}
                  aria-label={`Carrusel de la categoría ${selectedCategory.name}`}
                >
                  {slides?.map((item) => {
                    const isPlaying = playingItemId === item.id
                    return (
                      <SwiperSlide key={item.id}>
                        <Stack spacing={4} h="full">
                          <AspectRatio ratio={16 / 9} w="full">
                            <Box position="relative" rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="whiteAlpha.200">
                              {isPlaying ? (
                                <VideoPlayer url={item.videoUrl} />
                              ) : item.thumb ? (
                                <>
                                  <NextImage
                                    src={item.thumb}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 992px) 800px, (min-width: 768px) 640px, 100vw"
                                    style={{ objectFit: 'cover' }}
                                  />
                                  <Flex
                                    position="absolute"
                                    inset={0}
                                    align="center"
                                    justify="center"
                                    bgGradient="linear(to-t, blackAlpha.700, transparent 60%)"
                                  >
                                    <Button
                                      leftIcon={<TriangleRightIcon />}
                                      colorScheme="purple"
                                      size="lg"
                                      onClick={() => setPlayingItemId(item.id)}
                                      aria-label={`Reproducir ${item.title}`}
                                      px={8}
                                      rounded="full"
                                    >
                                      Play
                                    </Button>
                                  </Flex>
                                </>
                              ) : (
                                <PlaceholderThumb
                                  title={item.title}
                                  duration={item.duration}
                                  onClick={() => setPlayingItemId(item.id)}
                                  withAspectRatio={false}
                                />
                              )}
                            </Box>
                          </AspectRatio>
                          <Stack spacing={1} px={{ base: 6, md: 2 }} pb={{ base: 4, md: 0 }}>
                            <Heading as="h5" fontSize="xl" fontFamily="var(--font-boston, inherit)">
                              {item.title}
                            </Heading>
                            {item.duration && (
                              <Text fontSize="sm" color="whiteAlpha.700">
                                {item.duration}
                              </Text>
                            )}
                          </Stack>
                        </Stack>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default CategoryReels
