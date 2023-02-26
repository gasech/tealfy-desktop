import { useEffect, useState } from 'react';

function Home(): JSX.Element {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
    }, 100);
  }, [])

  return (
    <>
      <div className="text-white">
        <h1 className="text-4xl">Hello, user!</h1>
        <div className="mt-5 p-2 w-38 h-12 rounded-md bg-neutral-600 flex justify-center">
          <h2 className="text-2xl font-extralight">{time}</h2>
        </div>
        <h3 className="mt-5 text-2xl">Your current tasks</h3>
        <ul className="py-1">
          <li>- Homework page 43</li>
          <li>- Refactor code.js</li>
          <li>- Finish prototype</li>
        </ul>
      </div>
    </>
  )
}

const getTime = (): string => {
  let date: Date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session: string = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  let hText = (h < 10) ? "0" + h : h;
  let mText = (m < 10) ? "0" + m : m;
  let sText = (s < 10) ? "0" + s : s;

  let time = `${hText}:${mText}:${sText} ${session}`;

  return time;
}

export default Home; 
