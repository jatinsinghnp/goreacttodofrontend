import React from "react";
import Todo from "./Todo";
import axios from "axios";
import { useState } from "react";
import urid from "urid";

const Home = () => {
  // hooks
  const [todos, setTodo] = useState("");
  // effect

  // function

  const addToDo = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/create";
    const data = {
      id: urid(),
      title: todos,
      desc: "hellow world ",
    };
    const sentTodo = async () => {
      try {
        await axios.post(url, data);
      } catch (error) {
        console.log(error.message);
      }
    };
    sentTodo();
  };
  return (
    <>
      <h1 className="p-1 text-2xl text-center font-bold ">Todo list api</h1>
      <div className="m-auto w-[400px] h-auto mt-10 p-1  flex flex-col space-y-4">
        <form action="POST">
          <div>
            <input
              type="text"
              placeholder="todos"
              className="outline-none"
              onChange={(e) => setTodo(e.target.value)}
              value={todos}
            />
            <button
              type="submit"
              className="bg-black text-white rounded p-1 hover:text-black hover:bg-white "
              onClick={addToDo}
            >
              Todo
            </button>
          </div>
        </form>

        <Todo />
      </div>
    </>
  );
};

export default Home;
