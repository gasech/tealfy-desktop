import { Icon } from '@iconify/react'
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom"

function Nav(): JSX.Element {
  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  const draggedItem: any = useRef();

  const [widgetList, setWidgetList] = useState([
    {
      id: 0,
      name: "School notes",
      type: "notes",
      image: "https://i.pinimg.com/564x/fe/f2/9b/fef29bb76af39f6689de29c0534526ea.jpg"
    }, {
      id: 1,
      name: "Work notes",
      type: "notes",
      image: "https://64.media.tumblr.com/80daec87a3196684b248c11e506d460b/tumblr_o0geflpA2y1upe1ufo1_540.gifv"
    }, {
      id: 2,
      name: "Freelancing tasks",
      type: "tasks",
      image: "https://64.media.tumblr.com/e3e9cae10225425573f628de91c9570e/tumblr_pdlaisQQrO1xdypq5o1_500.gifv"
    },
  ])

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
    const copyListItems = [...widgetList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setWidgetList(copyListItems);
  };

  return (
    <aside className="bg-neutral-800 absolute left-0 w-72 h-full overflow-hidden">
      <nav
        className="py-1"
      >
        <ul>
          <li>
            <Link
              to="/"
              className="text-white font-light text-lg px-3 py-3 w-full cursor-pointer flex gap-3 items-center"
            >
              <img
                src="https://i.pinimg.com/474x/b7/1a/67/b71a67beb1eb35251e3c9fdd0401ab2c.jpg"
                alt="some random image"
                className="w-12 h-12 object-cover"
              />
              <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">Home</span>
            </Link>
          </li>
          <div role="separator" className="w-72 h-px bg-neutral-500 my-2 mx-auto">
          </div>
        </ul>
        <ul
          className="text-white flex flex-col font-light text-lg gap-1 wrap"
        >
          {widgetList.map((widget, index) => {
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
                  className="px-3 py-3 w-full h-full cursor-pointer flex gap-3 items-center"
                >
                  <img
                    src={widget.image}
                    alt="some random image"
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
              className="w-11/12 text-center border-dashed border-2 border-neutral-500 py-3"
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
