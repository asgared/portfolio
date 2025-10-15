export type ReelItem = {
  id: string
  title: string
  videoUrl: string
  duration?: string
  thumb?: string
}

export type ReelCategory = {
  id: string
  name: string
  description?: string
  colorFrom: string
  colorTo: string
  items: ReelItem[]
}

export const CATEGORIES: ReelCategory[] = [
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    description: 'Everyday stories that inspire and uplift.',
    colorFrom: '#38bdf8',
    colorTo: '#a855f7',
    items: [
      {
        id: 'lifestyle-1',
        title: 'Morning Rituals',
        videoUrl: 'https://www.youtube.com/watch?v=IUN664s7N-c',
        duration: '02:45',
      },
      {
        id: 'lifestyle-2',
        title: 'City Rhythms',
        videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
        duration: '03:12',
      },
      {
        id: 'lifestyle-3',
        title: 'Creative Spaces',
        videoUrl: 'https://vimeo.com/1084537',
        duration: '01:58',
      },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Destinations around the globe.',
    colorFrom: '#0ea5e9',
    colorTo: '#22d3ee',
    items: [
      {
        id: 'travel-1',
        title: 'Coastal Escape',
        videoUrl: 'https://www.youtube.com/watch?v=Scxs7L0vhZ4',
        duration: '01:30',
      },
      {
        id: 'travel-2',
        title: 'Mountain Sunrise',
        videoUrl: 'https://vimeo.com/76979871',
        duration: '02:05',
      },
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Performance and elegance on wheels.',
    colorFrom: '#f97316',
    colorTo: '#ef4444',
    items: [
      {
        id: 'automotive-1',
        title: 'Precision Engineering',
        videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
        duration: '04:22',
      },
      {
        id: 'automotive-2',
        title: 'Night Drive',
        videoUrl: 'https://vimeo.com/65107797',
        duration: '02:47',
      },
      {
        id: 'automotive-3',
        title: 'Track Day',
        videoUrl: 'https://www.youtube.com/watch?v=whwe0KD_rGw',
        duration: '03:01',
      },
      {
        id: 'automotive-4',
        title: 'Electric Pulse',
        videoUrl: 'https://vimeo.com/22439234',
        duration: '01:44',
      },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Glow, color, and confident expressions.',
    colorFrom: '#ec4899',
    colorTo: '#f472b6',
    items: [
      {
        id: 'beauty-1',
        title: 'Fresh Palette',
        videoUrl: 'https://www.youtube.com/watch?v=pXRviuL6vMY',
        duration: '02:10',
      },
      {
        id: 'beauty-2',
        title: 'Luminous Skin',
        videoUrl: 'https://vimeo.com/22681619',
        duration: '01:55',
      },
      {
        id: 'beauty-3',
        title: 'Runway Ready',
        videoUrl: 'https://www.youtube.com/watch?v=LsoLEjrDogU',
        duration: '02:58',
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    description: 'Flavors that tell a story.',
    colorFrom: '#facc15',
    colorTo: '#f97316',
    items: [
      {
        id: 'food-1',
        title: 'Street Feast',
        videoUrl: 'https://www.youtube.com/watch?v=EtH9Yllzjcc',
        duration: '01:40',
      },
      {
        id: 'food-2',
        title: 'Artisan Kitchen',
        videoUrl: 'https://vimeo.com/90509568',
        duration: '03:05',
      },
      {
        id: 'food-3',
        title: 'Seasonal Harvest',
        videoUrl: 'https://www.youtube.com/watch?v=J---aiyznGQ',
        duration: '02:21',
      },
      {
        id: 'food-4',
        title: 'Sweet Moments',
        videoUrl: 'https://vimeo.com/148751763',
        duration: '01:35',
      },
    ],
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    description: 'Adventure, adrenaline, and nature.',
    colorFrom: '#22c55e',
    colorTo: '#4ade80',
    items: [
      {
        id: 'outdoor-1',
        title: 'Forest Trail',
        videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
        duration: '02:12',
      },
      {
        id: 'outdoor-2',
        title: 'Cliff Dive',
        videoUrl: 'https://vimeo.com/162923311',
        duration: '01:50',
      },
      {
        id: 'outdoor-3',
        title: 'Snowbound',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '02:40',
      },
      {
        id: 'outdoor-4',
        title: 'Starlit',
        videoUrl: 'https://vimeo.com/48912912',
        duration: '03:30',
      },
      {
        id: 'outdoor-5',
        title: 'Surf Break',
        videoUrl: 'https://www.youtube.com/watch?v=hT_nvWreIhg',
        duration: '01:55',
      },
    ],
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Textures, silhouettes, and timeless looks.',
    colorFrom: '#6366f1',
    colorTo: '#a855f7',
    items: [
      {
        id: 'fashion-1',
        title: 'Urban Couture',
        videoUrl: 'https://www.youtube.com/watch?v=sOnqjkJTMaA',
        duration: '03:42',
      },
      {
        id: 'fashion-2',
        title: 'Minimal Lines',
        videoUrl: 'https://vimeo.com/191947042',
        duration: '02:26',
      },
      {
        id: 'fashion-3',
        title: 'Timeless Fabrics',
        videoUrl: 'https://www.youtube.com/watch?v=lWA2pjMjpBs',
        duration: '02:58',
      },
      {
        id: 'fashion-4',
        title: 'Runway Light',
        videoUrl: 'https://vimeo.com/137857207',
        duration: '01:48',
      },
      {
        id: 'fashion-5',
        title: 'Statement Pieces',
        videoUrl: 'https://www.youtube.com/watch?v=E5ONTXHS2mM',
        duration: '02:17',
      },
      {
        id: 'fashion-6',
        title: 'Bold Patterns',
        videoUrl: 'https://vimeo.com/90686741',
        duration: '02:09',
      },
      {
        id: 'fashion-7',
        title: 'Midnight Glam',
        videoUrl: 'https://www.youtube.com/watch?v=uelHwf8o7_U',
        duration: '03:21',
      },
    ],
  },
]
