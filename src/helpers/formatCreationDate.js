export const formatCreationDate = (date) => {
  const tokens = date?.split("/");
  const [day, month, year] = tokens;
  return `${day}.${month}.${year}`;
};
