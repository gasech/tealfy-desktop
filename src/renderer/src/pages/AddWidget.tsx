const AddWidget = (): JSX.Element => {
  return (
    <>
      <h1 className="text-4xl">Add a new widget</h1>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="name" className="font-medium text-lg">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Large"
          className="p-2 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900"
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="image-url" className="font-medium text-lg">Image URL</label>
        <input
          type="text"
          id="image-url"
          placeholder="https://content.com/image92.png"
          className="p-2 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900"
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="name" className="font-medium text-lg">Type</label>
        <select
          id="type"
          placeholder="Select your widget type"
          className="p-2.5 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900"
        >
          <option>Calendar</option>
          <option>Note</option>
          <option>Routine</option>
          <option>Task List</option>
        </select>
      </div>
    </>
  )
}

export default AddWidget;
