import { IoMdAdd } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import {  useState } from "react";
const todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Cheese, Eggs, Fruits",
    dueDate: "2024-06-01",
    completed: false,
  },
  {
    id: 2,
    title: "Finish React project",
    description: "Complete the to-do list app for the portfolio",
    dueDate: "2024-06-05",
    completed: false,
  },
  {
    id: 3,
    title: "Exercise",
    description: "Go for a 30-minute run",
    dueDate: "2024-06-02",
    completed: true,
  },
  {
    id: 4,
    title: "Read a book",
    description: "Finish reading 'The Great Gatsby'",
    dueDate: "2024-06-03",
    completed: false,
  },
  {
    id: 5,
    title: "Clean the house",
    description: "Vacuum, dust, and mop all rooms",
    dueDate: "2024-06-04",
    completed: false,
  },
  {
    id: 6,
    title: "Call mom",
    description: "Check in and have a chat",
    dueDate: "2024-06-01",
    completed: true,
  },
  {
    id: 7,
    title: "Prepare presentation",
    description: "Create slides for the upcoming meeting",
    dueDate: "2024-06-07",
    completed: false,
  },
  {
    id: 8,
    title: "Plan weekend trip",
    description: "Choose destination and book accommodation",
    dueDate: "2024-06-06",
    completed: false,
  },
];

const App = () => {
  const [input , setInput ] = useState("");
  const [todoArray , setTodoArray ] = useState(todos);


  const addTodo = () => {

    setTodoArray(
      [...todoArray , {
        id:todoArray.length + 1,
        title:input,
        description:input,
        completed:false,
      }]
    )
    setInput(" ");
  }
  
  
  
  return (
    <main className="w-full flex  min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="min-w-[420px] min-h-[480px] bg-white mx-auto mt-20 x-4 py-4 ">
        <h1 className="text-center text-4xl "> Todo App </h1>
        <div>
          <div className="flex items-center gap-4 py-4 my-4 justify-center">
            <input
              className="px-2 w-80 py-3 bg-slate-100 shadow-lg"
              type="text"
              name="text"
              placeholder="Enter Your todos..."
              value={input}
              onChange={(e) =>setInput(e.target.value)}
            />
            <IoMdAdd className=" w-8 h-8  bg-indigo-500 text-white rounded-full"
             onClick={addTodo}
            />
          </div>
        </div>

        <ul className=" py-4 flex flex-col px-6  gap-4 shadow-xl">
          {todoArray.map((todo) => (
            <li className="flex items-center py-3 shadow-sm bg-slate-50  " key={todo.id}>
               {
                todo.completed ? <IoIosCheckmarkCircleOutline className="text-2xl text-green-600 w-[10%] " /> : <MdOutlineRadioButtonUnchecked  className="text-xl w-[10%] "/>
               }
               <p className="w-[80%] stroke-black "> {todo.title} </p>
               <MdDelete className="w-[10%] text-2xl text-red-500" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
