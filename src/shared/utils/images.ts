export const getImageUrl = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL;

  return `${baseUrl}${path.replace(/^\//, '')}`;
};
