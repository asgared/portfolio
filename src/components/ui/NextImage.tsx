import NextImageBase, { ImageProps as NextImageProps } from 'next/image'
import {
  chakra,
  forwardRef,
  type ChakraProps,
  type ComponentWithAs,
} from '@chakra-ui/react'

type NextChakraImageProps = NextImageProps & Omit<ChakraProps, 'fill'>

const ChakraNextImage = chakra(NextImageBase, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader',
      'fill',
      'sizes',
      'priority',
      'style',
      'onLoadingComplete',
    ].includes(prop),
}) as ComponentWithAs<'img', NextChakraImageProps>

export const NextImage = forwardRef<NextChakraImageProps, 'img'>((props, ref) => {
  return <ChakraNextImage ref={ref} {...props} />
})

export default NextImage
