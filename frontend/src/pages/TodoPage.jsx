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
    <>

      <div className="navbar">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide navbar-start">To-Do List</h2>
        <div className="navbar-end">
          <button
            onClick={openModal}
            className="btn btn-lg btn-primary"
          >
            New Task
          </button>
        </div>
      </div>


      <ul className="list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="list-row flex justify-between"
          >
            <div className="list-col-grow w-100">
              <h2 className="font-semibold text-base sm:text-lg">{todo.task}</h2>
              <span className={`font-medium ${priorityColor[todo.priority]}`}>
                {todo.priority}
              </span>
            </div>

            <div className="list-col-grow w-100">
              <p>📅 <b>Deadline:</b> {new Date(todo.deadline).toLocaleString()}</p>
              <p>🕒 <b>Created:</b> {new Date(todo.createdAt).toLocaleString()}</p>
              <p>✅ <b>Status:</b> {todo.completed ? "Completed" : "Incomplete"}</p>
            </div>

            <div className="w-50">
              {!todo.completed && (
                <button className="btn btn-lg btn-primary mr-1">
                  Done
                </button>
              )}
              <button className="btn btn-lg btn-primary">
                Delete
              </button>
            </div>
          </li>
        ))
        }
      </ul>

      <dialog ref={modalRef} className="modal">
        <form>
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
        </form>

      </dialog>
    </>
  );
}