export function addHoursToTime(inputTime: string, hoursToAdd: number): string {
  const date = new Date(inputTime);

  date.setHours(date.getHours() + hoursToAdd);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}
