import Widget from "@renderer/models/Widget"
import { useState, useEffect } from "react"
import WidgetContext from "@renderer/context/WidgetContext";
import { getAllWidgets } from "@renderer/models/Widget";

const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    const assignWidgets = async () => {
      let widgets = await getAllWidgets()

      setWidgets(widgets)
    }

    assignWidgets()
  }, [])

  return (
    <WidgetContext.Provider value={{ widgets, setWidgets }}>
      {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider;
