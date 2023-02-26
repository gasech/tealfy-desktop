import { createContext, Dispatch, SetStateAction } from "react"
import Widget from "../models/Widget";

interface IWidgetContext {
  widgets: Widget[];
  setWidgets: Dispatch<SetStateAction<Widget[]>>;
}

const WidgetContext = createContext<IWidgetContext>(undefined as any);

export default WidgetContext;
