import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getRecords(path: string, slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const urlParamsObject = { filters: { slug }, locale: lang };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getBlogBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/blogs`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      blocks: {
        populate: {
          __component: "*",
          files: "*",
          file: "*",
          url: "*",
          body: "*",
          title: "*",
          author: "*",
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export async function getLastNBlogs(numberOfBlogs: number, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const urlParamsObject = {
    filters: {},
    sort: ["createdAt:desc"],
    pagination: { start: 0, limit: numberOfBlogs },
    locale: lang,
    populate: {
      image: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await fetchAPI("/blogs", urlParamsObject, options);

    return res.data;
  } catch {
    console.log("Error fetching latest entry");
  }
}

export async function getFutureNEvents(
  start: number = 0,
  numberOfEvents: number,
  lang: string
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const today = new Date().toISOString().split("T")[0];

  const urlParamsObject = {
    filters: {
      date: {
        $gte: today,
      },
    },
    sort: ["date:asc"],
    pagination: { start: start, limit: numberOfEvents },
    locale: lang,
    populate: {
      image: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      country: {
        fields: ["name", "code"],
      },
    },
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await fetchAPI("/events", urlParamsObject, options);

    return res.data;
  } catch {
    console.log("Error fetching latest entry");
  }
}

export async function getLatestEntry(path: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const urlParamsObject = {
    filters: {},
    sort: ["createdAt:desc"],
    pagination: { start: 0, limit: 1 },
    locale: lang,
    populate: {
      image: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await fetchAPI(path, urlParamsObject, options);
    return res.data[0];
  } catch {
    console.log("Error fetching latest entry");
  }
}

export async function getCarouselImagesBySection(
  section: string,
  lang: string | null
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const urlParamsObject = {
    filters: { section },
    pagination: { start: 0, limit: 5 },
    locale: lang,
    populate: {
      images: {
        populate: {
          image: {
            populate: {
              fields: ["url", "alternativeText", "caption", "width", "height"],
            },
          },
        },
      },
    },
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await fetchAPI("/carousel-images", urlParamsObject, options);
    return res.data[0];
  } catch {
    console.log("Error fetching carousel images");
  }
}
