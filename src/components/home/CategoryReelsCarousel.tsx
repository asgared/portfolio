'use client'

import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { TriangleRightIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { NextImage } from '../ui/NextImage'
import { VideoPlayer } from '../media/VideoPlayer'
import { ReelCategory, ReelItem } from './data'

type CategoryReelsCarouselProps = {
  category: ReelCategory
  playingItemId: string | null
  onPlayClick: (itemId: string) => void
}

const PlaceholderThumb = ({ item, category }: { item: ReelItem; category: ReelCategory }) => (
  <Flex
    align="center"
    justify="center"
    direction="column"
    w="full"
    h="full"
    bgGradient={`linear(to-br, ${category.colorFrom}, ${category.colorTo})`}
    color="whiteAlpha.900"
    position="relative"
    rounded="2xl"
    overflow="hidden"
  >
    <Box position="absolute" inset={0} bg="blackAlpha.400" backdropFilter="blur(4px)" />
    <Stack spacing={2} align="center" position="relative">
      <TriangleRightIcon boxSize={10} />
      <Text fontSize="lg" fontWeight="semibold" textAlign="center">
        {item.title}
      </Text>
      {item.duration && (
        <Text fontSize="sm" color="whiteAlpha.800">
          {item.duration}
        </Text>
      )}
    </Stack>
    {item.duration && (
      <Text position="absolute" bottom={4} right={4} fontSize="xs" fontWeight="medium" color="whiteAlpha.900">
        {item.duration}
      </Text>
    )}
  </Flex>
)

export const CategoryReelsCarousel = ({ category, playingItemId, onPlayClick }: CategoryReelsCarouselProps) => (
  <Swiper
    modules={[Navigation, Pagination, Keyboard, A11y, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    keyboard={{ enabled: true }}
    spaceBetween={16}
    slidesPerView={1}
    style={{ paddingBottom: '2rem' }}
    aria-label={`Carrusel de la categoría ${category.name}`}
  >
    {category.items.map((item) => {
      const isPlaying = playingItemId === item.id
      return (
        <SwiperSlide key={item.id}>
          <Stack spacing={4} h="full">
            <AspectRatio ratio={16 / 9} w="full">
              <Box position="relative" rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="whiteAlpha.200">
                {isPlaying ? (
                  <VideoPlayer url={item.videoUrl} />
                ) : (
                  <>
                    {item.thumb ? (
                      <NextImage
                        src={item.thumb}
                        alt={item.title}
                        fill
                        sizes="(min-width: 992px) 800px, (min-width: 768px) 640px, 100vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <PlaceholderThumb item={item} category={category} />
                    )}
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
                        onClick={() => onPlayClick(item.id)}
                        aria-label={`Reproducir ${item.title}`}
                        px={8}
                        rounded="full"
                      >
                        Play
                      </Button>
                    </Flex>
                  </>
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
)

export default CategoryReelsCarousel
