import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import WidgetContext from '@renderer/context/WidgetContext';
import { deleteWidget } from '@renderer/models/Widget';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import Widget from '@renderer/models/Widget';

function Nav(): JSX.Element {
  const navigate = useNavigate();

  const { widgets, setWidgets, forceReload } = useContext(WidgetContext);

  const remWidget = (id: number) => {
    deleteWidget(id).then(() => {
      forceReload()
      navigate("/")
    })
  }

  const reorder = (list: Widget[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      widgets,
      result.source.index,
      result.destination.index
    );

    setWidgets(items);
  }

  return (
    <aside className="bg-neutral-800 absolute left-0 w-72 h-screen overflow-clip">
      <nav
        className="py-1"
      >
        <h1 className="text-white text-2xl px-3 mt-3">Tealfy <span className="text-sm">0.0.2</span></h1>
        <ul>
          <li>
            <Link
              to="/"
              className="text-white font-light mt-2 text-lg px-3 py-2 w-full cursor-pointer flex gap-3 items-center"
            >
              <img
                src="https://i.pinimg.com/474x/b7/1a/67/b71a67beb1eb35251e3c9fdd0401ab2c.jpg"
                alt="Home widget icon"
                className="w-12 h-12 object-cover"
              />
              <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">Home</span>
            </Link>
          </li>
          <div role="separator" className="w-[264px] h-px bg-neutral-500 my-2 mx-auto">
          </div>
        </ul>
        <ul
          className="pb-[218px] h-screen text-white flex flex-col font-light text-lg gap-0 overflow-y-scroll"
        >
          {/* <DragDropContext> */}
          {/*   <Droppable droppableId="widgets"> */}
          {/*     { */}
          {/*       widgets.map((widget) => { */}
          {/*         return ( */}
          {/*           <li */}
          {/*             key={widget.id} */}
          {/*             className="flex items-center group gap-2 duration-300" */}
          {/*           > */}
          {/*             <Link */}
          {/*               to={`/widgets/${widget.id}`} */}
          {/*               className="px-3 py-2 w-full h-full cursor-pointer flex gap-3 items-center" */}
          {/*             > */}
          {/*               <img */}
          {/*                 src={widget.image} */}
          {/*                 alt={`Widget ${widget.name} icon`} */}
          {/*                 className="w-12 h-12 object-cover" */}
          {/*               /> */}
          {/*               <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-40">{widget.name}</span> */}
          {/*             </Link> */}
          {/*             <button */}
          {/*               className="hidden hover:bg-neutral-600 group-hover:block rounded-full p-1 mr-3" */}
          {/*               onClick={() => remWidget(widget.id)} */}
          {/*             > */}
          {/*               <Icon */}
          {/*                 icon="mdi:dots-horizontal" */}
          {/*                 className="content-none w-6 h-6 text-white rounded-lg" */}
          {/*                 color="white" */}
          {/*               /> */}
          {/*             </button> */}
          {/*           </li> */}
          {/*         ) */}
          {/*       }) */}
          {/*     } */}
          {/*   </Droppable> */}
          {/* </DragDropContext> */}
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {widgets.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.name} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-3"
                        >
                          {item.name}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <li
            className="flex justify-center duration-300 mt-3"
          >
            <Link
              to="/add_widget"
              className="w-11/12 transition-all text-center text-neutral-400 border-dashed border border-neutral-400 py-2 hover:border-neutral-300 hover:text-neutral-300"
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
