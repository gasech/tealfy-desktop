import Widget from "@renderer/models/Widget"
import { useState, useEffect } from "react"
import WidgetContext from "@renderer/context/WidgetContext";
import { getWidgets } from "@renderer/models/Widget";

const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [update, setUpdate] = useState<boolean>(false)

  const forceReload = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    const assignWidgets = async () => {
      let widgets = await getWidgets()

      setWidgets(widgets)
    }

    assignWidgets()
  }, [update])

  return (
    <WidgetContext.Provider value={{ widgets, setWidgets, forceReload }}>
      {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider;
