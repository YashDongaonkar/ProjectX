import { useState, useRef } from "react";

export default function TodoPage() {

  const modalRef = useRef(null)

  const openModal = () => {
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   loadTodos();
  // }, []);

  // const loadTodos = async () => {
  //   const data = await fetchTodos();
  //   setTodos(data);
  // };

  // const handleDelete = async (id) => {
  //   await deleteTodo(id);
  //   loadTodos(); // refresh
  // };

  // const handleMarkDone = async (id) => {
  //   await markTodoAsDone(id);
  //   loadTodos(); // refresh
  // };

  // const handleAddTask = async (newTodo) => {
  //   await addTodo(newTodo);
  //   loadTodos(); // refresh
  // };
  // this is dummy data, replace it with your API call or state management
  const [todos] = useState([
    {
      id: 1,
      task: "Complete Lab Report",
      priority: "High",
      deadline: "2025-06-28T10:30:00",
      createdAt: "2025-06-26T17:00:00",
      completed: false,
    },
    {
      id: 2,
      task: "Submit Math Assignment",
      priority: "Medium",
      deadline: "2025-06-29T16:00:00",
      createdAt: "2025-06-25T14:00:00",
      completed: true,
    },
    {
      id: 3,
      task: "Buy Stationery",
      priority: "Low",
      deadline: "2025-06-30T18:00:00",
      createdAt: "2025-06-24T10:30:00",
      completed: false,
    },
    {
      id: 4,
      task: "Prepare Presentation",
      priority: "High",
      deadline: "2025-07-01T09:00:00",
      createdAt: "2025-06-26T12:00:00",
      completed: false,
    }
  ]);

  const priorityColor = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500"
  };

  return (
    <div className="px-4 py-8 sm:px-8 lg:px-20 max-w-6xl mx-auto font-sans min-h-screen">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mx-10 mb-6">
        <p className="text-3xl item-center sm:text-4xl font-bold">📋 To-Do List</p>
        <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">

          <button
            onClick={openModal}
            className="rounded-md border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-gray-500"
          >
            + New Task
          </button>
        </div>
      </div>


      <div className="max-h-[80vh] overflow-y-auto space-y-3 pr-2 light-scrollbar">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="p-3 sm:p-4 bg-gray-100 border border-gray-200 rounded-md shadow hover:shadow-md transition text-sm sm:text-base"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h2 className="font-semibold text-base sm:text-lg">{todo.task}</h2>
              <span className={`font-medium ${priorityColor[todo.priority]}`}>
                {todo.priority}
              </span>
            </div>
            <div className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-2">
              <p>📅 <b>Deadline:</b> {new Date(todo.deadline).toLocaleString()}</p>
              <p>🕒 <b>Created:</b> {new Date(todo.createdAt).toLocaleString()}</p>
              <p>✅ <b>Status:</b> {todo.completed ? "Completed ✅" : "Incomplete ❌"}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {!todo.completed && (
                <button className="rounded-md border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-gray-500">
                  ✔ Mark as Done
                </button>
              )}
              <button className="rounded-md border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-gray-500">
                🗑 Delete
              </button>
            </div>
          </div>
        ))
        }
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold mb-4 text-primary">Create New Task</h2>
          <input
            placeholder="Task Name"
            className="input text-base text-secondary"
          />
          <br />
          <br />
          <input
            type="datetime-local"
            className="input text-base text-secondary"
          />
          <br />
          <br />
          <select className="select select-ghost text-base text-secondary">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="btn btn-primary"
            >
              Cancel
            </button>
            <button className="btn btn-secondary">
              Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}