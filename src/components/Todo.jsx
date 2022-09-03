import React, { useEffect, useState } from "react";
import axios from "axios";
const Todo = () => {
  //hooks
  const [todo, setTodo] = useState([]);
  //state

  useEffect(() => {
    console.log("hellow");
    fetchTodoData();
  }, []);
  // function

  const fetchTodoData = async () => {
    const url = "http://localhost:8080";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex  flex-col space-x-2 ">
        {todo.map((i) => {
          return (
            <div
              key={i.id}
              className="flex justify-between items-center  p-1 max-w-[300px] mt-10"
            >
             
              <div>{i.title}</div>
              <div>
                <button
                  type="button"
                  className="bg-red-500 rounded p-1 text-white hover:bg-red-400"
                  onClick={(e) => {
                    const delTodo = async () => {
                      try {
                        await axios.delete(
                          `http://localhost:8080/deleteTodo/${i.id}`
                        );
                      } catch (error) {
                        console.log(error.message);
                      }
                    };
                    delTodo();
                  }}
                >
                  Del
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
