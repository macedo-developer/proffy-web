export default function convertMinuteToHour(time: number) {

  const hours = Math.floor(time / 60)
  const minutes = time % 60

  console.log(`${hours}:${minutes}`);

  return `${hours}:${minutes}`;
}
