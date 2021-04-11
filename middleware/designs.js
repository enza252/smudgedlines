const productTypes = {
  mensTee: 'Men\'s T-Shirt'
}
export const sources = {
  acid_synth: [
    {
      image: '/designs/acid-synth/acid-synth-carousel-1450x1088.jpg',
      alt: 'Acid Synth Print'
    },
    {
      image: '/designs/acid-synth/acid-synth-carousel-1450x1088-combined.jpg',
      alt: 'Acid Synth T-Shirt with Model'
    }
  ],
  amoeba: [
    {
      image: '/designs/amoeba/amoeba-carousel-1450x1088.jpg',
      alt: 'Amoeba Print'
    },
    {
      image: '/designs/amoeba/amoeba-carousel-1450x1088-combined.jpg',
      alt: 'Amoeba T-Shirt with Model'
    }
  ],
  rose_fireworks: [
    {
      image: '/designs/rose-fireworks/rose-fireworks-carousel-1450x1088.jpg',
      alt: 'Rosé Fireworks Print'
    },
    {
      image: '/designs/rose-fireworks/rose-fireworks-carousel-1450x1088-combined.jpg',
      alt: 'Rosé Fireworks T-Shirt with Model'
    }
  ],
  djibou: [
    {
      image: '/designs/djibou/djibou-carousel-1450x1088.jpg',
      alt: 'Djibou Print'
    },
    {
      image: '/designs/djibou/djibou-carousel-1450x1088-combined-flipped.jpg',
      alt: 'Djibou T-Shirt with Model'
    }
  ],
  connection: [
    {
      image: '/designs/connection/connection-carousel-1450x1088.jpg',
      alt: 'Connection Print'
    },
    {
      image: '/designs/connection/connection-carousel-1450x1088-combined.jpg',
      alt: 'Connection T-Shirt with Model'
    },
    {
      image: '/designs/connection/connection_carousel_1450x1088-hanging.jpg',
      alt: 'Connection T-Shirt with Model'
    }
  ],
}
export const designs = [
  {
    name: 'Djibou',
    source: sources.djibou,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Zig/zag pattern in orange',
    icon: 'mdi-waves'
  },
  {
    name: 'Rosé Firework',
    source: sources.rose_fireworks,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Sparkling Rosé Fireworks fractal pattern in red',
    icon: 'mdi-fire'
  },
  {
    name: 'Connection',
    source: sources.connection,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Connection tessellated pattern in blue',
    icon: 'mdi-stop'
  },
  {
    name: 'Amoeba',
    source: sources.amoeba,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Crepe',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Funky amoeba geometric pattern in blue',
    icon: 'mdi-chart-bubble'
  },
  {
    name: 'Acid Synth',
    source: sources.acid_synth,
    productType: productTypes.mensTee,
    material: {
      fabric: 'Silky Stretch Jersey',
      source: 'Leicestershire'
    },
    produced: 'Winter 2020',
    style: 'Acid Synth fractal pattern in green/black',
    icon: 'mdi-disc-alert'
  },
  {
    name: 'Polka',
    icon: 'mdi-dots-hexagon'
  },
  {
    name: 'Ink',
    icon: 'mdi-water-percent'
  },
  {
    name: 'Purple Haze',
    icon: 'mdi-cloud'
  }
]

export const designIcons = designs.map(d => d.icon)
