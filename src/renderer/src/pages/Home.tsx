import { useEffect, useState } from 'react';
import { getTime, getDate } from '@renderer/utils/TimeUtils'
import { Link } from 'react-router-dom';
import PageWrapper from '@renderer/components/PageWrapper';

function Home(): JSX.Element {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(getTime())
    }, 100);
  }, [])

  return (
    <PageWrapper>
      <div className="mt-5 p-2 w-38 h-24 rounded-md bg-neutral-600 flex flex-col justify-center items-center">
        <h1 className="text-4xl">Hello, user!</h1>
        <h2 className="text-2xl font-extralight">{time} {getDate()}</h2>
      </div>
      <h3 className="mt-5 text-2xl">Your routine for today (Wednesday)</h3>
      <ul className="py-1">
        <li>08:00 Breakfast</li>
        <li>09:00 Prepare my day</li>
        <li className="text-emerald-200">10:00 - 12:00 Work on new repo</li>
        <li>12:00 Lunch </li>
        <li>13:00 Gym</li>
        <li className="font-semibold text-sky-200">Check out your current routine...</li>
      </ul>
      <h3 className="mt-5 text-2xl">Your most important tasks</h3>
      <ul className="py-1">
        <li>- Homework page 43</li>
        <li>- Refactor code.js</li>
        <li>- Finish prototype</li>
        <li className="font-semibold text-sky-200">See more tasks...</li>
      </ul>
      <h3 className="mt-5 text-2xl">Your widgets</h3>
      <ul className="py-1">
        <li>- School Notes</li>
        <li>- Work notes</li>
        <li>- Freelancing tasks</li>
        <li className="font-semibold text-sky-200">
          <Link
            to="/add_widget"
            className="hover:underline"
          >Create a new one...</Link>
        </li>
      </ul>
    </PageWrapper>
  )
}

export default Home; 
