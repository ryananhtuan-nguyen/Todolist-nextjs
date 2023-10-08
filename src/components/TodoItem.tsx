'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  editTodo: (id: string, title: string) => void
}

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  editTodo,
}: TodoItemProps) {
  const [editing, setEditing] = useState(false)
  const [input, setInput] = useState('')
  const router = useRouter()
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {!editing && (
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
          onDoubleClick={() => setEditing(true)}
        >
          {title}
        </label>
      )}
      {editing && (
        <>
          <input
            className="text-black"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            defaultValue={title}
          />
          <button
            type="button"
            onClick={() => {
              setEditing(false)
              editTodo(id, input)
              router.refresh()
            }}
          >
            Save
          </button>
        </>
      )}
    </li>
  )
}
