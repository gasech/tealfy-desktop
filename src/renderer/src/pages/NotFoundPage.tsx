import { Link } from "react-router-dom"

function NotFoundPage(): JSX.Element {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white p-5">Error 404</h1>
      <Link
        to="/"
        className="text-2xl text-sky-400"
      >Go back to home page</Link>
    </div>
  )
}

export default NotFoundPage;
