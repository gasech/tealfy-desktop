import { Icon } from '@iconify/react'
import { useContext, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom"
import WidgetContext from '@renderer/context/WidgetContext';

function Nav(): JSX.Element {
  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  const draggedItem: any = useRef();

  const { widgets, setWidgets } = useContext(WidgetContext);

  const [, setStartPosX] = useState(0);
  const [, setStartPosY] = useState(0);

  const positionHandler = useCallback((positionX: number, positionY: number) => {
    setStartPosX(positionX);
    setStartPosY(positionY);
  }, []);

  const dragStart = (e: any, position: number) => {
    dragItem.current = position;
    positionHandler(e.clientX, e.clientY);
    e.currentTarget.style = {
      position: "fixed",
      width: "320px",
      height: "72px"
    }

    draggedItem.current = e.currentTarget;
  };

  const dragEnter = (position: number) => {
    dragOverItem.current = position;
  };

  const dragEnd = (e: any) => {
    draggedItem.current = null;
    e.currentTarget.style = {}
    const copyListItems = [...widgets];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setWidgets(copyListItems);
  };

  return (
    <aside className="bg-neutral-800 absolute left-0 w-72 h-full overflow-hidden">
      <nav
        className="py-1"
      >
        <h1 className="text-white text-2xl px-3 mt-3">Tealfy <span className="text-sm">0.0.1</span></h1>
        <ul>
          <li>
            <Link
              to="/"
              className="text-white font-light mt-2 text-lg px-3 py-2 w-full cursor-pointer flex gap-3 items-center"
            >
              <img
                src="https://i.pinimg.com/474x/b7/1a/67/b71a67beb1eb35251e3c9fdd0401ab2c.jpg"
                alt="some random image"
                className="w-12 h-12 object-cover"
              />
              <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">Home</span>
            </Link>
          </li>
          <div role="separator" className="w-[263px] h-px bg-neutral-500 my-2 mx-auto">
          </div>
        </ul>
        <ul
          className="text-white flex flex-col font-light text-lg gap-1 wrap"
        >
          {widgets.map((widget, index) => {
            return (
              <li
                key={widget.id}
                className="flex items-center group gap-2 duration-300"
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={() => dragEnter(index)}
                onDragEnd={(e) => dragEnd(e)}
                draggable={false}
              >
                <Link
                  to=""
                  className="px-3 py-2 w-full h-full cursor-pointer flex gap-3 items-center"
                >
                  <img
                    src={widget.image}
                    alt={`A beautiful ${widget.type} image`}
                    className="w-12 h-12 object-cover "
                  />
                  <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">{widget.name}</span>
                </Link>
                <button
                  className="hidden absolute hover:bg-neutral-600 group-hover:block rounded-full p-1 right-2"
                >
                  <Icon
                    icon="mdi:dots-horizontal"
                    className="content-none w-6 h-6 text-white rounded-lg"
                    color="white"
                  />
                </button>
              </li>
            )
          })
          }
          <li
            className="flex justify-center duration-300 mt-3"
          >
            <Link
              to="/add_widget"
              className="w-11/12 transition-all text-center text-neutral-300 border-dashed border-2 border-neutral-300 py-2 hover:border-neutral-100 hover:text-neutral-100"
            >
              Add new widget
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="bg-neutral-800 absolute bottom-0 w-full"
      >
        <Link
          to="/settings"
          className="text-white font-light text-lg px-3 py-3 w-full cursor-pointer flex gap-3 items-center"
        >
          <img
            src="https://pbs.twimg.com/media/EhFNVcRXcAAvL_G.jpg"
            alt="some random image"
            className="w-12 h-12 object-cover"
          />
          <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">Settings</span>
        </Link>
      </div>
    </aside >
  )
}

export default Nav;
