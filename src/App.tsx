import {TaskForm} from "./components/TaskForm";
import {Header} from "./components/Header";
import {Task} from "./components/Task.tsx";
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

export interface TaskProps {
    id: string
    text: string,
    done: boolean,
}

function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    const handleAddTask = (text: string) => {
        const newTask: TaskProps = {
            id: uuidv4(),
            text: text,
            done: false,
        }

        setTasks([...tasks, newTask])
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
        const newTasks = tasks.filter(task => task.id!== id)

        setTasks(newTasks)
    }

    return (
      <>
          <Header/>

          <main>
              <div className="container mb-16">
                  <TaskForm handleAddTask={handleAddTask} />
              </div>

              <div className="container">
                  <div className="taks-container flex flex-col gap-3">
                      {tasks.map(task => (
                          <Task
                              key={task.id}
                              task={task}
                              handleToggle={handleToggleTask}
                              handleDelete={handleDeleteTask}
                          />
                      ))}
                  </div>
              </div>
          </main>

      </>
    )
}
export default App
