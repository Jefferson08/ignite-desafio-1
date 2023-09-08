import {TaskForm} from "./components/TaskForm";
import {Header} from "./components/Header";
function App() {
  return (
      <>
          <Header/>

          <main>
              <div className="container">
                  <TaskForm/>
              </div>
          </main>

      </>
  )
}
export default App
