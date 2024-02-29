export const getCourseDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const padFront = (num) => `${num < 10 ? "0" : ""}${num}`;

  return `${padFront(hours)}:${padFront(minutes)} hour${
    hours === 1 ? "" : "s"
  }`;
};
