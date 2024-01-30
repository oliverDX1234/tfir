export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString: string, format?: object) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = format || {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function formatTime(dateString: string, format?: object) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = format || {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format. Set to true for 12-hour format.
  };

  return date.toLocaleTimeString("en-US", options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time));
