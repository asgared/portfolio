import NextImageBase, { ImageProps as NextImageProps } from 'next/image'
import { chakra, forwardRef } from '@chakra-ui/react'

type NextChakraImageProps = NextImageProps & {
  rounded?: string
}

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
})

export const NextImage = forwardRef<NextChakraImageProps, 'img'>((props, ref) => {
  return <ChakraNextImage ref={ref} {...props} />
})

export default NextImage
