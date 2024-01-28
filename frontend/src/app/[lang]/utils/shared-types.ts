interface Image {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export interface Event {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  date: string;
  image: Image;
}

export interface CarouselImage {
    id: number;
    alt: string;
    country?: string;
    image: Image;
  }

export interface CarouselSection {
  id: number;
  section: string;
  images: CarouselImage[];
}
