import {
  AspectRatio,
  Box,
  Button,
  Icon,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
// FIX: Chakra UI no expone TriangleRightIcon; usamos el ícono FaPlay para evitar renders undefined.
import { FaPlay } from 'react-icons/fa'

export type PlaceholderThumbProps = {
  title: string
  duration?: string
  onClick?: () => void
  buttonLabel?: string
  withAspectRatio?: boolean
}

const gradient = 'linear(to-br, purple.500, pink.500)'

export default function PlaceholderThumb({
  title,
  duration,
  onClick,
  buttonLabel = `Reproducir ${title}`,
  withAspectRatio = true,
}: PlaceholderThumbProps) {
  const content = (
    <Box position="relative" rounded="2xl" overflow="hidden" role="group" w="full" h="full">
      <Box position="absolute" inset={0} bgGradient={gradient} />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.700, transparent 70%)"
        opacity={{ base: 0.85, md: 0.9 }}
      />
      <Flex
        position="relative"
        direction="column"
        justify="center"
        align="center"
        w="full"
        h="full"
        gap={4}
        color="whiteAlpha.900"
        textAlign="center"
        px={6}
      >
        <Button
          // FIX: sustituimos el ícono inexistente por uno válido de react-icons.
          leftIcon={<Icon as={FaPlay} />}
          colorScheme="purple"
          size="lg"
          onClick={onClick}
          aria-label={buttonLabel}
          rounded="full"
          px={8}
          _groupHover={{ transform: 'scale(1.04)' }}
        >
          Play
          <VisuallyHidden>{` ${title}`}</VisuallyHidden>
        </Button>
        <Stack spacing={1} align="center">
          {/* FIX: icono visible usando FaPlay para el estado de placeholder. */}
          <Icon as={FaPlay} boxSize={8} />
          <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          {duration && (
            <Text fontSize="sm" color="whiteAlpha.800">
              {duration}
            </Text>
          )}
        </Stack>
      </Flex>
      {duration && (
        <Text
          position="absolute"
          bottom={4}
          right={4}
          fontSize="xs"
          fontWeight="medium"
          color="whiteAlpha.900"
          letterSpacing="wider"
        >
          {duration}
        </Text>
      )}
    </Box>
  )

  if (!withAspectRatio) {
    return content
  }

  return (
    <AspectRatio ratio={16 / 9} w="full">
      {content}
    </AspectRatio>
  )
}
