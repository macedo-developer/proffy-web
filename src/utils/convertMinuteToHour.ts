export default function convertHourToMinute(time: number) {
  var hours = Math.trunc(time / 60);
  var minutes = time % 60;

  return `${hours}:${minutes}`;
}
