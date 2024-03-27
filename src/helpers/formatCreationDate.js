export const formatCreationDate = (date) => {
  const tokens = date?.split("/");
  if (tokens?.length === 3) {
    const [day, month, year] = tokens;
    return `${day}.${month}.${year}`;
  } else {
    return "";
  }
};
