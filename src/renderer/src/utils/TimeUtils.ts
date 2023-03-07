import { timeFormat } from "@renderer/models/Preferences";

const timeFormat: timeFormat = 12;

let date: Date = new Date();

const getSession = (): string => {
  date = new Date();
  let h = date.getHours();

  let session: string = "AM";

  if (h > 12) {
    session = "PM";
  }

  return session;
}

export const getTime = (): string => {
  date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let session: string = getSession();

  if (timeFormat === 12) {
    if (h === 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
    }
  }

  let hText = (h < 10) ? "0" + h : h;
  let mText = (m < 10) ? "0" + m : m;
  let sText = (s < 10) ? "0" + s : s;

  let time = `${hText}:${mText}:${sText} ${session}`;

  return time;
}

export const getDate = (): string => {
  date = new Date();

  let day = date.getDay();
  let dayMonth = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]

  return `${daysWeek[day]}, ${dayMonth}.${month + 1}.${year}`
}
