import WidgetContext from "@renderer/context/WidgetContext";
import { useContext, useState } from "react";
import PageWrapper from "@renderer/components/PageWrapper";

const AddWidget = (): JSX.Element => {
  const { widgets, setWidgets } = useContext(WidgetContext);
  const [formFields, setFormFields] = useState({
    name: "",
    type: "",
    image: "",
  })

  const handleForm = () => {
    setWidgets([...widgets, {
      id: widgets.length + 1,
      name: formFields.name,
      type: formFields.type,
      image: formFields.image
    }])
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl">Add a new widget</h1>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="name" className="font-medium text-lg">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Large"
          onChange={e => setFormFields({ ...formFields, name: e.target.value })}
          className="p-1.5 rounded-sm placeholder:text-neutral-400 text-neutral-900 w-64"
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="image-url" className="font-medium text-lg">Icon</label>
        <input
          type="text"
          id="image-url"
          placeholder="https://content.com/image92.png"
          onChange={e => setFormFields({ ...formFields, image: e.target.value })}
          className="p-1.5 rounded-sm placeholder:text-neutral-400 text-neutral-900 w-64"
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="name" className="font-medium text-lg">Type</label>
        <select
          id="type"
          placeholder="Select your widget type"
          onChange={e => setFormFields({ ...formFields, type: e.target.value })}
          className="p-2.5 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900 cursor-pointer w-64"
        >
          <option>Calendar</option>
          <option>Note</option>
          <option>Routine</option>
          <option>Task List</option>
        </select>
      </div>
      <div
        className="flex gap-2 mt-5"
      >
        <button
          className="w-32 p-1.5 bg-neutral-500 hover:bg-neutral-700"
          onClick={() => handleForm()}
        >Create Widget</button>
      </div>
    </PageWrapper>
  )
}

export default AddWidget;
