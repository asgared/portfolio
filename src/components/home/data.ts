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
    id: 'nafinsa',
    name: 'Nafinsa',
    description: 'Description here!',
    colorFrom: '#38bdf8',
    colorTo: '#a855f7',
    items: [
      {
        id: 'nafinsa-1',
        title: '¿Tú le prestarías?',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '02:45',
      }
    ],
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Description here!',
    colorFrom: '#0ea5e9',
    colorTo: '#22d3ee',
    items: [
      {
        id: 'liverpool-1',
        title: 'Teaser Yo no fui',
        videoUrl: 'https://vimeo.com/1058766039/918bbbc6ac',
        duration: '01:30',
      },
      {
        id: 'liverpool-2',
        title: 'Pantallota',
        videoUrl: 'https://vimeo.com/1058767615/1916b56b49',
        duration: '02:05',
      },
      {
        id: 'liverpool-3',
        title: 'Cocina',
        videoUrl: 'https://vimeo.com/1058769974/7c7e33c637',
        duration: '02:05',
      },
      {
        id: 'liverpool-4',
        title: 'Roomie',
        videoUrl: 'https://vimeo.com/1058763925/7b37b84551',
        duration: '02:05',
      },
    ],
  },
  {
    id: 'amstel-ultra',
    name: 'Amstel Ultra',
    description: 'Description here!',
    colorFrom: '#f97316',
    colorTo: '#ef4444',
    items: [
      {
        id: 'amstel-ultra-1',
        title: 'Rafa Nadal',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '04:22',
      }
    ],
  },
  {
    id: 'bodega-aurrera',
    name: 'Bodega Aurrerá',
    description: 'Description here!',
    colorFrom: '#ec4899',
    colorTo: '#f472b6',
    items: [
      {
        id: 'bodega-aurrera-1',
        title: 'Lanzamiento Mamá Lucha',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '02:10',
      },
      {
        id: 'bodega-aurrera-2',
        title: 'Otro que lucha contra las mochilas o algo así',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '01:55',
      }
    ],
  },
  {
    id: 'burger-king',
    name: 'Burger King',
    description: 'Description here!',
    colorFrom: '#facc15',
    colorTo: '#f97316',
    items: [
      {
        id: 'burger-king-1',
        title: 'Stacker',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '01:40',
      },
      {
        id: 'burger-king-2',
        title: 'Boneless',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '03:05',
      }
    ],
  },
  {
    id: 'pais-cultura',
    name: 'País Cultura',
    description: 'Description here!',
    colorFrom: '#22c55e',
    colorTo: '#4ade80',
    items: [
      {
        id: 'pais-cultura-1',
        title: 'Feria del Libro, Cineteca',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '02:12',
      }
    ],
  },
  {
    id: 'pais-economia',
    name: 'País Economía',
    description: 'Description here!',
    colorFrom: '#6366f1',
    colorTo: '#a855f7',
    items: [
      {
        id: 'pais-economia-1',
        title: 'Industria Automotriz',
        videoUrl: 'https://vimeo.com/1058767476/5902ade8df',
        duration: '03:42',
      }
    ],
  },
]
