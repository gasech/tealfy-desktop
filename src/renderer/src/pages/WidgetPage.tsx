import { useState, useEffect } from "react";
import { getWidget } from "@renderer/models/Widget";
import { useLocation } from "react-router-dom";

import Widget from "@renderer/models/Widget";

import PageWrapper from "@renderer/components/PageWrapper";
import TasksDisplay from "@renderer/components/TasksDisplay";
import NotesDisplay from "@renderer/components/NotesDisplay";
import CalendarDisplay from "@renderer/components/CalendarDisplay";
import RoutineDisplay from "@renderer/components/RoutineDisplay";

const WidgetPage = (): JSX.Element => {
  let location = useLocation();
  const [widget, setWidget] = useState<Widget | undefined>();

  useEffect(() => {
    const loadWidget = async () => {
      const id = getWidgetIdByPathname(location.pathname);
      setWidget(await getWidget(id));
    }

    loadWidget();
  }, [location])

  if (typeof widget === "undefined") {
    return (
      <PageWrapper>
        <h1>Widget not found</h1>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div
        className="flex gap-3"
      >
        <img
          src={widget.image}
          className="w-40 h-40 object-cover"
        />
        <div
          className="flex flex-col"
        >
          <h1
            className="text-3xl"
          >{widget.name}</h1>
          <p>{widget.type}</p>
        </div>
      </div>
      <div className="mt-5">
        <WidgetHandler widget={widget} />
      </div>
    </PageWrapper>
  )
}

type WidgetHandlerProps = {
  widget: Widget;
}

const WidgetHandler = ({ widget }: WidgetHandlerProps): JSX.Element => {
  if (widget.type == "tasks") {
    return (
      <TasksDisplay key={widget.id} widget={widget} />
    )
  }

  if (widget.type == "notes") {
    return (
      <NotesDisplay key={widget.id} widget={widget} />
    )
  }

  if (widget.type == "routine") {
    return (
      <RoutineDisplay key={widget.id} />
    )
  }

  if (widget.type == "calendar") {
    return (
      <CalendarDisplay key={widget.id} />
    )
  }

  return (
    <p>Error: The widget you created have an unknown type.</p>
  )
}

const getWidgetIdByPathname = (pathname: string): number => {
  const splitPath = pathname.split("/")

  return Number(splitPath[2])
}

export default WidgetPage;
