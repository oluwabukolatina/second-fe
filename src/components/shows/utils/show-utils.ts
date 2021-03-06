export const cleanSummary = (input: string) => {
  return input ? input.replace(/<\/?[^>]+(>|$)/g, '') : '';
};
export const truncateString = (input: string, max: number) => {
  return input.substring(0, max);
};
