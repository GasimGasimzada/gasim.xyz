export const getHumanReadableDate = (date: Date): string => {
  return date.toLocaleDateString("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
