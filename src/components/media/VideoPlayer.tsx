import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'

export type VideoPlayerProps = {
  url: string
  playing?: boolean
  controls?: boolean
}

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => null,
})

export default function VideoPlayer({
  url,
  playing = true,
  controls = true,
}: VideoPlayerProps) {
  if (!url) {
    return null
  }

  return (
    <Box w="full" h="full" overflow="hidden" rounded="2xl" position="relative">
      <ReactPlayer url={url} width="100%" height="100%" playing={playing} controls={controls} />
    </Box>
  )
}
