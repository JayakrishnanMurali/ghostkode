import { formatDate as formatFnsDate, formatDistanceToNow } from "date-fns";

export const formatDate = (date: string) => {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  const formattedDate = formatDistanceToNow(targetDate, {
    addSuffix: true,
  });

  const fullDate = formatFnsDate(targetDate, "MMMM d, yyyy");

  return {
    fullDate: `${fullDate} (${formattedDate})`,
    formattedDate,
  };
};
