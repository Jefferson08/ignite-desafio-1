import {TaskForm} from "./components/TaskForm";
import {Header} from "./components/Header";
import {Task} from "./components/Task.tsx";
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useState} from "react";
import {Empty} from "./components/Empty.tsx";

export interface TaskProps {
    id: string
    text: string,
    done: boolean,
}

function App() {
    const [tasks, setTasks] = useState<TaskProps[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (text: string) => {
        const newTask: TaskProps = {
            id: uuidv4(),
            text: text,
            done: false,
        }

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const handleToggleTask = (id: string) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                return {
                   ...task,
                    done:!task.done
                }
            }
            return task
        })

        setTasks(newTasks)
    }

    const handleDeleteTask = (id: string) => {
        if(confirm('Are you sure you want to delete this task?')) {
            const newTasks = tasks.filter(task => task.id!== id)

            setTasks(newTasks)
        }
    }

    const completedTasksCount = tasks.reduce((acc, task) => {
      if (task.done) {
        acc++;
      }
      return acc;
    }, 0);

    return (
      <>
          <Header/>

          <main>
              <div className="container mb-16">
                  <TaskForm handleAddTask={handleAddTask} />
              </div>

              <div className="container">

                  <div className="flex justify-between mb-6">
                      <aside className="flex items-center gap-2">
                          <p className="text-sm text-blue font-bold">Tarefas criadas</p>
                          <p className="flex items-center bg-gray-400 text-xs text-gray-200 font-bold px-2 rounded-full h-[19px]">{tasks.length}</p>
                      </aside>

                      <aside className="flex items-center gap-2">
                          <p className="text-sm text-purple font-bold">Concluídas</p>
                          <p className="flex items-center bg-gray-400 text-xs text-gray-200 font-bold px-2 rounded-full h-[19px]">{completedTasksCount}</p>
                      </aside>
                  </div>

                  <div className="taks-container flex flex-col gap-3">
                      {tasks.map(task => (
                          <Task
                              key={task.id}
                              task={task}
                              handleToggle={handleToggleTask}
                              handleDelete={handleDeleteTask}
                          />
                      ))}

                      {tasks.length === 0 && (<Empty />)}
                  </div>
              </div>
          </main>

      </>
    )
}
export default App
