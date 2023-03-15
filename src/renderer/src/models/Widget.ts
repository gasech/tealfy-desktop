// Widget Types
import Task from "./Task";
import Note from "./Note";
import Routine from "./Routine";
import Calendar from "./Calendar";

// StorageUtils
import { readData, saveData } from "@renderer/utils/StorageUtils";

export default interface Widget {
  id: number;
  name: string;
  type: string;
  image: string;
  description?: string;
  tasks?: Task[];
  notes?: Note[];
  routine?: Routine;
  calendar?: Calendar;
}

export const getWidgets = async (): Promise<Widget[]> => {
  const data = await readData()

  return data.widgets;
}

export const setWidgets = async (widgets: Widget[]): Promise<void> => {
  let data = await readData()

  data = {
    ...data,
    widgets: widgets
  }

  saveData(data);
}

export const getWidget = async (id: number): Promise<Widget | undefined> => {
  let data = await readData()
  let widgetFilter = data.widgets.filter((widget) => widget.id === id);

  if (widgetFilter.length == 0) return undefined;

  return widgetFilter[0];
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
