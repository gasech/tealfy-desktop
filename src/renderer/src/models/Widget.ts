import Task from "./Task";
import Note from "./Note";
import { readData, saveData } from "@renderer/utils/StorageUtils";

export default interface Widget {
  id: number;
  name: string;
  type: string;
  image: string;
  tasks?: Task[];
  notes?: Note[];
}

export const getAllWidgets = async (): Promise<Widget[]> => {
  const data = await readData()

  return data.widgets;
}

export const addWidget = async (widget: Widget): Promise<void> => {
  let data = await readData()
  let widgets = [...data.widgets, widget];

  data = {
    ...data,
    widgets: widgets
  }

  saveData(data);
}

export const deleteWidget = async (id: number): Promise<void> => {
  let data = await readData()
  let widgets = data.widgets.filter((widget) => widget.id != id);

  data = {
    ...data,
    widgets: widgets
  }

  saveData(data);
}
