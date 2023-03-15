// Components
import PageWrapper from "@renderer/components/PageWrapper";

const handleClick = () => {
  const data = {
    hello: "hello world223"
  }

  window.electron.ipcRenderer.send('save', JSON.stringify(data, null, 2))
}

function SettingsPage(): JSX.Element {
  return (
    <PageWrapper>
      <h1 className="text-4xl text-white">Settings</h1>
      <form className="py-6 text-neutral-200 flex flex-col gap-2">
        <h2 className="text-3xl mt-3">Appearance</h2>
        <h3 className="text-2xl py-1 mt-1">Theme</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="color-scheme" className="font-medium text-lg">Color Scheme</label>
          <input
            type="text"
            id="color-scheme"
            placeholder="Large"
            className="p-1.5 rounded-sm placeholder:text-neutral-400 text-neutral-900 w-64"
          />
        </div>
        <h3 className="text-2xl py-1 mt-2">Font</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="font-size" className="font-medium text-lg ">Size</label>
          <input
            type="text"
            id="font-size"
            placeholder="Medium"
            className="p-1.5 rounded-sm placeholder:text-neutral-400 text-neutral-900 w-64"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="font-family" className="font-medium text-lg">Family</label>
          <input
            type="text"
            id="font-family"
            placeholder="Sans Serif"
            className="p-1.5 rounded-sm placeholder:text-neutral-400 text-neutral-900 w-64"
          />
        </div>
        <h2 className="text-3xl mt-4">Preferences</h2>
        <h3 className="text-2xl py-1 mt-2">Clock</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="clock-format" className="font-medium text-lg">Clock Format</label>
          <select
            id="clock-format"
            placeholder="Select your clock format"
            className="p-2.5 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900 cursor-pointer w-64"
          >
            <option>12-hour format</option>
            <option>24-hour format</option>
          </select>
        </div>
        <div
          className="flex gap-2 mt-10"
        >
          <button
            className="w-32 p-1.5 bg-neutral-500 hover:bg-neutral-700"
          >Apply</button>
          <button
            className="w-32 p-1.5 bg-neutral-500 hover:bg-neutral-700"
          >Reset</button>
          <button
            className="w-32 p-1.5 bg-neutral-500 hover:bg-neutral-700"
            onClick={(e) => {
              e.preventDefault();
              handleClick()
            }
            }
          >Secreeeet</button>
        </div>
      </form>
    </PageWrapper>
  )
}

export default SettingsPage;
