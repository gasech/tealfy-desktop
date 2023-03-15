import Note from "@renderer/models/Note";
import Widget from "@renderer/models/Widget";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type NotesDisplayProps = {
  widget: Widget
}

const NotesDisplay = ({ widget }: NotesDisplayProps) => {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    if (typeof widget.notes == "undefined") return;

    setNotes(widget.notes)
  }, [])

  return (
    <div>
      <ul
        className="flex flex-col gap-2"
      >
        {
          notes.map((note) => {
            return (
              <li
                className="p-2.5 bg-neutral-800"
              >
                <h1 className="text-lg">{note.name}</h1>

                <ReactMarkdown>
                  {note.content.replaceAll("<br>", " \n ")}
                </ReactMarkdown>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NotesDisplay;
