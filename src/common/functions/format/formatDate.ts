import dayjs from "dayjs";
export const formatDate = (date: Date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
export const formatDateWithTime = (date: Date) => {
  return dayjs(date).format("HH:mm:ss");
};
export const formatDateTable = (date: Date | string | null) => {
  if (null) return;
  return dayjs(date).format("DD-MM-YYYY HH:mm:ss");
};
