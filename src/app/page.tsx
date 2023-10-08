import { prisma } from '@/db'
import Link from 'next/link'
import { TodoItem } from '@/components/TodoItem'
function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-4xl align-self=center ml-12">Todos</h1>
        <Link
          href="/new"
          className="border boder-slate-300 px-2 py-1 rounded hover:bg-slate-700 focys-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>

      <ul className="pl-4 flex flex-col items-center text-3xl mt-12">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
