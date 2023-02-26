import Widget from "@renderer/types/Widget"
import { useState } from "react"
import WidgetContext from "@renderer/context/WidgetContext";

const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState<Widget[]>([{
    id: 0,
    name: "School notes",
    type: "notes",
    image: "https://i.pinimg.com/564x/fe/f2/9b/fef29bb76af39f6689de29c0534526ea.jpg"
  },
  {
    id: 1,
    name: "Work notes",
    type: "notes",
    image: "https://64.media.tumblr.com/80daec87a3196684b248c11e506d460b/tumblr_o0geflpA2y1upe1ufo1_540.gifv"
  },
  {
    id: 2,
    name: "Freelancing tasks",
    type: "tasks",
    image: "https://64.media.tumblr.com/e3e9cae10225425573f628de91c9570e/tumblr_pdlaisQQrO1xdypq5o1_500.gifv"
  },
  ]);

  return (
    <WidgetContext.Provider value={{ widgets, setWidgets }}>
      {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider;
