export const fetchHandler = async (url: string) => {
  try {
    const result = await fetch(url);
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};
