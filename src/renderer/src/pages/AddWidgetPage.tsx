import WidgetContext from "@renderer/context/WidgetContext";
import { useContext, useState } from "react";
import PageWrapper from "@renderer/components/PageWrapper";
import { addWidget } from "@renderer/models/Widget";
import { useNavigate } from "react-router-dom";
import Widget from "@renderer/models/Widget";

const AddWidgetPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { widgets, forceReload } = useContext(WidgetContext);
  const [formFields, setFormFields] = useState({
    name: "",
    type: "calendar",
    image: "",
  })

  const handleForm = async () => {
    let widget: Widget = {
      id: widgets.length,
      name: formFields.name,
      type: formFields.type,
      image: formFields.image
    }

    if (widget.type == "tasks") { widget.tasks = [] }
    if (widget.type == "notes") { widget.notes = [] }

    await addWidget(widget);

    forceReload()
    navigate(`/widgets/${widgets.length}`)
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl">Add a new widget</h1>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="name" className="font-medium text-lg">Name</label>
        <input
          type="text"
          id="name"
          placeholder="My cool widget"
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
          onChange={e => setFormFields({ ...formFields, type: e.target.value.toLowerCase() })}
          className="p-2.5 rounded-sm placeholder:text-neutral-400 focus:outline-none text-neutral-900 cursor-pointer w-64"
        >
          <option>Calendar</option>
          <option>Notes</option>
          <option>Routine</option>
          <option>Tasks</option>
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

export default AddWidgetPage;
