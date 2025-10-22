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
        videoUrl: 'https://vimeo.com/1129018115',
        duration: '00:49',
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
        videoUrl: 'https://vimeo.com/1129020655',
        duration: '00:13',
      },
      {
        id: 'liverpool-2',
        title: 'Pantallota',
        videoUrl: 'https://vimeo.com/1129020400',
        duration: '00:18',
      },
      {
        id: 'liverpool-3',
        title: 'Cocina',
        videoUrl: 'https://vimeo.com/1129020895',
        duration: '00:20',
      },
      {
        id: 'liverpool-4',
        title: 'Roomie',
        videoUrl: 'https://vimeo.com/1129020983',
        duration: '00:20',
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
        videoUrl: 'https://vimeo.com/1129020738',
        duration: '00:30',
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
        videoUrl: 'https://vimeo.com/1129020519',
        duration: '00:20',
      },
      {
        id: 'bodega-aurrera-2',
        title: 'Otro que lucha contra las mochilas o algo así',
        videoUrl: 'https://vimeo.com/1129021250',
        duration: '00:30',
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
        videoUrl: 'https://vimeo.com/1129020052',
        duration: '00:30',
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
        videoUrl: 'https://vimeo.com/1129020229',
        duration: '06:57',
      }
    ],
  },
]
