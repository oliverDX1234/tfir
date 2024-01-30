interface Image {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

interface Country {
  data: {
    id: number;
    attributes: {
      name: string;
      code: string;
    };
  };
}

export interface Event {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    date: string;
    image: Image;
    country: Country;
  };
}

export interface Blog {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image: Image;
  };
}

export interface CarouselImage {
  id: number;
  alt: string;
  country?: string;
  image: Image;
}

export interface CarouselSection {
  id: number;
  attributes: {
    section: string;
    images: CarouselImage[];
  };
}
